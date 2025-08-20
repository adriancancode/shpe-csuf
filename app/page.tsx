"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { CalendarDays, Users, Trophy, MapPin, Clock, School, Briefcase } from "lucide-react"
import { 
  ParallaxText, 
  ScrollReveal, 
  FloatingText, 
  MagneticButton, 
  StaggerText, 
  ScrollProgress, 
} from "@/components/smooth-scroll"
import leadership from "@/app/leadership/leadershipData" // Assuming you have a leadership data file
import eventsData from "./events/eventsList"

export default function SHPELanding() {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 1)
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const programs = [
    {
      title: "Industry Partnerships",
      description: "Direct connections with Orange County's top engineering companies including Boeing, Raytheon, and innovative startups.",
      icon: <Briefcase className="h-8 w-8" />,
      color: "bg-blue-500"
    },
    {
      title: "Academic Excellence",
      description: "Tutoring, study groups, and academic support tailored to CSUF's engineering curriculum and faculty.",
      icon: <Trophy className="h-8 w-8" />,
      color: "bg-green-500"
    },
    {
      title: "Community Impact",
      description: "K-12 STEM outreach in Fullerton and Orange County schools to inspire the next generation of engineers.",
      icon: <Users className="h-8 w-8" />,
      color: "bg-purple-500"
    }
  ]

  const stats = [
    { number: 250, label: "CSUF Chapter Members", suffix: "+" },
    { number: 35, label: "Partner Companies", suffix: "+" },
    { number: 8, label: "Years at CSUF", suffix: "" },
    { number: 92, label: "Graduate Rate", suffix: "%" }
  ]

  const firstThreeLeadership = leadership.slice(0, 3);
  const firstTwoEvents = eventsData.upcomingEvents.slice(0, 2);
  
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      
      {/* Floating Background Text */}
      <FloatingText text="ENGINEERING • EXCELLENCE • COMMUNITY •" className="fixed top-1/4 z-0 text-black/80" speed={0.5} />
      <FloatingText text="• INNOVATION • LEADERSHIP • DIVERSITY" className="fixed top-3/4 z-0 text-black/80" speed={0.8} reverse />
      
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-teal-600 to-teal-800 text-white relative overflow-hidden">
        {/* Navigation */}
        <Header variant="hero"/>

        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center min-h-[80vh] relative">
          {/* Rotating Logo with Curved Text */}
          <div className="relative w-96 h-96 mb-16">
            <div className="absolute inset-0 w-full h-full" style={{ transform: `rotate(${rotation}deg)` }}>
              <svg className="w-full h-full" viewBox="0 0 384 384">
                <defs>
                  <path id="circle" d="M 192, 192 m -140, 0 a 140,140 0 1,1 280,0 a 140,140 0 1,1 -280,0" />
                </defs>
                <text className="fill-white text-sm font-medium tracking-wider">
                  <textPath href="#circle" startOffset="0%">
                    LEADING HISPANICS IN STEM • EMPOWERING FUTURE ENGINEERS • BUILDING COMMUNITY •
                  </textPath>
                </text>
              </svg>
            </div>

            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ transform: `rotate(${rotation * 0.5}deg)` }}
            >
              <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-2xl">
                <Image src="/shpe-logo.png" alt="SHPE Logo" width={160} height={100} className="object-contain" />
              </div>
            </div>
          </div>

          <div className="text-center">
            <ScrollReveal direction="up" delay={0.2}>
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-wider">SHPE</h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.4}>
              <h2 className="text-2xl md:text-3xl font-light text-orange-300 tracking-wide">
                SOCIETY OF HISPANIC PROFESSIONAL ENGINEERS
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.6}>
              <div className="mt-4 flex items-center justify-center space-x-2 text-white/80">
                <School className="h-6 w-6" />
                <span className="text-lg font-medium">Cal State Fullerton Chapter</span>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up" delay={0.8}>
            <div className="mt-8 text-center max-w-2xl">
              <p className="text-lg text-white/90 leading-relaxed">
                Empowering Hispanic engineers and scientists at California State University, Fullerton to achieve their full potential 
                while contributing to a diverse and inclusive STEM workforce in Orange County and beyond
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={1.0}>
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <a href="https://discord.gg/cXNeAGzy" target="_blank" rel="noopener noreferrer">
                <MagneticButton className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Join Now!
                </MagneticButton>
              </a>
              
              
            </div>
          </ScrollReveal>
        </div>

        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-orange-400 rounded-full opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-white rounded-full opacity-40"></div>
        <div className="absolute bottom-32 left-20 w-4 h-4 bg-orange-300 rounded-full opacity-50"></div>
        <div className="absolute bottom-20 right-32 w-2 h-2 bg-white rounded-full opacity-60"></div>
        <div className="absolute top-1/4 left-1/4 w-8 h-8 border border-white/20 rotate-45 opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/4 w-6 h-6 border border-orange-400/30 rotate-12 opacity-40"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <StaggerText 
                text="About SHPE" 
                className="text-4xl font-bold text-gray-900 mb-4 justify-center"
              />
              <ScrollReveal direction="up" delay={0.3}>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Founded in 1974, SHPE has been at the forefront of empowering Hispanic professionals in STEM fields,
                  creating pathways to success and building stronger communities.
                </p>
              </ScrollReveal>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left" delay={0.2}>
              <div>
                <h3 className="text-2xl font-semibold mb-6">Our Mission</h3>
                <p className="text-gray-700 mb-6">
                  SHPE changes lives by empowering the Hispanic community to realize their fullest potential and to impact 
                  the world through STEM awareness, access, support and professional development.
                </p>
                <h3 className="text-2xl font-semibold mb-6">Our Vision</h3>
                <p className="text-gray-700">
                  SHPE's vision is a world where Hispanics are highly valued and influential as the leading innovators, 
                  scientists, mathematicians and engineers.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.4}>
              <div className="relative">
                <ParallaxText speed={0.2}>
                  <Image 
                    src="/placeholder.png"
                    alt="SHPE Community" 
                    width={500} 
                    height={400} 
                    className="rounded-lg shadow-lg"
                  />
                </ParallaxText>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CSUF Specific Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Proudly Serving Cal State Fullerton</h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Located in the heart of Orange County, our CSUF chapter connects students with the thriving tech and engineering industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-0 text-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <School className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">Engineering Excellence</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-orange-100">
                  CSUF's College of Engineering & Computer Science provides world-class education with faculty engaged in cutting-edge research
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-0 text-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">Orange County Hub</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-orange-100">
                  Strategic location near major tech companies including Boeing, Raytheon, and countless startups in the region
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-0 text-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">Diverse Community</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-orange-100">
                  CSUF is recognized as one of the most diverse universities in the nation, with 40% Hispanic/Latino enrollment
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-teal-50 relative overflow-hidden">
        
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <StaggerText 
                text="Our Impact" 
                className="text-4xl font-bold text-gray-900 mb-4 justify-center"
              />
              <ScrollReveal direction="up" delay={0.3}>
                <p className="text-xl text-gray-600">Numbers that showcase our commitment to excellence</p>
              </ScrollReveal>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <div className="text-center group">
                  <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2 transform transition-transform group-hover:scale-110">
                    <AnimatedCounter 
                      end={stat.number} 
                      duration={2500}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="text-gray-700 font-medium">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <StaggerText 
                text="Our Programs" 
                className="text-4xl font-bold text-gray-900 mb-4 justify-center"
              />
              <ScrollReveal direction="up" delay={0.3}>
                <p className="text-xl text-gray-600">Comprehensive support for every stage of your STEM journey</p>
              </ScrollReveal>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.2} className="h-full">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 ${program.color} rounded-full flex items-center justify-center text-white mx-auto mb-4 transition-transform duration-300 hover:scale-110`}>
                      {program.icon}
                    </div>
                    <CardTitle className="text-xl">{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-600">
                      {program.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SHPEtinas Section */}
      <section id="shpetinas" className="py-20 bg-pink-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <StaggerText 
                text="SHPEtinas" 
                className="text-4xl font-bold text-gray-900 mb-4 justify-center"
              />
              <ScrollReveal direction="up" delay={0.3}>
                <p className="text-xl text-gray-600">Igniting Latinas in STEM</p>
              </ScrollReveal>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="right" delay={0.2}>
              <div>
                <h3 className="text-2xl font-semibold mb-6">About</h3>
                <p className="text-gray-700 mb-6">
                  Our sister chapter acts as a support group for SHPE members, providing mentorship, mindful practices, and 
                  a community that intends to uplift underrepresented groups in STEM.
                </p>
                <a href="https://discord.gg/aTKeebky" target="_blank" rel="noopener noreferrer">
                  <MagneticButton className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                    Join SHPEtinas!
                  </MagneticButton>
                </a>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.4}>
              <div className="relative">
                <ParallaxText speed={0.2}>
                  <Image 
                    src="/shpetinas-logo.png"
                    alt="SHPEtinas Logo with tagline 'Igniting Latinas in STEM'" 
                    width={500} 
                    height={400} 
                    className="rounded-lg shadow-lg"
                  />
                </ParallaxText>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-20 bg-gray-50 relative overflow-hidden">
        <ParallaxText speed={0.1} className="absolute inset-0 opacity-5">
          <FloatingText text="LEADERSHIP • EXCELLENCE • DEDICATION •" />
        </ParallaxText>
        
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <StaggerText 
                text="Leadership Team" 
                className="text-4xl font-bold text-gray-900 mb-4 justify-center"
              />
              <ScrollReveal direction="up" delay={0.3}>
                <p className="text-xl text-gray-600">Meet the dedicated professionals leading our chapter</p>
              </ScrollReveal>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {firstThreeLeadership.map((leader, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <CardHeader>
                    <Avatar className="w-24 h-24 mx-auto mb-4 transition-transform group-hover:scale-110">
                      <AvatarImage src={leader.image} alt={leader.name} />
                      <AvatarFallback>{leader.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-xl">{leader.name}</CardTitle>
                    <Badge variant="secondary" className="bg-teal-100 text-teal-800">
                      {leader.role}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {leader.bio}
                    </CardDescription>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal direction="up" delay={0.5}>
            <div className="text-center mt-12">
              <Link href="/leadership">
                <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-all duration-300">
                  Meet the Full Team
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-white relative overflow-hidden">
        <FloatingText text="EVENTS • NETWORKING • GROWTH •" className="absolute bottom-10 opacity-5" speed={0.4} reverse />
        
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <StaggerText 
                text="Upcoming Events" 
                className="text-4xl font-bold text-gray-900 mb-4 justify-center"
              />
              <ScrollReveal direction="up" delay={0.3}>
                <p className="text-xl text-gray-600">Join us for networking, learning, and professional growth</p>
              </ScrollReveal>
            </div>
          </ScrollReveal>
          
          <div className='relative'>
            <div className='overflow-hidden'>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {firstTwoEvents.map((event, index) => (
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
            </div>
            <ScrollReveal direction="up" delay={0.5}>
              <div className="text-center mt-12">
                <Link href="/events">
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-all duration-300">
                    View All Events
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-teal-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <Card className="border-0 shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="text-lg">Do I need to be Hispanic to join SHPE?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  No! SHPE welcomes anyone who supports our mission of empowering Hispanic professionals in STEM. 
                  We believe diversity of thought and background strengthens our community.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="text-lg">How do I join SHPE at CSUF?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Once you click "Join Now" at the very top of the page and accept the invite to our Discord Server,
                  you are officially a member of our SHPE CSUF chapter!
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="text-lg">What if I'm not currently in a STEM field but interested?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  SHPE supports career transitions and welcomes individuals exploring STEM fields. 
                  Our programs can help you navigate your path into STEM careers.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  )
}