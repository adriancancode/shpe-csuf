import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">SHPE</h3>
            <p className="text-gray-400 mb-4">
              Empowering Hispanic professionals in STEM since 1974.
            </p>
            <div className="flex space-x-3">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-400 hover:text-white hover:bg-gray-800"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <a href="https://www.instagram.com/shpe_csuf/?next=%2F" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-gray-400 hover:text-white hover:bg-gray-800"
                >
                  <Instagram className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/events" className="hover:text-white transition-colors">Events</Link></li>
              <li><Link href="/leadership" className="hover:text-white transition-colors">Leadership</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">Scholarships</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Career Center</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Mentorship</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Newsletter</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>csufshpe@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Cal State Fullerton</span>
              </li>
              <li>800 N State College Blvd</li>
              <li>Fullerton, CA 92831</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Society of Hispanic Professional Engineers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 