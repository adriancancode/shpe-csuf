import { NextResponse } from 'next/server';

const BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
const EVENTS_CHANNEL_ID = process.env.DISCORD_EVENTS_CHANNEL_ID;

export async function GET() {
  console.log('API Route called');
  console.log('Bot Token exists:', !!BOT_TOKEN);
  console.log('Channel ID:', EVENTS_CHANNEL_ID);
  try {
    const response = await fetch(
      `https://discord.com/api/v10/channels/${EVENTS_CHANNEL_ID}/messages?limit=10`,
      {
        headers: {
          Authorization: `Bot ${BOT_TOKEN}`,
        },
        next: { revalidate: 300 }
      }
    );

    if (!response.ok) {
      throw new Error(`Discord API error: ${response.status}`);
    }

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
    console.error('Error fetching Discord announcements:', error);
    return NextResponse.json(
      { error: 'Failed to fetch announcements' },
      { status: 500 }
    );
  }
}