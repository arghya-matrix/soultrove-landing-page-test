"use client"

import { Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function PrivacyPolicyPage() {
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
                <Link href="/">
                  <img src="/logo.svg" alt="Soultrove" className="h-12 sm:h-16 w-auto" />
                </Link>
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
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-8 sm:py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-balance">Privacy Policy</h1>
          <p className="mt-4 text-lg text-center text-primary-foreground/90">Last Updated: January 2025</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-muted-foreground">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                <p className="leading-relaxed">
                  Welcome to Soultrove India Private Limited ("Soultrove," "we," "us," or "our"). We are committed to
                  protecting your privacy and ensuring the security of your personal information. This Privacy Policy
                  explains how we collect, use, disclose, and safeguard your information when you use our digital
                  platform and services designed to support individuals with developmental disabilities and their
                  families.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-semibold text-foreground mb-3">2.1 Personal Information</h3>
                <p className="leading-relaxed mb-4">We may collect the following types of personal information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Contact information (name, email address, phone number, mailing address)</li>
                  <li>Account credentials (username, password)</li>
                  <li>Profile information (age, location, relationship to individual with disability)</li>
                  <li>Health and medical information (diagnosis, therapy needs, treatment history)</li>
                  <li>Educational information (school records, IEP details, learning assessments)</li>
                  <li>Financial information (for payment processing and financial planning services)</li>
                  <li>Legal information (guardianship documents, estate planning details)</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">2.2 Usage Information</h3>
                <p className="leading-relaxed mb-4">
                  We automatically collect certain information when you use our platform:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Device information (IP address, browser type, operating system)</li>
                  <li>Usage data (pages visited, features used, time spent on platform)</li>
                  <li>Location data (with your permission)</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                <p className="leading-relaxed mb-4">We use your information for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To provide and maintain our services</li>
                  <li>To match families with appropriate therapists, educators, and service providers</li>
                  <li>To facilitate communication between families and service providers</li>
                  <li>To process payments and manage subscriptions</li>
                  <li>To personalize your experience and provide tailored recommendations</li>
                  <li>To improve our platform and develop new features</li>
                  <li>To send important updates, notifications, and service-related communications</li>
                  <li>To comply with legal obligations and protect our rights</li>
                  <li>To conduct research and analytics (in aggregated, de-identified form)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Information Sharing and Disclosure</h2>
                <p className="leading-relaxed mb-4">We may share your information in the following circumstances:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Service Providers:</strong> With therapists, educators, legal advisors, and other
                    professionals you choose to connect with through our platform
                  </li>
                  <li>
                    <strong>Third-Party Service Providers:</strong> With vendors who help us operate our platform
                    (payment processors, cloud hosting, analytics providers)
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> When required by law or to protect our rights and safety
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets
                  </li>
                  <li>
                    <strong>With Your Consent:</strong> When you explicitly authorize us to share your information
                  </li>
                </ul>
                <p className="leading-relaxed mt-4">
                  We do not sell your personal information to third parties for marketing purposes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Security</h2>
                <p className="leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information
                  against unauthorized access, alteration, disclosure, or destruction. These measures include
                  encryption, secure servers, access controls, and regular security assessments. However, no method of
                  transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Rights and Choices</h2>
                <p className="leading-relaxed mb-4">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Access:</strong> Request access to the personal information we hold about you
                  </li>
                  <li>
                    <strong>Correction:</strong> Request correction of inaccurate or incomplete information
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request deletion of your personal information (subject to legal
                    obligations)
                  </li>
                  <li>
                    <strong>Opt-Out:</strong> Unsubscribe from marketing communications
                  </li>
                  <li>
                    <strong>Data Portability:</strong> Request a copy of your data in a portable format
                  </li>
                  <li>
                    <strong>Withdraw Consent:</strong> Withdraw consent for data processing where applicable
                  </li>
                </ul>
                <p className="leading-relaxed mt-4">
                  To exercise these rights, please contact us at arindam.majumdar@soultrove.in
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Children's Privacy</h2>
                <p className="leading-relaxed">
                  Our platform is designed to support families with children and adults with developmental disabilities.
                  We collect information about minors only with parental or guardian consent. Parents and guardians have
                  the right to review, modify, or delete information about their children by contacting us.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Data Retention</h2>
                <p className="leading-relaxed">
                  We retain your personal information for as long as necessary to provide our services, comply with
                  legal obligations, resolve disputes, and enforce our agreements. When information is no longer needed,
                  we will securely delete or anonymize it.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. International Data Transfers</h2>
                <p className="leading-relaxed">
                  Your information may be transferred to and processed in countries other than your country of
                  residence. We ensure appropriate safeguards are in place to protect your information in accordance
                  with this Privacy Policy and applicable laws.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Changes to This Privacy Policy</h2>
                <p className="leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by
                  posting the new Privacy Policy on our platform and updating the "Last Updated" date. Your continued
                  use of our services after such changes constitutes acceptance of the updated policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact Us</h2>
                <p className="leading-relaxed mb-4">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
                  please contact us:
                </p>
                <div className="bg-secondary p-6 rounded-lg">
                  <p className="font-semibold text-foreground mb-2">Soultrove India Private Limited</p>
                  <p>4th Floor, Clay Works Shankaraa</p>
                  <p>Shankaraa Foundation Campus</p>
                  <p>Kanakapura Main Road, Doddakallasandra</p>
                  <p>Bangalore - 560062, Karnataka</p>
                  <p className="mt-4">
                    <strong>Email:</strong> arindam.majumdar@soultrove.in
                  </p>
                  <p>
                    <strong>Phone:</strong> +91 95919 84906
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-primary-foreground py-6 bg-primary">
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
