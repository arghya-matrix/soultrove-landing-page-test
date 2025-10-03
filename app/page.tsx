"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card shadow-sm sticky top-0 z-50">
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
                  className="text-foreground px-3 py-2 text-sm font-medium hover:text-primary cursor-pointer transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-muted-foreground px-3 py-2 text-sm font-medium hover:text-primary cursor-pointer transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="/services"
                  className="text-muted-foreground px-3 py-2 text-sm font-medium hover:text-primary cursor-pointer transition-colors"
                >
                  What We Do
                </Link>
                <Link
                  href="/contact"
                  className="text-muted-foreground px-3 py-2 text-sm font-medium hover:text-primary cursor-pointer transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </nav>

            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-muted-foreground hover:text-primary p-2 transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-border py-4 bg-card shadow-lg">
              <div className="flex flex-col space-y-1">
                <Link
                  href="/"
                  className="text-foreground px-4 py-3 text-base font-medium hover:text-primary hover:bg-secondary cursor-pointer text-left transition-colors rounded-md mx-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-muted-foreground px-4 py-3 text-base font-medium hover:text-primary hover:bg-secondary cursor-pointer text-left transition-colors rounded-md mx-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/services"
                  className="text-muted-foreground px-4 py-3 text-base font-medium hover:text-primary hover:bg-secondary cursor-pointer text-left transition-colors rounded-md mx-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  What We Do
                </Link>
                <Link
                  href="/contact"
                  className="text-muted-foreground px-4 py-3 text-base font-medium hover:text-primary hover:bg-secondary cursor-pointer text-left transition-colors rounded-md mx-2"
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
      <section className="relative text-primary-foreground py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance leading-tight">
                Building independence, inclusion and futures together
              </h1>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 leading-relaxed text-primary-foreground/90">
                Soultrove is a holistic digital ecosystem supporting children and adults with developmental
                disabilities. We connect families to therapies, education, skill-building, legal and financial planning,
                and long-term care solutions - all in one trusted platform. From early childhood to adulthood, Soultrove
                empowers families with access, inclusion and future security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary w-full sm:w-auto"
                >
                  App Coming Soon - Join Waitlist
                  <ArrowRight className="ml-2 h-5 w-5" />
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

      {/* Soultrove at a Glance Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:3xl md:text-4xl font-bold text-foreground mb-4">Soultrove at a glance</h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left side - Image */}
            <div className="w-full lg:w-1/2">
              <img
                src="/professional-therapist-counseling-session.jpg"
                alt="Professional therapy and support services"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>

            {/* Right side - Text content */}
            <div className="w-full lg:w-1/2">
              <div className="text-base sm:text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Soultrove was born out of a deeply personal journey-one that resonates with millions of families
                  navigating the lifelong challenges of developmental disabilities. We are building{" "}
                  <strong className="text-foreground">India's first holistic digital ecosystem</strong> dedicated to
                  children and adults with Autism, ADHD, Learning Disabilities, Intellectual Disabilities, Cerebral
                  Palsy, Down Syndrome, and related conditions.
                </p>

                <p>
                  Unlike fragmented solutions that focus only on a single stage of life or a single service, Soultrove
                  brings everything together-
                  <strong className="text-foreground">
                    healthcare, therapies, special education, vocational training, legal and financial planning,
                    assisted living, and inclusion pathways
                  </strong>
                  -on one trusted platform.
                </p>

                <div className="bg-secondary p-6 rounded-lg mt-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Our differentiator is simple yet powerful:
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0 text-primary" />
                      <p className="text-secondary-foreground">
                        <strong>Life-span support:</strong> From early diagnosis to adulthood, parents and individuals
                        find continuity of care.
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0 text-primary" />
                      <p className="text-secondary-foreground">
                        <strong>360° ecosystem:</strong> Families, service providers, legal experts, educators, and
                        employers under one roof.
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0 text-primary" />
                      <p className="text-secondary-foreground">
                        <strong>Future-focused:</strong> We don't just solve today's challenges; we help families secure
                        tomorrow's independence and economic sustenance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:3xl md:text-4xl font-bold text-foreground mb-4">Mission</h2>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg sm:text-xl text-secondary-foreground leading-relaxed">
              To empower individuals with developmental disabilities and their families at every stage of life - from
              diagnosis to adulthood and beyond - through compassionate access to care, inclusive opportunities, and
              sustainable planning for the future.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:3xl md:text-4xl font-bold text-foreground mb-4">Vision</h2>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              A world where every person with a developmental disability can live a life of dignity, independence, and
              purpose - supported by a connected ecosystem that grows with them across their life journey.
            </p>
          </div>
        </div>
      </section>

      {/* Goal Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:3xl md:text-4xl font-bold text-foreground mb-4">Goal</h2>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg sm:text-xl text-secondary-foreground leading-relaxed">
              To become the most trusted, life-span-focused digital ecosystem for developmental disabilities -
              integrating care, education, skills, employment, and long-term planning - so that no family ever walks
              this path alone.
            </p>
          </div>
        </div>
      </section>

      {/* Footer - Copyright Only */}
      <footer className="text-primary-foreground py-6 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-sm sm:text-base text-primary-foreground/80">
            <p>&copy; 2025 Soultrove. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
