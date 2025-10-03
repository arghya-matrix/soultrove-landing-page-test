"use client"
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
      <section className="relative text-white py-6 sm:py-8 lg:py-10 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance leading-tight">
            What We Do
          </h1>
        </div>
      </section>

      {/* The Challenges We're Solving Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content - Left */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
                The Challenges We're Solving
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Families of persons with developmental disabilities often struggle with:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-base sm:text-lg text-foreground">
                    Scattered, unreliable, and non-credible information
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-base sm:text-lg text-foreground">
                    Limited and inconsistent access to quality therapies and schools
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Scale className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-base sm:text-lg text-foreground">
                    Legal and financial uncertainties regarding guardianship and future care
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-base sm:text-lg text-foreground">
                    Marginalization and lack of inclusion in mainstream society
                  </span>
                </li>
              </ul>
              <div className="bg-secondary/10 rounded-lg p-6 mt-8">
                <p className="text-lg font-semibold text-foreground mb-2">Our Solution</p>
                <p className="text-base text-muted-foreground">
                  Soultrove bridges these gaps by offering knowledge, verified services, community and long-term
                  planning in one seamless platform.
                </p>
              </div>
            </div>

            {/* Image - Right */}
            <div className="relative h-[400px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="/challenges-solving.jpg"
                alt="Families facing challenges with developmental disabilities support"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How Does Our App Work Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image - Left */}
            <div className="relative h-[400px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl order-2 lg:order-1">
              <img
                src="/app-workflow.jpg"
                alt="Soultrove app workflow and features"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content - Right */}
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">How Does Our App Work</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Simple step-by-step: Browse → Connect → Access Support → Track Progress → Gain knowledge & insights
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Heart className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Health & Therapies</h3>
                    <p className="text-base text-muted-foreground">Discover, book, track progress</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <BookOpen className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Education & Skill Building</h3>
                    <p className="text-base text-muted-foreground">Curated learning and vocational pathways</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Scale className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Legal & Financial Planning</h3>
                    <p className="text-base text-muted-foreground">Guardianship, trusts, future care tools</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Users className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Community & Inclusion</h3>
                    <p className="text-base text-muted-foreground">Peer support, events, workshops</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Star className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Marketplace & CSR Integration</h3>
                    <p className="text-base text-muted-foreground">
                      Assistive products, corporate-sponsored CSR initiatives
                    </p>
                  </div>
                </div>
              </div>
            </div>
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

      {/* Key Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content - Left */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
                Key Benefits Of Our App
              </h2>

              {/* For Parents & Families */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">For Parents & Families</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-foreground">One-stop ecosystem: </span>
                      <span className="text-muted-foreground">
                        Access therapies, education, skills, and future planning in one trusted platform.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-foreground">Continuity of care: </span>
                      <span className="text-muted-foreground">
                        Support across all life stages—childhood, adolescence, and adulthood.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-foreground">Verified providers: </span>
                      <span className="text-muted-foreground">
                        Connect with qualified therapists, educators, and experts near you.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-foreground">Knowledge hub: </span>
                      <span className="text-muted-foreground">
                        Learn through curated resources, success stories, and community insights.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-foreground">Future-ready planning: </span>
                      <span className="text-muted-foreground">
                        Legal and financial tools to secure your child's tomorrow.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-foreground">Community support: </span>
                      <span className="text-muted-foreground">
                        Feel less alone through shared experiences and peer connection.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* For Service Providers */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">For Service Providers</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-foreground">Increased visibility: </span>
                      <span className="text-muted-foreground">
                        Reach families actively seeking services in your city.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-foreground">Credibility & trust: </span>
                      <span className="text-muted-foreground">Be part of a verified, quality-first platform.</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-foreground">Collaboration opportunities: </span>
                      <span className="text-muted-foreground">
                        Work alongside other professionals for holistic outcomes.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-foreground">Simplified discovery: </span>
                      <span className="text-muted-foreground">
                        Families can find you by your offerings, specialization, language, location, infrastructure and
                        other filters.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-foreground">Impact at scale: </span>
                      <span className="text-muted-foreground">
                        Contribute to inclusion and long-term change for the community.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Image - Right */}
            <div className="relative h-[400px] lg:h-[700px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="/app-benefits.jpg"
                alt="Benefits of Soultrove app for families and service providers"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Copyright Only */}
      <footer className="text-white py-6 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-sm sm:text-base text-primary-foreground/80">
            <p>
              &copy; 2025 Soultrove. All rights reserved. |{" "}
              <Link href="/privacy" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>{" "}
              |{" "}
              <Link href="/terms" className="hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
