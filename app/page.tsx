"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Shield, Star, ArrowRight, CheckCircle, Menu, X, Scale, Globe } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function HomePage() {
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
                  className="text-gray-900 px-3 py-2 text-sm font-medium hover:text-[#d16050] cursor-pointer transition-colors"
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
                  className="text-gray-700 px-3 py-2 text-sm font-medium hover:text-[#d16050] cursor-pointer transition-colors"
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
                  className="text-gray-900 px-4 py-3 text-base font-medium hover:text-[#d16050] hover:bg-gray-50 cursor-pointer text-left transition-colors rounded-md mx-2"
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
                  className="text-gray-700 px-4 py-3 text-base font-medium hover:text-[#d16050] hover:bg-gray-50 cursor-pointer text-left transition-colors rounded-md mx-2"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance leading-tight">
                Building independence, inclusion and futures together
              </h1>
              <p
                className="text-lg sm:text-xl mb-6 sm:mb-8 leading-relaxed"
                style={{ color: "rgba(255, 255, 255, 0.9)" }}
              >
                Every soul is a treasure. As India's first holistic digital ecosystem, Soultrove supports children and
                adults with developmental disabilities through health, education, skills, legal planning and inclusion -
                offering lifelong solutions under one platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-white hover:bg-gray-100 w-full sm:w-auto" style={{ color: "#d16050" }}>
                  Start your journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white w-full sm:w-auto bg-transparent"
                  style={{ borderColor: "white" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "white"
                    e.currentTarget.style.color = "#d16050"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent"
                    e.currentTarget.style.color = "white"
                  }}
                >
                  App Coming Soon – Join Waitlist
                </Button>
              </div>
            </div>
            <div className="relative order-first lg:order-last">
              <img
                src="/happy-family-in-therapy-session.jpg"
                alt="Family with developmental disabilities support"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We're Solving Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:3xl md:text-4xl font-bold text-gray-900 mb-4">What We're Solving</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Families of persons with developmental disabilities often struggle with multiple challenges that we
              address comprehensively
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                title: "Scattered Information",
                description: "Unreliable and non-credible information sources",
                icon: Globe,
              },
              {
                title: "Limited Access",
                description: "Inconsistent access to quality therapies and schools",
                icon: Shield,
              },
              {
                title: "Legal Uncertainties",
                description: "Financial uncertainties regarding guardianship and future care",
                icon: Scale,
              },
              {
                title: "Social Marginalization",
                description: "Lack of inclusion in mainstream society",
                icon: Users,
              },
            ].map((problem, index) => (
              <Card key={index} className="bg-amber-50 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 sm:p-6 text-center">
                  <problem.icon className="h-8 sm:h-10 w-8 sm:w-10 mx-auto mb-3 sm:mb-4" style={{ color: "#d16050" }} />
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{problem.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{problem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <p className="text-base sm:text-lg text-gray-700 font-medium">
              Soultrove bridges these gaps by offering knowledge, verified services, community, and long-term planning
              in one seamless platform.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-base sm:text-lg text-gray-600">What We Stand For</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
            {[
              {
                title: "Empathy",
                description: "Every family's journey matters; we listen first.",
                icon: Heart,
              },
              {
                title: "Integrity",
                description: "Transparent, ethical, and responsible in all we do.",
                icon: Shield,
              },
              {
                title: "Collaboration",
                description: "Together with families, providers, and communities for better outcomes.",
                icon: Users,
              },
              {
                title: "Inclusion",
                description: "Every individual deserves dignity and opportunity.",
                icon: Globe,
              },
              {
                title: "Future-readiness",
                description: "Building solutions that secure tomorrow, not just today.",
                icon: Star,
              },
            ].map((value, index) => (
              <Card key={index} className="bg-white text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 sm:p-6">
                  <value.icon className="h-8 sm:h-10 w-8 sm:w-10 mx-auto mb-3 sm:mb-4" style={{ color: "#d16050" }} />
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{value.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section id="benefits" className="py-12 sm:py-16 lg:py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:3xl md:text-4xl font-bold text-gray-900 mb-4">Key Benefits</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* For Parents & Families */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center lg:text-left">
                For Parents & Families
              </h3>
              <p className="text-base sm:text-lg text-gray-600 mb-6 text-center lg:text-left">
                "Why Parents Love Soultrove"
              </p>
              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    title: "One-stop ecosystem",
                    description: "Access therapies, education, skills, and future planning in one trusted platform.",
                  },
                  {
                    title: "Continuity of care",
                    description: "Support across all life stages—childhood, adolescence, and adulthood.",
                  },
                  {
                    title: "Verified providers",
                    description: "Connect with qualified therapists, educators, and experts near you.",
                  },
                  {
                    title: "Knowledge hub",
                    description: "Learn through curated resources, success stories, and community insights.",
                  },
                  {
                    title: "Future-ready planning",
                    description: "Legal and financial tools to secure your child's tomorrow.",
                  },
                  {
                    title: "Community support",
                    description: "Feel less alone through shared experiences and peer connection.",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                    <CheckCircle className="h-5 sm:h-6 w-5 sm:w-6 mt-1 flex-shrink-0" style={{ color: "#d16050" }} />
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">{benefit.title}</h4>
                      <p className="text-sm sm:text-base text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* For Service Providers */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center lg:text-left">
                For Service Providers
              </h3>
              <p className="text-base sm:text-lg text-gray-600 mb-6 text-center lg:text-left">
                "Why Providers Join Soultrove"
              </p>
              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    title: "Increased visibility",
                    description: "Reach families actively seeking services in your city.",
                  },
                  {
                    title: "Credibility & trust",
                    description: "Be part of a verified, quality-first platform.",
                  },
                  {
                    title: "Collaboration opportunities",
                    description: "Work alongside other professionals for holistic outcomes.",
                  },
                  {
                    title: "Simplified discovery",
                    description:
                      "Families can find you by your offerings, specialization, language, location, infrastructure and other filters.",
                  },
                  {
                    title: "Impact at scale",
                    description: "Contribute to inclusion and long-term change for the community.",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                    <CheckCircle className="h-5 sm:h-6 w-5 sm:w-6 mt-1 flex-shrink-0" style={{ color: "#d16050" }} />
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">{benefit.title}</h4>
                      <p className="text-sm sm:text-base text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
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
