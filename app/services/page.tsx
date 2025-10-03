"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Shield, Star, BookOpen, Scale, Menu, X, CheckCircle } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function WhatWeDoPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="min-h-screen bg-background">
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
                  className="text-gray-700 px-3 py-2 text-sm font-medium hover:text-primary cursor-pointer transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-gray-700 px-3 py-2 text-sm font-medium hover:text-primary cursor-pointer transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="/services"
                  className="text-gray-900 px-3 py-2 text-sm font-medium hover:text-primary cursor-pointer transition-colors"
                >
                  What We Do
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-700 px-3 py-2 text-sm font-medium hover:text-primary cursor-pointer transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </nav>

            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-primary p-2 transition-colors"
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
                  className="text-gray-700 px-4 py-3 text-base font-medium hover:text-primary hover:bg-gray-50 cursor-pointer text-left transition-colors rounded-md mx-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-gray-700 px-4 py-3 text-base font-medium hover:text-primary hover:bg-gray-50 cursor-pointer text-left transition-colors rounded-md mx-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/services"
                  className="text-gray-900 px-4 py-3 text-base font-medium hover:text-primary hover:bg-gray-50 cursor-pointer text-left transition-colors rounded-md mx-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  What We Do
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-700 px-4 py-3 text-base font-medium hover:text-primary hover:bg-gray-50 cursor-pointer text-left transition-colors rounded-md mx-2"
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
      <section className="relative text-white py-8 sm:py-10 lg:py-12 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance leading-tight">
            What We Do
          </h1>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto px-4 text-primary-foreground/90">
            Building a comprehensive digital ecosystem that bridges gaps in knowledge, services, community, and
            long-term planning for families of persons with developmental disabilities.
          </p>
        </div>
      </section>

      {/* The Challenges We're Solving Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:3xl md:text-4xl font-bold text-gray-900 mb-4">The Challenges We're Solving</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Families of persons with developmental disabilities often struggle with interconnected challenges that we
              address through our holistic platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                title: "Scattered, unreliable, and non-credible information",
                description:
                  "Families spend countless hours searching for trustworthy information across multiple sources",
                icon: Shield,
              },
              {
                title: "Limited and inconsistent access to quality therapies and schools",
                description:
                  "Finding qualified providers and maintaining continuity of care remains a significant challenge",
                icon: Heart,
              },
              {
                title: "Legal and financial uncertainties regarding guardianship and future care",
                description:
                  "Complex legal and financial planning needs often go unaddressed due to lack of accessible guidance",
                icon: Scale,
              },
              {
                title: "Marginalization and lack of inclusion in mainstream society",
                description:
                  "Limited opportunities for community engagement and social inclusion affect long-term outcomes",
                icon: Users,
              },
            ].map((challenge, index) => (
              <Card
                key={index}
                className="bg-white hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-primary"
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start space-x-4">
                    <challenge.icon className="h-8 sm:h-10 w-8 sm:w-10 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">{challenge.title}</h3>
                      <p className="text-base sm:text-lg text-gray-600">{challenge.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-secondary/10 rounded-lg p-6 sm:p-8">
              <p className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Our Solution</p>
              <p className="text-base sm:text-lg text-gray-700">
                Soultrove bridges these gaps by offering knowledge, verified services, community and long-term planning
                in one seamless platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Does Our App Work Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:3xl md:text-4xl font-bold text-gray-900 mb-4">How Does Our App Work</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Simple step-by-step: Browse → Connect → Access Support → Track Progress → Gain knowledge & insights
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: "Health & Therapies",
                description: "Discover, book, track progress",
                icon: Heart,
                details:
                  "Connect with qualified therapists, healthcare providers, and track your progress through comprehensive care coordination.",
              },
              {
                title: "Education & Skill Building",
                description: "Curated learning and vocational pathways",
                icon: BookOpen,
                details:
                  "Access specialized education resources, vocational training programs, and skill development opportunities tailored to individual needs.",
              },
              {
                title: "Legal & Financial Planning",
                description: "Guardianship, trusts, future care tools",
                icon: Scale,
                details:
                  "Navigate complex legal requirements, establish trusts, and plan for long-term financial security with expert guidance.",
              },
              {
                title: "Community & Inclusion",
                description: "Peer support, events, workshops",
                icon: Users,
                details:
                  "Join a supportive community, participate in events, and access workshops designed to promote inclusion and connection.",
              },
              {
                title: "Marketplace & CSR Integration",
                description: "Assistive products, corporate-sponsored CSR initiatives",
                icon: Star,
                details:
                  "Access assistive technologies, products, and benefit from corporate social responsibility programs designed to support your journey.",
              },
            ].map((feature, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 sm:p-8 text-center">
                  <feature.icon className="h-12 sm:h-16 w-12 sm:w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-base sm:text-lg text-primary font-medium mb-4">{feature.description}</p>
                  <p className="text-sm sm:text-base text-gray-600">{feature.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:3xl md:text-4xl font-bold text-gray-900 mb-4">Key Benefits Of Our App</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Comprehensive benefits designed for both families seeking support and service providers looking to make an
              impact.
            </p>
          </div>

          {/* For Parents & Families */}
          <div className="mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">For Parents & Families</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  title: "One-stop ecosystem",
                  description: "Access therapies, education, skills, and future planning in one trusted platform.",
                },
                {
                  title: "Continuity of care",
                  description: "Support across all life stages-childhood, adolescence, and adulthood.",
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
                <Card
                  key={index}
                  className="bg-white hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-primary"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                        <p className="text-sm text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* For Service Providers */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">For Service Providers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
                <Card
                  key={index}
                  className="bg-white hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-secondary"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                        <p className="text-sm text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Copyright Only */}
      <footer className="text-white py-6 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-sm sm:text-base text-primary-foreground/80">
            <p>&copy; 2025 Soultrove. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
