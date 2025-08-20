import Image from "next/image"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, Heart, Lightbulb, School, MapPin } from "lucide-react"

export default function AboutPage() {

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Familia",
      description: "We treat each other with respect, care, and support as family."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description: "We embrace innovation and creative problem-solving."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Diversity",
      description: "We celebrate and promote diversity in all its forms."
    }
  ]

  return (
    <div className="min-h-screen">
      <Header variant="page" />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">About SHPE</h1>
          <p className="text-xl max-w-3xl mx-auto">
            For over 50 years, SHPE has been the leading organization for Hispanic professionals in STEM, 
            creating opportunities and building bridges to success.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Purpose</h2>
              
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-teal-600 mb-4">Mission</h3>
                <p className="text-gray-700 text-lg">
                  SHPE changes lives by empowering the Hispanic community to realize their fullest 
                  potential and to impact the world through STEM awareness, access, support and 
                  professional development.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-teal-600 mb-4">Vision</h3>
                <p className="text-gray-700 text-lg">
                  SHPE's vision is a world where Hispanics are highly valued and influential as 
                  the leading innovators, scientists, mathematicians and engineers.
                </p>
              </div>
            </div>

            <div className="relative">
              <Image 
                src="/placeholder.jpg" 
                alt="SHPE Mission" 
                width={600} 
                height={400} 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm">Years of Impact</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mx-auto mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CSUF Chapter History */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Our CSUF Chapter</h2>
              
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-teal-600 mb-4 flex items-center">
                  <School className="h-6 w-6 mr-2" />
                  Established at Cal State Fullerton
                </h3>
                <p className="text-gray-700 text-lg">
                  Founded in 2016, our CSUF chapter has grown to become one of the most active SHPE chapters 
                  in Southern California, serving the diverse student body of California State University, Fullerton.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-teal-600 mb-4 flex items-center">
                  <MapPin className="h-6 w-6 mr-2" />
                  Orange County Impact
                </h3>
                <p className="text-gray-700 text-lg">
                  Located in the heart of Orange County's tech corridor, our chapter connects students with 
                  industry leaders at companies like Boeing, Raytheon, Broadcom, and innovative startups 
                  throughout the region.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-teal-50 rounded-lg">
                  <div className="text-2xl font-bold text-teal-600">40%</div>
                  <div className="text-sm text-gray-600">Hispanic/Latino CSUF Enrollment</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">8</div>
                  <div className="text-sm text-gray-600">Years of Service</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image 
                src="/placeholder.jpg" 
                alt="CSUF Campus" 
                width={600} 
                height={400} 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-teal-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">Top 10</div>
                <div className="text-sm">Most Diverse Universities</div>
                <div className="text-xs opacity-75">in the Nation</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
} 