import Image from "next/image"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import EventsSection from "@/components/eventsSection"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Users, 
  Network,
  BookOpen,
  Briefcase
} from "lucide-react"

export default function EventsPage() {

  const eventTypes = [
    {
      type: "Conferences",
      icon: <Users className="h-8 w-8" />,
      description: "Large-scale events bringing together professionals nationwide",
      count: "3-5 annually"
    },
    {
      type: "Career Fairs",
      icon: <Briefcase className="h-8 w-8" />,
      description: "Direct connections with employers and career opportunities",
      count: "15+ annually"
    },
    {
      type: "Workshops",
      icon: <BookOpen className="h-8 w-8" />,
      description: "Skill-building sessions and professional development",
      count: "13+ annually"
    },
    {
      type: "Networking",
      icon: <Network className="h-8 w-8" />,
      description: "Professional mixers and community building events",
      count: "50+ annually"
    }
  ]

  return (
    <div className="min-h-screen">
      <Header variant="page" />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Events & Programs</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Connect, learn, and grow with the Hispanic STEM community through our diverse range of events and programs.
          </p>
        </div>
      </section>

      {/* Event Types Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Types of Events</h2>
            <p className="text-xl text-gray-600">Diverse opportunities for every stage of your career</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventTypes.map((eventType, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mx-auto mb-4">
                    {eventType.icon}
                  </div>
                  <CardTitle className="text-xl">{eventType.type}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {eventType.description}
                  </CardDescription>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                    {eventType.count}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <EventsSection/>

      {/* Host an Event */}
      <section className="py-20 bg-teal-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Host an Event</h2>
              <p className="text-xl text-teal-100 mb-8">
                Interested in organizing a SHPE event in your area? We provide resources, 
                support, and guidance to help you create impactful events for the community.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Event planning resources and templates</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Marketing and promotional support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Access to speaker network</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Funding opportunities</span>
                </li>
              </ul>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Become an Event Host
              </Button>
            </div>
            <div className="relative">
              <Image 
                src="/placeholder.jpg"
                alt="Event hosting"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 