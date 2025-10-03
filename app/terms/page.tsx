"use client"

import { Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function TermsOfServicePage() {
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-balance">Terms of Service</h1>
          <p className="mt-4 text-lg text-center text-primary-foreground/90">Last Updated: January 2025</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-muted-foreground">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="leading-relaxed">
                  Welcome to Soultrove India Private Limited ("Soultrove," "we," "us," or "our"). By accessing or using
                  our platform and services, you agree to be bound by these Terms of Service ("Terms"). If you do not
                  agree to these Terms, please do not use our services. These Terms apply to all users, including
                  families, individuals with developmental disabilities, service providers, and other visitors to our
                  platform.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Description of Services</h2>
                <p className="leading-relaxed mb-4">
                  Soultrove provides a comprehensive digital ecosystem designed to support individuals with
                  developmental disabilities and their families. Our services include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Connection to healthcare providers, therapists, and educators</li>
                  <li>Access to special education and vocational training resources</li>
                  <li>Legal and financial planning services</li>
                  <li>Community support and inclusion programs</li>
                  <li>Marketplace for products and services</li>
                  <li>Information and resources for long-term care planning</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  Soultrove acts as a platform connecting users with service providers. We do not directly provide
                  medical, therapeutic, legal, or financial advice.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. User Accounts and Registration</h2>
                <h3 className="text-xl font-semibold text-foreground mb-3">3.1 Account Creation</h3>
                <p className="leading-relaxed mb-4">
                  To access certain features, you must create an account. You agree to provide accurate, current, and
                  complete information during registration and to update such information to keep it accurate and
                  current.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">3.2 Account Security</h3>
                <p className="leading-relaxed mb-4">
                  You are responsible for maintaining the confidentiality of your account credentials and for all
                  activities that occur under your account. You must immediately notify us of any unauthorized use of
                  your account.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">3.3 Age Requirements</h3>
                <p className="leading-relaxed">
                  You must be at least 18 years old to create an account. If you are creating an account on behalf of a
                  minor, you represent that you are the parent or legal guardian with authority to do so.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. User Responsibilities and Conduct</h2>
                <p className="leading-relaxed mb-4">
                  You agree to use our services only for lawful purposes and in accordance with these Terms. You agree
                  not to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe on the rights of others, including intellectual property rights</li>
                  <li>Upload or transmit viruses, malware, or other harmful code</li>
                  <li>Harass, abuse, or harm other users or service providers</li>
                  <li>Impersonate any person or entity</li>
                  <li>Interfere with or disrupt the platform or servers</li>
                  <li>Collect or store personal data about other users without permission</li>
                  <li>Use the platform for any commercial purpose without our authorization</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Service Provider Relationships</h2>
                <h3 className="text-xl font-semibold text-foreground mb-3">5.1 Independent Contractors</h3>
                <p className="leading-relaxed mb-4">
                  Service providers (therapists, educators, legal advisors, etc.) on our platform are independent
                  contractors, not employees or agents of Soultrove. We do not control or direct their professional
                  services.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">5.2 Verification and Vetting</h3>
                <p className="leading-relaxed mb-4">
                  While we make reasonable efforts to verify the credentials of service providers, we do not guarantee
                  the quality, safety, or legality of their services. Users are responsible for conducting their own due
                  diligence.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">5.3 Direct Relationships</h3>
                <p className="leading-relaxed">
                  Any agreements, contracts, or arrangements between users and service providers are solely between
                  those parties. Soultrove is not a party to such agreements and bears no responsibility for disputes
                  arising from them.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Payment and Fees</h2>
                <h3 className="text-xl font-semibold text-foreground mb-3">6.1 Platform Fees</h3>
                <p className="leading-relaxed mb-4">
                  Certain features of our platform may require payment of fees. All fees are non-refundable unless
                  otherwise stated or required by law.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">6.2 Service Provider Fees</h3>
                <p className="leading-relaxed mb-4">
                  Fees for services provided by independent service providers are set by those providers and paid
                  directly to them or through our payment processing system. Soultrove may charge a service fee or
                  commission on such transactions.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">6.3 Payment Processing</h3>
                <p className="leading-relaxed">
                  We use third-party payment processors to handle transactions. By providing payment information, you
                  authorize us to share such information with these processors in accordance with our Privacy Policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Intellectual Property Rights</h2>
                <h3 className="text-xl font-semibold text-foreground mb-3">7.1 Our Content</h3>
                <p className="leading-relaxed mb-4">
                  All content on our platform, including text, graphics, logos, images, software, and other materials,
                  is owned by or licensed to Soultrove and protected by intellectual property laws. You may not use,
                  reproduce, or distribute our content without permission.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">7.2 User Content</h3>
                <p className="leading-relaxed mb-4">
                  You retain ownership of content you submit to our platform. By submitting content, you grant us a
                  worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display such content for
                  the purpose of operating and improving our services.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">7.3 Feedback</h3>
                <p className="leading-relaxed">
                  Any feedback, suggestions, or ideas you provide to us become our property, and we may use them without
                  compensation or attribution.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Privacy and Data Protection</h2>
                <p className="leading-relaxed">
                  Your use of our services is also governed by our Privacy Policy, which explains how we collect, use,
                  and protect your personal information. By using our services, you consent to our data practices as
                  described in the Privacy Policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Disclaimers and Limitations of Liability</h2>
                <h3 className="text-xl font-semibold text-foreground mb-3">9.1 No Medical or Professional Advice</h3>
                <p className="leading-relaxed mb-4">
                  Soultrove does not provide medical, therapeutic, legal, or financial advice. Information on our
                  platform is for general informational purposes only and should not be relied upon as professional
                  advice. Always consult qualified professionals for specific guidance.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">9.2 "As Is" Basis</h3>
                <p className="leading-relaxed mb-4">
                  Our services are provided "as is" and "as available" without warranties of any kind, either express or
                  implied. We do not guarantee that our services will be uninterrupted, error-free, or secure.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">9.3 Limitation of Liability</h3>
                <p className="leading-relaxed">
                  To the maximum extent permitted by law, Soultrove and its affiliates, officers, directors, employees,
                  and agents shall not be liable for any indirect, incidental, special, consequential, or punitive
                  damages arising from your use of our services, even if we have been advised of the possibility of such
                  damages.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Indemnification</h2>
                <p className="leading-relaxed">
                  You agree to indemnify, defend, and hold harmless Soultrove and its affiliates from any claims,
                  liabilities, damages, losses, and expenses (including legal fees) arising from your use of our
                  services, your violation of these Terms, or your violation of any rights of another party.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">11. Termination</h2>
                <p className="leading-relaxed">
                  We reserve the right to suspend or terminate your account and access to our services at any time, with
                  or without cause or notice, including if we believe you have violated these Terms. Upon termination,
                  your right to use our services will immediately cease.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">12. Dispute Resolution and Governing Law</h2>
                <h3 className="text-xl font-semibold text-foreground mb-3">12.1 Governing Law</h3>
                <p className="leading-relaxed mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of India, without regard to
                  its conflict of law provisions.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">12.2 Jurisdiction</h3>
                <p className="leading-relaxed">
                  Any disputes arising from these Terms or your use of our services shall be subject to the exclusive
                  jurisdiction of the courts in Bangalore, Karnataka, India.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">13. Changes to Terms</h2>
                <p className="leading-relaxed">
                  We may modify these Terms at any time. We will notify you of material changes by posting the updated
                  Terms on our platform and updating the "Last Updated" date. Your continued use of our services after
                  such changes constitutes acceptance of the modified Terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">14. General Provisions</h2>
                <h3 className="text-xl font-semibold text-foreground mb-3">14.1 Entire Agreement</h3>
                <p className="leading-relaxed mb-4">
                  These Terms, together with our Privacy Policy, constitute the entire agreement between you and
                  Soultrove regarding your use of our services.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">14.2 Severability</h3>
                <p className="leading-relaxed mb-4">
                  If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will
                  remain in full force and effect.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">14.3 Waiver</h3>
                <p className="leading-relaxed">
                  Our failure to enforce any right or provision of these Terms will not be deemed a waiver of such right
                  or provision.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">15. Contact Us</h2>
                <p className="leading-relaxed mb-4">
                  If you have any questions or concerns about these Terms, please contact us:
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
