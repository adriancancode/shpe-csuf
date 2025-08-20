import Header from "@/components/Header"
import Footer from "@/components/Footer"
import LeadershipList from "@/components/LeadershipList"

export default function LeadershipPage() {

  return (
    <div className="min-h-screen">
      <Header variant="page" />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Leadership</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Meet the faces behind SHPE's mission to empower Hispanic professionals in STEM.
          </p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <LeadershipList/>
        </div>
      </section>
      <Footer />
    </div>
  )
} 