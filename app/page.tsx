"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Users,
  Shield,
  Star,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  BookOpen,
  Scale,
  Globe,
} from "lucide-react"
import { useState } from "react"

export default function LandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    console.log("[v0] Scrolling to section:", sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      })
    }
    setIsMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    console.log("[v0] Toggling mobile menu, current state:", isMobileMenuOpen)
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img src="/logo.svg" alt="Soultrove" className="h-8 sm:h-10 w-auto" />
              </div>
            </div>

            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-700 px-3 py-2 text-sm font-medium hover:text-[#d16050] cursor-pointer transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-700 px-3 py-2 text-sm font-medium hover:text-[#d16050] cursor-pointer transition-colors"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="text-gray-700 px-3 py-2 text-sm font-medium hover:text-[#d16050] cursor-pointer transition-colors"
                >
                  How it Works
                </button>
                <button
                  onClick={() => scrollToSection("benefits")}
                  className="text-gray-700 px-3 py-2 text-sm font-medium hover:text-[#d16050] cursor-pointer transition-colors"
                >
                  Benefits
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-700 px-3 py-2 text-sm font-medium hover:text-[#d16050] cursor-pointer transition-colors"
                >
                  Contact
                </button>
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
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-700 px-4 py-3 text-base font-medium hover:text-[#d16050] hover:bg-gray-50 cursor-pointer text-left transition-colors rounded-md mx-2"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-700 px-4 py-3 text-base font-medium hover:text-[#d16050] hover:bg-gray-50 cursor-pointer text-left transition-colors rounded-md mx-2"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="text-gray-700 px-4 py-3 text-base font-medium hover:text-[#d16050] hover:bg-gray-50 cursor-pointer text-left transition-colors rounded-md mx-2"
                >
                  How it Works
                </button>
                <button
                  onClick={() => scrollToSection("benefits")}
                  className="text-gray-700 px-4 py-3 text-base font-medium hover:text-[#d16050] hover:bg-gray-50 cursor-pointer text-left transition-colors rounded-md mx-2"
                >
                  Benefits
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-700 px-4 py-3 text-base font-medium hover:text-[#d16050] hover:bg-gray-50 cursor-pointer text-left transition-colors rounded-md mx-2"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

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

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-last lg:order-first">
              <img
                src="/professional-therapist-in-counseling-office.jpg"
                alt="About Soultrove"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">About Us</h2>
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
              <Button
                className="text-white w-full sm:w-auto"
                style={{ backgroundColor: "#d16050" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#953f37")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#d16050")}
              >
                Learn More About Us
              </Button>
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
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
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

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:3xl md:text-4xl font-bold text-gray-900 mb-4">What we do</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Comprehensive support services across all aspects of life for individuals with developmental disabilities
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                title: "Health & Therapies",
                description: "Discover, book, track progress with qualified therapists and healthcare providers",
                icon: Heart,
                image: "/family-therapy-session-with-parents-and-children.jpg",
              },
              {
                title: "Education & Skill Building",
                description: "Curated learning and vocational pathways for lifelong development",
                icon: BookOpen,
                image: "/individual-therapy-session-one-on-one.jpg",
              },
              {
                title: "Legal & Financial Planning",
                description: "Guardianship, trusts, future care tools for long-term security",
                icon: Scale,
                image: "/child-therapy-session-with-young-person.jpg",
              },
              {
                title: "Community & Inclusion",
                description: "Peer support, events, workshops, and inclusion pathways",
                icon: Users,
                image: "/group-therapy-circle-with-multiple-people.jpg",
              },
            ].map((service, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 sm:p-6">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4"
                  />
                  <service.icon className="h-6 sm:h-8 w-6 sm:w-8 mb-3 sm:mb-4" style={{ color: "#d16050" }} />
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{service.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">{service.description}</p>
                  <Button
                    variant="outline"
                    className="bg-transparent hover:text-white w-full"
                    style={{
                      borderColor: "#d16050",
                      color: "#d16050",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#d16050"
                      e.currentTarget.style.color = "white"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent"
                      e.currentTarget.style.color = "#d16050"
                    }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 sm:mt-12 text-center">
            <Card className="bg-amber-50 max-w-4xl mx-auto">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Marketplace & CSR Integration</h3>
                <p className="text-base sm:text-lg text-gray-600">
                  Access assistive products and corporate-sponsored CSR initiatives to support your journey
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-12 sm:py-16 lg:py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:3xl md:text-4xl font-bold text-gray-900 mb-4">How it works</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Simple step-by-step process to access comprehensive support for developmental disabilities
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
            {[
              {
                step: "1",
                title: "Browse",
                description: "Explore our comprehensive ecosystem of services and providers",
                image: "/consultation-meeting-with-therapist.jpg",
              },
              {
                step: "2",
                title: "Connect",
                description: "Find and connect with verified professionals in your area",
                image: "/therapist-matching-process.jpg",
              },
              {
                step: "3",
                title: "Access Support",
                description: "Begin your journey with personalized care and services",
                image: "/therapy-session-beginning.jpg",
              },
              {
                step: "4",
                title: "Track Progress",
                description: "Monitor development and adjust plans as needed",
                image: "/progress-tracking-in-therapy.jpg",
              },
              {
                step: "5",
                title: "Gain Knowledge",
                description: "Access insights, resources, and community support",
                image: "/happy-family-with-children-and-parents.jpg",
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
                  <p className="text-sm sm:text-base text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section id="benefits" className="py-12 sm:py-16 lg:py-20 bg-white">
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

      {/* Core Values Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-amber-50">
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

      {/* Testimonials */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:3xl md:text-4xl font-bold text-gray-900 mb-4">What our users have to say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                quote:
                  "Soultrove helped our family navigate through our toughest times. The therapists are incredibly compassionate and professional.",
                author: "Sarah M.",
                role: "Parent of two",
              },
              {
                quote:
                  "The individual counseling sessions gave me tools I never knew I needed. I'm grateful for the support and guidance.",
                author: "Michael R.",
                role: "Individual client",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-amber-50 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 sm:h-5 w-4 sm:w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="text-sm sm:text-base font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-12 sm:py-16 lg:py-20 text-white"
        style={{ background: `linear-gradient(135deg, #d16050 0%, #953f37 100%)` }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:3xl md:text-4xl font-bold mb-4 sm:mb-6">Get started with Soultrove today</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8" style={{ color: "rgba(255, 255, 255, 0.9)" }}>
            Join India's first holistic digital ecosystem for developmental disabilities. Your journey to independence,
            inclusion, and a secure future starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white hover:bg-gray-100 w-full sm:w-auto" style={{ color: "#d16050" }}>
              Start Your Journey Today
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
              Join Waitlist
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="text-white py-12 sm:py-16" style={{ backgroundColor: "#d16050" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Soultrove</h3>
              <p className="mb-4 text-sm sm:text-base" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                India's first holistic digital ecosystem supporting children and adults with developmental disabilities
                through lifelong solutions.
              </p>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Services</h4>
              <ul className="space-y-2 text-sm sm:text-base" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                <li>
                  <a href="#" className="hover:text-white">
                    Health & Therapies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Education & Skills
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Legal & Financial Planning
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Community & Inclusion
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Resources</h4>
              <ul className="space-y-2 text-sm sm:text-base" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                <li>
                  <a href="#" className="hover:text-white">
                    Knowledge Hub
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Community Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Provider Network
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact Us</h4>
              <div
                className="space-y-2 sm:space-y-3 text-sm sm:text-base"
                style={{ color: "rgba(255, 255, 255, 0.8)" }}
              >
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Phone className="h-4 sm:h-5 w-4 sm:w-5 flex-shrink-0" />
                  <span>+91 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Mail className="h-4 sm:h-5 w-4 sm:w-5 flex-shrink-0" />
                  <span>hello@soultrove.com</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <MapPin className="h-4 sm:h-5 w-4 sm:w-5 flex-shrink-0" />
                  <span>India</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-sm sm:text-base"
            style={{
              borderTop: "1px solid rgba(255, 255, 255, 0.2)",
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
