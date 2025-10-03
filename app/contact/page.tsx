"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Send, Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function ContactPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    serviceType: "",
  })

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // You would typically send this data to your backend
    alert("Thank you for your enquiry! We will get back to you soon.")
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      serviceType: "",
    })
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
                  className="text-muted-foreground px-3 py-2 text-sm font-medium hover:text-primary cursor-pointer transition-colors"
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
                  className="text-foreground px-3 py-2 text-sm font-medium hover:text-primary cursor-pointer transition-colors"
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
                  className="text-muted-foreground px-4 py-3 text-base font-medium hover:text-primary hover:bg-secondary cursor-pointer text-left transition-colors rounded-md mx-2"
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
                  className="text-foreground px-4 py-3 text-base font-medium hover:text-primary hover:bg-secondary cursor-pointer text-left transition-colors rounded-md mx-2"
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
      <section className="relative text-primary-foreground py-8 sm:py-10 lg:py-12 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance leading-tight">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto text-primary-foreground/90">
            We're here to help you navigate your journey. Reach out to us for support, questions, or to learn more about
            what we do.
          </p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div>
              <Card className="bg-card shadow-lg">
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Send us an Enquiry</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone" className="text-sm font-medium text-foreground mb-2 block">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div>
                        <Label htmlFor="serviceType" className="text-sm font-medium text-foreground mb-2 block">
                          Service Interest
                        </Label>
                        <select
                          id="serviceType"
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                        >
                          <option value="">Select a service</option>
                          <option value="health-therapies">Health & Therapies</option>
                          <option value="education-skills">Education & Skills</option>
                          <option value="legal-financial">Legal & Financial Planning</option>
                          <option value="community-inclusion">Community & Inclusion</option>
                          <option value="general-inquiry">General Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-sm font-medium text-foreground mb-2 block">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="Enter the subject of your enquiry"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full"
                        placeholder="Tell us more about your needs or questions..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      Send Enquiry
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Get in Touch</h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
                  We're here to support you every step of the way. Whether you're a family seeking support or a provider
                  wanting to join our network, we'd love to hear from you.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <Card className="bg-secondary">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 mt-1 flex-shrink-0 text-primary" />
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
                        <p className="text-secondary-foreground">+91 95919 84906</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-secondary">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 mt-1 flex-shrink-0 text-primary" />
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
                        <p className="text-secondary-foreground">arindam.majumdar@soultrove.in</p>
                        <p className="text-secondary-foreground">Tech@soultrove.in</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-secondary">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 mt-1 flex-shrink-0 text-primary" />
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Address</h3>
                        <div className="text-secondary-foreground space-y-1">
                          <p>Soultrove India Private Limited</p>
                          <p>4th Floor, Clay Works Shankaraa</p>
                          <p>Shankaraa Foundation Campus</p>
                          <p>Kanakapura Main Road, Doddakallasandra</p>
                          <p>Bangalore - 560062, Karnataka</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
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
