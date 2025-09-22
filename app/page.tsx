"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Shield, Star, ArrowRight, CheckCircle, Phone, Mail, MapPin } from "lucide-react"

export default function LandingPage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img src="/logo.svg" alt="Soultrove" className="h-10 w-auto" />
              </div>
            </div>
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-700 px-3 py-2 text-sm font-medium hover:text-[#d16050] cursor-pointer"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-700 px-3 py-2 text-sm font-medium hover:text-[#d16050] cursor-pointer"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="text-gray-700 px-3 py-2 text-sm font-medium hover:text-[#d16050] cursor-pointer"
                >
                  How it Works
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-700 px-3 py-2 text-sm font-medium hover:text-[#d16050] cursor-pointer"
                >
                  Contact
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative text-white py-20"
        style={{ background: `linear-gradient(135deg, #d16050 0%, #953f37 100%)` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                Empowering every journey, every family
              </h1>
              <p className="text-xl mb-8 leading-relaxed" style={{ color: "rgba(255, 255, 255, 0.9)" }}>
                Professional therapy and mental health support designed to strengthen families and empower individuals
                on their healing journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white hover:bg-gray-100" style={{ color: "#d16050" }}>
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <img src="/happy-family-in-therapy-session.jpg" alt="Family therapy session" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/professional-therapist-in-counseling-office.jpg" alt="About us" className="rounded-lg shadow-lg" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About us</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Soultrove, we believe every family deserves access to compassionate, professional mental health
                support. Our team of licensed therapists specializes in family dynamics, individual growth, and creating
                lasting positive change.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With years of experience and a commitment to evidence-based practices, we provide a safe space for
                healing, growth, and transformation.
              </p>
              <Button
                className="text-white"
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

      {/* Services Section */}
      <section id="services" className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What we do</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive mental health services tailored to your family's unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Family & Couples Therapy",
                description: "Strengthen relationships and improve communication within your family unit",
                icon: Heart,
                image: "/family-therapy-session-with-parents-and-children.jpg",
              },
              {
                title: "Individual Counseling",
                description: "Personal growth and healing through one-on-one therapeutic support",
                icon: Users,
                image: "/individual-therapy-session-one-on-one.jpg",
              },
              {
                title: "Child & Adolescent Therapy",
                description: "Specialized care for young minds navigating life's challenges",
                icon: Shield,
                image: "/child-therapy-session-with-young-person.jpg",
              },
              {
                title: "Group Therapy Sessions",
                description: "Connect with others on similar journeys in a supportive environment",
                icon: Star,
                image: "/group-therapy-circle-with-multiple-people.jpg",
              },
            ].map((service, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <service.icon className="h-8 w-8 mb-4" style={{ color: "#d16050" }} />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button
                    variant="outline"
                    className="bg-transparent hover:text-white"
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
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Key Benefits</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Licensed & Verified Therapists",
                    description: "All our professionals are fully licensed and continuously trained",
                  },
                  {
                    title: "Flexible Scheduling",
                    description: "Sessions that fit your busy family schedule",
                  },
                  {
                    title: "Safe & Relevant Environment",
                    description: "Culturally sensitive and inclusive therapeutic spaces",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 mt-1 flex-shrink-0" style={{ color: "#d16050" }} />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="rounded-2xl p-8 text-white"
              style={{ background: `linear-gradient(135deg, #d16050 0%, #953f37 100%)` }}
            >
              <h3 className="text-2xl font-bold mb-6">Impact & Inclusion</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">95%</div>
                  <div style={{ color: "rgba(255, 255, 255, 0.8)" }}>Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">4.9★</div>
                  <div style={{ color: "rgba(255, 255, 255, 0.8)" }}>Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">12K+</div>
                  <div style={{ color: "rgba(255, 255, 255, 0.8)" }}>Families Helped</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">8+</div>
                  <div style={{ color: "rgba(255, 255, 255, 0.8)" }}>Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How it works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Getting started with your healing journey is simple and straightforward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Initial Consultation",
                description: "Schedule a free consultation to discuss your needs and goals",
                image: "/consultation-meeting-with-therapist.jpg",
              },
              {
                step: "2",
                title: "Therapist Matching",
                description: "We match you with the perfect therapist for your specific situation",
                image: "/therapist-matching-process.jpg",
              },
              {
                step: "3",
                title: "Begin Sessions",
                description: "Start your therapeutic journey with personalized treatment plans",
                image: "/therapy-session-beginning.jpg",
              },
              {
                step: "4",
                title: "Track Progress",
                description: "Monitor your growth and adjust treatment as needed",
                image: "/progress-tracking-in-therapy.jpg",
              },
            ].map((step, index) => (
              <Card key={index} className="bg-white text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <img
                    src={step.image || "/placeholder.svg"}
                    alt={step.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <Badge className="text-white text-lg px-3 py-1 mb-4" style={{ backgroundColor: "#d16050" }}>
                    {step.step}
                  </Badge>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* For Parents & Families */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">For Parents & Families</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Get structured guidance and solutions that fit your family's unique dynamics and challenges.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Personalized family therapy plans",
                  "Child development support",
                  "Parenting guidance and resources",
                  "Crisis intervention services",
                  "Educational workshops",
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0" style={{ color: "#d16050" }} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="text-white"
                style={{ backgroundColor: "#d16050" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#953f37")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#d16050")}
              >
                Explore Family Services
              </Button>
            </div>
            <div>
              <img src="/happy-family-with-children-and-parents.jpg" alt="Family services" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Visibility", description: "Transparent processes and clear communication" },
              { title: "Trust", description: "Building lasting relationships through reliability" },
              { title: "Collaboration", description: "Working together towards healing and growth" },
              { title: "Impact", description: "Creating meaningful change in lives and families" },
            ].map((value, index) => (
              <Card key={index} className="bg-white text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What our users have to say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-white" style={{ background: `linear-gradient(135deg, #d16050 0%, #953f37 100%)` }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get started with Soultrove today</h2>
          <p className="text-xl mb-8" style={{ color: "rgba(255, 255, 255, 0.9)" }}>
            Take the first step towards healing and growth. Your journey to better mental health starts here.
          </p>
          <Button size="lg" className="bg-white hover:bg-gray-100" style={{ color: "#d16050" }}>
            Start Your Journey Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="text-white py-16" style={{ backgroundColor: "#d16050" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Soultrove</h3>
              <p className="mb-4" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                Empowering families through professional mental health support and therapy services.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                <li>
                  <a href="#" className="hover:text-white">
                    Family Therapy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Individual Counseling
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Child Therapy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Group Sessions
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                <li>
                  <a href="#" className="hover:text-white">
                    Knowledge Hub
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5" />
                  <span>hello@soultrove.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5" />
                  <span>123 Wellness St, City, State</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="mt-12 pt-8 text-center"
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
