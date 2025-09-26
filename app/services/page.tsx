"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Shield, Star, BookOpen, Scale, Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function ServicesPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img src="/logo.svg" alt="Soultrove" className="h-12 sm:h-16 w-auto" />
              </div>
            </div>

            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link
                  href="/"
                  className="text-gray-700 px-3 py-2 text-sm font-medium hover:text-[#d16050] cursor-pointer transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-gray-700 px-3 py-2 text-sm font-medium hover:text-[#d16050] cursor-pointer transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="/services"
                  className="text-gray-900 px-3 py-2 text-sm font-medium hover:text-[#d16050] cursor-pointer transition-colors"
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-700 px-3 py-2 text-sm font-medium hover:text-[#d16050] cursor-pointer transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </nav>

            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-[#d16050] p-2 transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4 bg-white shadow-lg">
              <div className="flex flex-col space-y-1">
                <Link
                  href="/"
                  className="text-gray-700 px-4 py-3 text-base font-medium hover:text-[#d16050] hover:bg-gray-50 cursor-pointer text-left transition-colors rounded-md mx-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-gray-700 px-4 py-3 text-base font-medium hover:text-[#d16050] hover:bg-gray-50 cursor-pointer text-left transition-colors rounded-md mx-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/services"
                  className="text-gray-900 px-4 py-3 text-base font-medium hover:text-[#d16050] hover:bg-gray-50 cursor-pointer text-left transition-colors rounded-md mx-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-700 px-4 py-3 text-base font-medium hover:text-[#d16050] hover:bg-gray-50 cursor-pointer text-left transition-colors rounded-md mx-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative text-white py-12 sm:py-16 lg:py-20"
        style={{ background: `linear-gradient(135deg, #d16050 0%, #953f37 100%)` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance leading-tight">
            Our Services
          </h1>
          <p
            className="text-lg sm:text-xl mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto px-4"
            style={{ color: "rgba(255, 255, 255, 0.9)" }}
          >
            Comprehensive support services across all aspects of life for individuals with developmental disabilities
            and their families.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:3xl md:text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Our holistic approach covers every aspect of life, providing comprehensive support from early intervention
              to lifelong care.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {[
              {
                title: "Health & Therapies",
                description: "Discover, book, track progress with qualified therapists and healthcare providers",
                icon: Heart,
                image: "/family-therapy-session-with-parents-and-children.jpg",
                services: [
                  "Speech & Language Therapy",
                  "Occupational Therapy",
                  "Physical Therapy",
                  "Behavioral Therapy (ABA)",
                  "Developmental Pediatrics",
                  "Mental Health Support",
                ],
              },
              {
                title: "Education & Skill Building",
                description: "Curated learning and vocational pathways for lifelong development",
                icon: BookOpen,
                image: "/individual-therapy-session-one-on-one.jpg",
                services: [
                  "Special Education Schools",
                  "Inclusive Education Support",
                  "Vocational Training Programs",
                  "Life Skills Development",
                  "Academic Tutoring",
                  "Career Counseling",
                ],
              },
              {
                title: "Legal & Financial Planning",
                description: "Guardianship, trusts, future care tools for long-term security",
                icon: Scale,
                image: "/child-therapy-session-with-young-person.jpg",
                services: [
                  "Guardianship Planning",
                  "Special Needs Trusts",
                  "Estate Planning",
                  "Government Benefits Navigation",
                  "Legal Advocacy",
                  "Financial Planning",
                ],
              },
              {
                title: "Community & Inclusion",
                description: "Peer support, events, workshops, and inclusion pathways",
                icon: Users,
                image: "/group-therapy-circle-with-multiple-people.jpg",
                services: [
                  "Support Groups",
                  "Community Events",
                  "Inclusion Workshops",
                  "Peer Mentoring",
                  "Employment Support",
                  "Social Skills Training",
                ],
              },
            ].map((service, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <service.icon className="h-8 sm:h-10 w-8 sm:w-10 flex-shrink-0 mt-1" style={{ color: "#d16050" }} />
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-base sm:text-lg text-gray-600 mb-4">{service.description}</p>
                    </div>
                  </div>

                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-48 sm:h-56 object-cover rounded-lg mb-6"
                  />

                  <div className="space-y-2 mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Services Include:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.services.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#d16050" }}></div>
                          <span className="text-sm text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Our simple, step-by-step process makes it easy to access comprehensive support for developmental
              disabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 mb-12">
            {[
              {
                step: "1",
                title: "Browse",
                description: "Explore our comprehensive ecosystem of services and providers",
                image: "/consultation-meeting-with-therapist.jpg",
                details:
                  "Search by location, specialty, language, and specific needs to find the right match for your family.",
              },
              {
                step: "2",
                title: "Connect",
                description: "Find and connect with verified professionals in your area",
                image: "/therapist-matching-process.jpg",
                details: "View detailed profiles, read reviews, and schedule consultations with qualified providers.",
              },
              {
                step: "3",
                title: "Access Support",
                description: "Begin your journey with personalized care and services",
                image: "/therapy-session-beginning.jpg",
                details: "Start receiving services tailored to your individual needs and goals.",
              },
              {
                step: "4",
                title: "Track Progress",
                description: "Monitor development and adjust plans as needed",
                image: "/progress-tracking-in-therapy.jpg",
                details:
                  "Use our tools to track milestones, share progress with your team, and make data-driven decisions.",
              },
              {
                step: "5",
                title: "Gain Knowledge",
                description: "Access insights, resources, and community support",
                image: "/happy-family-with-children-and-parents.jpg",
                details: "Connect with other families, access educational resources, and build your support network.",
              },
            ].map((step, index) => (
              <Card key={index} className="bg-white text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 sm:p-6">
                  <img
                    src={step.image || "/placeholder.svg"}
                    alt={step.title}
                    className="w-full h-32 sm:h-40 object-cover rounded-lg mb-4"
                  />
                  <Badge
                    className="text-white text-base sm:text-lg px-3 py-1 mb-3 sm:mb-4"
                    style={{ backgroundColor: "#d16050" }}
                  >
                    {step.step}
                  </Badge>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{step.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3">{step.description}</p>
                  <p className="text-xs sm:text-sm text-gray-500">{step.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Process Benefits */}
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-8">Why Our Process Works</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Verified Quality",
                  description: "All providers are thoroughly vetted and credentialed",
                  icon: Shield,
                },
                {
                  title: "Personalized Matching",
                  description: "AI-powered recommendations based on your specific needs",
                  icon: Star,
                },
                {
                  title: "Continuous Support",
                  description: "Ongoing guidance throughout your journey",
                  icon: Heart,
                },
                {
                  title: "Community Driven",
                  description: "Built with input from families and providers",
                  icon: Users,
                },
              ].map((benefit, index) => (
                <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <benefit.icon
                      className="h-8 sm:h-10 w-8 sm:w-10 mx-auto mb-3 sm:mb-4"
                      style={{ color: "#d16050" }}
                    />
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                    <p className="text-sm sm:text-base text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Copyright Only */}
      <footer className="text-white py-6" style={{ backgroundColor: "#d16050" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center text-sm sm:text-base"
            style={{
              color: "rgba(255, 255, 255, 0.8)",
            }}
          >
            <p>&copy; 2025 Soultrove. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
