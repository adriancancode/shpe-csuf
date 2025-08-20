'use client';
import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import {Tabs, TabsList, TabsTrigger, TabsContent} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin, Clock } from "lucide-react";
import Image from 'next/image';
import eventsData from '@/app/events/eventsList';


export default function EventsSection() {
  return (
    <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upcoming">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {eventsData.upcomingEvents.map((event, index) => (
                  <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-shadow overflow-hidden">
                    <div className="relative h-48">
                      <Image 
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge variant="outline" className="bg-white/90 text-gray-800">
                          {event.type}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="text-xl">{event.title}</CardTitle>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <CalendarDays className="h-4 w-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <CardDescription className="text-gray-700 mb-4">
                        {event.description}
                      </CardDescription>
                                     
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Event Features:</h4>
                        <div className="flex flex-wrap gap-2">
                          {event.features.map((feature, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <Button className="w-full bg-teal-600 hover:bg-teal-700">
                        View Announcement
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="past">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {eventsData.pastEvents.map((event, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-lg">{event.title}</CardTitle>
                      <div className="text-sm text-gray-600">
                        <div className="flex items-center space-x-2 mb-1">
                          <CalendarDays className="h-4 w-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <div className="text-2xl font-bold text-teal-600">{event.attendees}</div>
                        <div className="text-sm text-gray-500">attendees</div>
                      </div>
                      <CardDescription className="text-gray-700">
                        {event.highlights}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
  );
}