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
    <div className="min-h-screen bg-background">
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
                  className="text-foreground px-3 py-2 text-sm font-medium hover:text-primary cursor-pointer transition-colors"
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
                  className="text-foreground px-4 py-3 text-base font-medium hover:text-primary hover:bg-secondary cursor-pointer text-left transition-colors rounded-md mx-2"
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

      <section className="relative text-primary-foreground py-8 sm:py-10 lg:py-12 bg-gradient-to-br from-primary to-primary/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance leading-tight">
            The Story of Soultrove
          </h1>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto text-primary-foreground/90 italic">
            How the name reflects the mission
          </p>
        </div>
      </section>

      {/* The Seed of an Idea */}
      <section className="py-12 sm:py-16 lg:py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              The Seed of an Idea
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed text-center">
              Soultrove began with a personal journey - one marked by the challenges and triumphs of raising a child
              with developmental challenges. Along the way, it became clear that families, caregivers, and service
              providers often walk parallel paths but remain disconnected. Knowledge, emotional support, and trustworthy
              services existed, but scattered like treasures hidden across a vast landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Why Soul & Why Trove */}
      <section className="py-12 sm:py-16 lg:py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Why "Soul"</h3>
              <p className="text-base sm:text-lg text-secondary-foreground mb-6 leading-relaxed">
                The <strong>Soul</strong> is the deepest, most human part of us. It represents empathy, care,
                resilience, and the spirit of community. In our work, it's the soul of a parent staying up late to
                research therapies, the soul of a therapist adapting methods for one unique child, and the soul of
                communities who believe that inclusion is not charity - it's humanity.
              </p>
              <p className="text-base sm:text-lg text-secondary-foreground leading-relaxed">
                Soultrove puts people, not just problems, at the heart of the solution.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Why "Trove"</h3>
              <p className="text-base sm:text-lg text-secondary-foreground mb-6 leading-relaxed">
                A <strong>Trove</strong> is a precious collection - often hidden until someone takes the time to uncover
                it. In our world, it's the wealth of expertise, resources, and lived experiences that already exist but
                remain difficult to find and access. Soultrove gathers these treasures-therapists, special educators,
                technology tools, peer support, and lived wisdom-into one safe, trusted place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Evolution Theme */}
      <section className="py-12 sm:py-16 lg:py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:3xl md:text-4xl font-bold text-foreground mb-6">The Evolution Theme</h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
              The name Soultrove reflects an <strong>evolutionary journey</strong> - from isolation to connection, from
              fragmented help to holistic support, from uncertainty to empowered action.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Rooted in empathy</h4>
                <p className="text-sm text-muted-foreground">
                  Like a tree that grows from strong roots, Soultrove draws strength from shared human stories.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Branching into possibility</h4>
                <p className="text-sm text-muted-foreground">
                  We connect parents, caregivers, and service providers through digital pathways-allowing knowledge and
                  compassion to spread.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Bearing the fruits of change</h4>
                <p className="text-sm text-muted-foreground">
                  With technology, we make access faster, fairer, and more personalized, helping families evolve from
                  surviving to thriving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Embodied */}
      <section className="py-12 sm:py-16 lg:py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:3xl md:text-4xl font-bold text-foreground mb-6">
              The Mission Embodied in the Name
            </h2>
            <p className="text-base sm:text-lg text-secondary-foreground mb-8 leading-relaxed">
              Soultrove's mission is twofold:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-card p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-foreground mb-3">Build a digital community</h4>
                <p className="text-sm text-muted-foreground">
                  where parents, caregivers, and service providers connect without barriers.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-foreground mb-3">Deliver health-tech innovation</h4>
                <p className="text-sm text-muted-foreground">
                  that turns scattered information into actionable, personalized support.
                </p>
              </div>
            </div>
            <p className="text-base sm:text-lg text-secondary-foreground leading-relaxed italic">
              In essence, the name is not just a brand - it's a promise:{" "}
              <em>
                to safeguard the treasures of knowledge, compassion and expertise, and share them with every soul who
                needs them.
              </em>
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 sm:py-16 lg:py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:3xl md:text-4xl font-bold text-foreground mb-4">
              What We Stand For - Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Empathy",
                description: "Every family's journey matters; we listen first.",
              },
              {
                title: "Integrity",
                description: "Transparent, ethical, and responsible in all we do.",
              },
              {
                title: "Collaboration",
                description: "Together with families, providers and communities for better outcomes.",
              },
              {
                title: "Inclusion",
                description: "Every individual deserves dignity and opportunity.",
              },
              {
                title: "Future-readiness",
                description: "Building solutions that secure tomorrow, not just today.",
              },
            ].map((value, index) => (
              <Card key={index} className="bg-secondary hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <h4 className="text-lg font-semibold text-foreground mb-3">{value.title}</h4>
                  <p className="text-sm text-secondary-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:3xl md:text-4xl font-bold text-foreground mb-4">The Soultrove Team</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 lg:gap-12 mb-12">
            {[
              {
                name: "Arindam Majumdar",
                role: "Founder & MD, Soultrove India Pvt Ltd",
                description:
                  "Arindam Majumdar is a senior business leader with 30+ years of experience across leading multinational organizations in energy, infrastructure and technology. He has held CEO and CXO roles, driving business growth, market expansion and successful turnarounds while building high-performing teams and fostering innovation.\n\nDriven by his journey as a parent to a young adult with developmental disability, Arindam founded Soultrove to empower families through access, inclusion and long-term sustainability, ensuring no journey is walked alone. At Soultrove, Arindam brings strategic vision and leadership experience to build India's most trusted digital ecosystem for developmental disabilities, enabling early diagnosis, holistic interventions, skill development and future planning.",
                image: "/arindam-majumdar.jpeg", // Updated to new team member image
              },
              {
                name: "Swati Majumdar",
                role: "Director & Co-Founder, Soultrove India Pvt Ltd",
                description:
                  "Swati Majumdar, Co-Founder and Director at Soultrove, is deeply committed to empowering individuals with developmental disabilities. With a B.Tech in Computer Science and a decade of experience in leading global software services companies, she built expertise in development, delivery and stakeholder engagement.\n\nChoosing to leave her corporate career to become a full-time caregiver and teacher for her child, Swati gained first-hand understanding of the challenges faced by families navigating special needs. At Soultrove, she combines her technical knowledge, caregiving experience and passion to create a supportive ecosystem that empowers children, families and professionals to thrive together.",
                image: "/swati-majumdar.jpeg", // Updated to new team member image
              },
              {
                name: "Rajeev Chakrabarti",
                role: "Director & CSMO, Soultrove India Pvt Ltd",
                description:
                  "Rajeev Chakrabarti brings over 25 years of leadership experience at the CXO level, where he scaled businesses, built brands, and guided organizations with vision and discipline. His entrepreneurial journey further strengthened his ability to merge strategy with purpose.\n\nAs a parent, he deeply relates to the challenges families face in raising children with diverse needs and has witnessed these journeys closely through friends and relatives. At Soultrove, Rajeev leverages his strategic expertise and empathy to shape an inclusive ecosystem that improves access to therapy, healthcare, education and employment for individuals with autism and other developmental conditions across their life stages.",
                image: "/rajeev-chakrabarti.jpeg", // Updated to new team member image
              },
            ].map((member, index) => (
              <Card key={index} className="bg-card hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 sm:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
                    <div className="lg:col-span-1 text-center">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto mb-4 object-cover"
                      />
                      <h4 className="text-xl font-semibold text-foreground mb-2">{member.name}</h4>
                      <p className="text-sm font-medium text-primary mb-4">{member.role}</p>
                    </div>
                    <div className="lg:col-span-3">
                      <div className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-4">
                        {member.description.split("\n\n").map((paragraph, pIndex) => (
                          <p key={pIndex}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
