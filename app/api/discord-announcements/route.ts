import { NextResponse } from "next/server";

export default async function discordhandler() {
    const BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
    const CHANNEL_ID = process.env.DISCORD_ANNOUNCEMENTS_CHANNEL_ID;
}