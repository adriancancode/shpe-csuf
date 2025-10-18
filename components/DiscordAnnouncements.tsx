// components/DiscordAnnouncements.tsx
"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock } from "lucide-react"

interface Announcement {
  id: string;
  content: string;
  author: {
    username: string;
    avatar: string;
  };
  timestamp: string;
  embeds: any[];
  attachments: any[];
}

export default function DiscordAnnouncements() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAnnouncements() {
      try {
        const response = await fetch('/api/discord-announcements');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setAnnouncements(data.announcements);
      } catch (err) {
        setError('Failed to load announcements');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchAnnouncements();
  }, []);

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true
    });
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="border-0 shadow-lg animate-pulse">
            <CardHeader>
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </CardHeader>
            <CardContent>
              <div className="h-20 bg-gray-200 rounded"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">{error}</p>
      </div>
    );
  }

  if (announcements.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No announcements at this time. Check back soon!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {announcements.slice(0, 3).map((announcement) => (
        <Card 
          key={announcement.id} 
          className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
        >
          <CardHeader>
            <div className="flex items-center justify-between mb-2">
              <Badge variant="secondary" className="bg-teal-100 text-teal-800">
                Announcement
              </Badge>
              <div className="flex items-center text-sm text-gray-500">
                <CalendarDays className="h-4 w-4 mr-1" />
                {formatDate(announcement.timestamp)}
              </div>
            </div>
            <CardTitle className="text-xl line-clamp-2">
              {announcement.content.split('\n')[0] || 'SHPE Announcement'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-600 line-clamp-3">
              {announcement.content.split('\n').slice(1).join(' ') || announcement.content}
            </CardDescription>
            <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {formatTime(announcement.timestamp)}
              </div>
              <span className="text-xs">By {announcement.author.username}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}