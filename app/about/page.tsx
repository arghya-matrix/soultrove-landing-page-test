"use client"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function AboutPage() {
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
                  className="text-gray-900 px-3 py-2 text-sm font-medium hover:text-[#d16050] cursor-pointer transition-colors"
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
                  className="text-gray-700 px-4 py-3 text-base font-medium hover:text-[#d16050] hover:bg-gray-50 cursor-pointer text-left transition-colors rounded-md mx-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-gray-900 px-4 py-3 text-base font-medium hover:text-[#d16050] hover:bg-gray-50 cursor-pointer text-left transition-colors rounded-md mx-2"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance leading-tight">
            About Soultrove
          </h1>
          <p
            className="text-lg sm:text-xl mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto"
            style={{ color: "rgba(255, 255, 255, 0.9)" }}
          >
            India's first holistic digital ecosystem dedicated to supporting children and adults with developmental
            disabilities through lifelong solutions.
          </p>
        </div>
      </section>

      {/* About Us Main Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-last lg:order-first">
              <img
                src="/digital-ecosystem-mental-health-coach-lifetime-support.jpg"
                alt="Digital ecosystem showing lifetime support between mental health coach and patients"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Our Story</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Soultrove was born out of a deeply personal journey—one that resonates with millions of families
                navigating the lifelong challenges of developmental disabilities. We are building India's first holistic
                digital ecosystem dedicated to children and adults with Autism, ADHD, Learning Disabilities,
                Intellectual Disabilities, Cerebral Palsy, Down Syndrome, and related conditions.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Unlike fragmented solutions that focus only on a single stage of life or a single service, Soultrove
                brings everything together—healthcare, therapies, special education, vocational training, legal and
                financial planning, assisted living, and inclusion pathways—on one trusted platform.
              </p>
              <div className="space-y-3 mb-6 sm:mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0" style={{ color: "#d16050" }} />
                  <span className="text-sm sm:text-base text-gray-700">
                    <strong>Life-span support:</strong> From early diagnosis to adulthood, parents and individuals find
                    continuity of care.
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0" style={{ color: "#d16050" }} />
                  <span className="text-sm sm:text-base text-gray-700">
                    <strong>360° ecosystem:</strong> Families, service providers, legal experts, educators, and
                    employers under one roof.
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0" style={{ color: "#d16050" }} />
                  <span className="text-sm sm:text-base text-gray-700">
                    <strong>Future-focused:</strong> We don't just solve today's challenges; we help families secure
                    tomorrow's independence and economic sustenance.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:3xl md:text-4xl font-bold text-gray-900 mb-4">Who We Are</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              We are a passionate team of professionals, parents, and advocates united by a common mission to transform
              lives through technology and compassion.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
            <div className="text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                To create a comprehensive digital ecosystem that empowers individuals with developmental disabilities
                and their families to achieve independence, inclusion, and secure futures through accessible, quality
                services and community support.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                A world where every individual with developmental disabilities has access to the resources, support, and
                opportunities they need to thrive throughout their lifetime, fostering a truly inclusive society.
              </p>
            </div>
            <div>
              <img
                src="/diverse-team-working-together-on-inclusive-technol.jpg"
                alt="Team working on inclusive platform"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:3xl md:text-4xl font-bold text-gray-900 mb-4">Soultrove Leadership Team</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Meet the dedicated professionals and advocates working tirelessly to build a more inclusive future for
              individuals with developmental disabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {[
              {
                name: "Arindam Majumdar",
                role: "Founder & MD, Soultrove India Pvt Ltd",
                description:
                  "Arindam Majumdar is a senior business leader with 30+ years of experience across leading multinational organizations in energy, infrastructure and technology. He has held CEO and CXO roles, driving business growth, market expansion and successful turnarounds while building high-performing teams and fostering innovation. Driven by his journey as a parent to a young adult with developmental disability, Arindam founded Soultrove to empower families through access, inclusion and long-term sustainability, ensuring no journey is walked alone. At Soultrove, Arindam brings strategic vision and leadership experience to build India's most trusted digital ecosystem for developmental disabilities, enabling early diagnosis, holistic interventions, skill development and future planning.",
                image: "/arindam-majumdar-founder.jpg",
              },
              {
                name: "Swati Majumdar",
                role: "Director & Co-Founder, Soultrove India Pvt Ltd",
                description:
                  "Swati Majumdar, Co-Founder and Director at Soultrove, is deeply committed to empowering individuals with developmental disabilities. With a B.Tech in Computer Science and a decade of experience in leading global software services companies, she built expertise in development, delivery and stakeholder engagement. Choosing to leave her corporate career to become a full-time caregiver and teacher for her child, Swati gained first-hand understanding of the challenges faced by families navigating special needs. At Soultrove, she combines her technical knowledge, caregiving experience and passion to create a supportive ecosystem that empowers children, families and professionals to thrive together.",
                image: "/swati-majumdar-cofounder.jpg",
              },
              {
                name: "Rajeev Chakrabarti",
                role: "Director & CSMO, Soultrove India Pvt Ltd",
                description:
                  "Rajeev Chakrabarti brings over 25 years of leadership experience at the CXO level, where he scaled businesses, built brands, and guided organizations with vision and discipline. His entrepreneurial journey further strengthened his ability to merge strategy with purpose. As a parent, he deeply relates to the challenges families face in raising children with diverse needs and has witnessed these journeys closely through friends and relatives. At Soultrove, Rajeev leverages his strategic expertise and empathy to shape an inclusive ecosystem that improves access to therapy, healthcare, education and employment for individuals with autism and other developmental conditions across their life stages.",
                image: "/rajeev-chakrabarti-csmo.jpg",
              },
            ].map((member, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 sm:p-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 text-center">{member.name}</h4>
                  <p className="text-sm sm:text-base font-medium mb-4 text-center" style={{ color: "#d16050" }}>
                    {member.role}
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-left">{member.description}</p>
                </CardContent>
              </Card>
            ))}
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
