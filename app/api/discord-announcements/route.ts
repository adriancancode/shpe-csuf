import { NextResponse } from 'next/server';

const BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
const EVENTS_CHANNEL_ID = process.env.DISCORD_EVENTS_CHANNEL_ID;

// limit the request for 10 seconds
const lastFetch = new Map<string, number>();

export async function GET(request: Request) {
  console.log('API Route called');
  console.log('Bot Token exists:', !!BOT_TOKEN);
  console.log('Channel ID:', EVENTS_CHANNEL_ID);

  // configuration validation
  if (!BOT_TOKEN || !EVENTS_CHANNEL_ID) {
    console.error('Discord configuration missing', {
      hasToken: !!BOT_TOKEN,
      channelId: EVENTS_CHANNEL_ID,
    });

    return NextResponse.json(
      {
        error: 'Discord announcements are not configured on the server.',
      },
      { status: 500 }
    );
  }

  const ip = request.headers.get('x-forwarded-for') || 'unknown';
  const now = Date.now();
  const lastTime = lastFetch.get(ip) ?? 0;

  // 1 request per 10 seconds per IP
  if (now - lastTime < 10_000) {
    return NextResponse.json(
      { error: 'Too many requests. Please wait a moment.' },
      { status: 429 }
    );
  }

  lastFetch.set(ip, now);

  try {
    const response = await fetch(
      `https://discord.com/api/v10/channels/${EVENTS_CHANNEL_ID}/messages?limit=10`,
      {
        headers: {
          Authorization: `Bot ${BOT_TOKEN}`,
        },
        next: { revalidate: 300 },
      }
    );

    // map discord status codes to specific error messages
    if (!response.ok) {
      console.error('Discord API error status:', response.status);

      // unauthorized or forbidden bot token
      if (response.status === 401 || response.status === 403) {
        return NextResponse.json(
          {
            error: 'Access denied. Discord bot may need reconfiguration.',
          },
          { status: 403 }
        );
      }

      // handles channel resource not found
      if (response.status === 404) {
        return NextResponse.json(
          {
            error:
              'Announcements service not found. Please contact the administrator.',
          },
          { status: 404 }
        );
      }

      // discord rate limiting
      if (response.status === 429) {
        const retryAfter = response.headers.get('retry-after');
        return NextResponse.json(
          {
            error:
              'Too many requests to Discord. Please try again later.',
            retryAfter,
          },
          { status: 429 }
        );
      }

      // upstream server errors from discord
      if (response.status >= 500) {
        return NextResponse.json(
          {
            error: 'Server error. Our team has been notified.',
          },
          { status: 500 }
        );
      }

      // fallback for not ok errors
      return NextResponse.json(
        { error: 'Unexpected Discord API error.' },
        { status: 500 }
      );
    }

    // normal path
    const messages = await response.json();

    const announcements = messages
      .filter((msg: any) => {
        return msg.content && msg.content.length > 0;
      })
      .map((msg: any) => ({
        id: msg.id,
        content: msg.content,
        author: {
          username: msg.author.username,
          avatar: msg.author.avatar,
        },
        timestamp: msg.timestamp,
        embeds: msg.embeds,
        attachments: msg.attachments,
      }));

    return NextResponse.json({ announcements });
  } catch (error) {
    // unexpected errors
    console.error('Error fetching Discord announcements:', error);

    return NextResponse.json(
      {
        error: 'Failed to fetch announcements',
      },
      { status: 500 }
    );
  }
}
