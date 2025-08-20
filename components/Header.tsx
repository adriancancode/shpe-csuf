"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

interface HeaderProps {
  variant?: 'hero' | 'page'
}

export default function Header({ variant = 'page' }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/about", label: "About" },
    
    { href: "/events", label: "Events" },
    { href: "/leadership", label: "Leadership" }
  ]

  const isHero = variant === 'hero'

  return (
    <nav className={`flex items-center justify-between p-6 relative z-10 ${
      isHero ? 'text-white' : 'bg-white shadow-sm text-gray-900'
    }`}>
      <Link href="/" className="text-2xl font-bold">
        SHPE
      </Link>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <Link 
            key={item.href}
            href={item.href} 
            className={`transition-colors ${
              isHero 
                ? 'hover:text-orange-300' 
                : 'hover:text-teal-600'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Mobile Navigation */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon"
            className={isHero ? 'text-white hover:bg-white/10' : 'text-gray-900'}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <div className="flex flex-col space-y-4 mt-8">
            {navItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href}
                className="text-lg font-medium hover:text-teal-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button className="mt-4 bg-teal-600 hover:bg-teal-700">
              Join Now
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      {/* Join Now Button */}
      <a href="https://discord.gg/cXNeAGzy" target="_blank" rel="noopener noreferrer">
        <Button 
          variant={isHero ? "outline" : "default"}
          className={`hidden md:inline-flex ${
            isHero 
              ? 'border-white text-teal-800 hover:bg-teal-600 hover:text-white' 
              : 'bg-teal-600 hover:bg-teal-700 text-white'
          }`}
        >
          Join Now
        </Button>
      </a>
      
    </nav>
  )
} 