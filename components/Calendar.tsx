"use client"

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarDays, Clock, MapPin, Users, ExternalLink } from "lucide-react"

// Example events data structure - replace with API data
const sampleEvents = [
  {
    id: "1",
    title: "SHPE General Meeting",
    description: "Monthly general meeting for all SHPE members. We'll discuss upcoming events and opportunities.",
    startDate: "2024-10-15T18:00:00Z",
    endDate: "2024-10-15T19:00:00Z",
    location: "Engineering Building Room 102",
    type: "meeting",
    isRecurring: true
  },
  {
    id: "2",
    title: "Industry Panel: Aerospace Engineering",
    description: "Panel discussion with engineers from Boeing, Raytheon, and SpaceX about careers in aerospace.",
    startDate: "2024-10-22T17:30:00Z",
    endDate: "2024-10-22T19:00:00Z",
    location: "Student Union Ballroom",
    type: "workshop",
    isRecurring: false
  },
  {
    id: "3",
    title: "Resume Review Workshop",
    description: "Bring your resume for professional review and feedback from industry professionals.",
    startDate: "2024-10-29T16:00:00Z",
    endDate: "2024-10-29T17:30:00Z",
    location: "Career Center",
    type: "workshop",
    isRecurring: false
  },
  {
    id: "4",
    title: "STEM Outreach at Local High School",
    description: "Volunteer opportunity to inspire high school students about STEM careers.",
    startDate: "2024-11-05T14:00:00Z",
    endDate: "2024-11-05T16:00:00Z",
    location: "Fullerton High School",
    type: "outreach",
    isRecurring: false
  }
]

// Google Calendar API integration function
const fetchGoogleCalendarEvents = async (calendarId, apiKey) => {
  try {
    const timeMin = new Date().toISOString()
    const timeMax = new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString() // Next 90 days
    
    const response = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?` +
      new URLSearchParams({
        key: apiKey,
        timeMin: timeMin,
        timeMax: timeMax,
        singleEvents: 'true',
        orderBy: 'startTime',
        maxResults: '50'
      })
    )
    
    if (!response.ok) throw new Error('Failed to fetch calendar events')
    
    const data = await response.json()
    
    return data.items?.map(event => ({
      id: event.id,
      title: event.summary,
      description: event.description || '',
      startDate: event.start.dateTime || event.start.date,
      endDate: event.end.dateTime || event.end.date,
      location: event.location || '',
      type: categorizeEvent(event.summary), // Custom function to categorize
      isRecurring: !!event.recurringEventId,
      url: event.htmlLink
    })) || []
  } catch (error) {
    console.error('Error fetching Google Calendar events:', error)
    return []
  }
}

// Helper function to categorize events based on title
const categorizeEvent = (title) => {
  const lowercaseTitle = title.toLowerCase()
  if (lowercaseTitle.includes('meeting')) return 'meeting'
  if (lowercaseTitle.includes('workshop') || lowercaseTitle.includes('panel')) return 'workshop'
  if (lowercaseTitle.includes('outreach') || lowercaseTitle.includes('volunteer')) return 'outreach'
  if (lowercaseTitle.includes('social') || lowercaseTitle.includes('networking')) return 'social'
  return 'other'
}

const getEventTypeColor = (type) => {
  const colors = {
    meeting: 'bg-blue-100 text-blue-800',
    workshop: 'bg-green-100 text-green-800',
    outreach: 'bg-purple-100 text-purple-800',
    social: 'bg-orange-100 text-orange-800',
    other: 'bg-gray-100 text-gray-800'
  }
  return colors[type] || colors.other
}

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return {
    date: date.toLocaleDateString('en-US', { 
      weekday: 'short',
      month: 'short', 
      day: 'numeric' 
    }),
    time: date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    })
  }
}

const Calendar = () => {
  const [events, setEvents] = useState(sampleEvents) // Start with sample data
  const [loading, setLoading] = useState(false)
  const [filter, setFilter] = useState('all')

  // Google Calendar API configuration
  const CALENDAR_ID = process.env.TEST_GOOGLE_CALENDAR_ID
  const API_KEY = process.env.TEST_GOOGLE_CALENDAR_API_KEY

  useEffect(() => {
    const loadEvents = async () => {
      setLoading(true)
      try {
        // Check if API credentials are available
        if (CALENDAR_ID && API_KEY) {
          const calendarEvents = await fetchGoogleCalendarEvents(CALENDAR_ID, API_KEY)
          setEvents(calendarEvents.length > 0 ? calendarEvents : sampleEvents)
        } else {
          console.warn('Google Calendar API credentials not found. Using sample data.')
          setEvents(sampleEvents)
        }
      } catch (error) {
        console.error('Error loading events:', error)
        setEvents(sampleEvents) // Fallback to sample data
      } finally {
        setLoading(false)
      }
    }

    loadEvents()
  }, [])

  const filteredEvents = events.filter(event => 
    filter === 'all' || event.type === filter
  )

  const upcomingEvents = filteredEvents.slice(0, 6) // Show next 6 events

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 justify-center">
        {['all', 'meeting', 'workshop', 'outreach', 'social'].map((filterType) => (
          <Button
            key={filterType}
            variant={filter === filterType ? "default" : "outline"}
            onClick={() => setFilter(filterType)}
            className={`capitalize ${
              filter === filterType 
                ? "bg-teal-600 hover:bg-teal-700" 
                : "hover:bg-teal-50"
            }`}
          >
            {filterType === 'all' ? 'All Events' : filterType}
          </Button>
        ))}
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {upcomingEvents.map((event) => {
          const { date, time } = formatDate(event.startDate)
          
          return (
            <Card key={event.id} className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start gap-2">
                  <CardTitle className="text-lg font-semibold line-clamp-2">
                    {event.title}
                  </CardTitle>
                  <Badge className={getEventTypeColor(event.type)}>
                    {event.type}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <CardDescription className="line-clamp-3">
                  {event.description}
                </CardDescription>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CalendarDays className="h-4 w-4" />
                    <span>{date}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>{time}</span>
                  </div>
                  
                  {event.location && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span className="line-clamp-1">{event.location}</span>
                    </div>
                  )}
                  
                  {event.isRecurring && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="h-4 w-4" />
                      <span>Recurring Event</span>
                    </div>
                  )}
                </div>

                {/* Google Calendar Link (if using Google Calendar API) */}
                {event.url && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-4"
                    onClick={() => window.open(event.url, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View in Calendar
                  </Button>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-12">
          <CalendarDays className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No Events Found</h3>
          <p className="text-gray-600">
            {filter === 'all' 
              ? "No upcoming events at this time." 
              : `No upcoming ${filter} events found.`
            }
          </p>
        </div>
      )}
    </div>
  )
}

export default Calendar