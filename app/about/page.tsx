"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Menu, X } from "lucide-react"
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

      <section className="relative text-primary-foreground py-6 sm:py-8 lg:py-10 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance leading-tight">
            About SoulTrove
          </h1>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left side - Story content */}
            <div className="space-y-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
                The Story of Soultrove - How the name reflects the mission
              </h2>

              {/* The Seed of an Idea */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">The Seed of an Idea</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Soultrove began with a personal journey — one marked by the challenges and triumphs of raising a child
                  with developmental challenges. Along the way, it became clear that families, caregivers, and service
                  providers often walk parallel paths but remain disconnected. Knowledge, emotional support, and
                  trustworthy services existed, but scattered like treasures hidden across a vast landscape.
                </p>
              </div>

              {/* Why Soul */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Why "Soul"</h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  The Soul is the deepest, most human part of us. It represents empathy, care, resilience, and the
                  spirit of community. In our work, it's the soul of a parent staying up late to research therapies, the
                  soul of a therapist adapting methods for one unique child, and the soul of communities who believe
                  that inclusion is not charity — it's humanity.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed font-medium">
                  Soultrove puts people, not just problems, at the heart of the solution.
                </p>
              </div>

              {/* Why Trove */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Why "Trove"</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  A Trove is a precious collection — often hidden until someone takes the time to uncover it. In our
                  world, it's the wealth of expertise, resources, and lived experiences that already exist but remain
                  difficult to find and access. Soultrove gathers these treasures—therapists, special educators,
                  technology tools, peer support, and lived wisdom—into one safe, trusted place.
                </p>
              </div>

              {/* The Evolution Theme */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">The Evolution Theme</h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  The name Soultrove reflects an evolutionary journey — from isolation to connection, from fragmented
                  help to holistic support, from uncertainty to empowered action.
                </p>
                <ul className="space-y-3 text-base text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <strong>Rooted in empathy:</strong> Like a tree that grows from strong roots, Soultrove draws
                      strength from shared human stories.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <strong>Branching into possibility:</strong> We connect parents, caregivers, and service providers
                      through digital pathways—allowing knowledge and compassion to spread.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <strong>Bearing the fruits of change:</strong> With technology, we make access faster, fairer, and
                      more personalized, helping families evolve from surviving to thriving.
                    </span>
                  </li>
                </ul>
              </div>

              {/* The Mission Embodied in the Name */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">The Mission Embodied in the Name</h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-4">Soultrove's mission is twofold:</p>
                <ol className="space-y-3 text-base text-muted-foreground mb-4 list-decimal list-inside">
                  <li>
                    Build a digital community where parents, caregivers, and service providers connect without barriers.
                  </li>
                  <li>
                    Deliver health-tech innovation that turns scattered information into actionable, personalized
                    support.
                  </li>
                </ol>
                <p className="text-base text-muted-foreground leading-relaxed italic">
                  In essence, the name is not just a brand — it's a promise: to safeguard the treasures of knowledge,
                  compassion and expertise, and share them with every soul who needs them.
                </p>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="lg:sticky lg:top-24">
              <div className="relative">
                <img
                  src="/stay-positive-empowerment.jpg"
                  alt="The Story of Soultrove - Empowerment and hope"
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
                {/* <div className="absolute top-4 left-4 bg-white/90 p-3 rounded-lg shadow-md">
                  <img src="/soultrove-logo.svg" alt="Soultrove Logo" className="h-12 w-auto" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 sm:py-16 lg:py-20 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Image */}
            <div className="order-2 lg:order-1">
              <img
                src="/core-values-puzzle.jpg"
                alt="What We Stand For - Our Core Values"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>

            {/* Right side - Core Values content */}
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
                What We Stand For – Our Core Values
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Empathy</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Every family's journey matters; we listen first.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Integrity</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Transparent, ethical, and responsible in all we do.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Collaboration</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Together with families, providers and communities for better outcomes.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Inclusion</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Every individual deserves dignity and opportunity.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Future-readiness</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Building solutions that secure tomorrow, not just today.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Soultrove Team */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">The Soultrove Team</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {[
              {
                name: "Arindam Majumdar",
                role: "Founder & MD, Soultrove India Pvt Ltd",
                description:
                  "Arindam Majumdar is a senior business leader with 30+ years of experience across leading multinational organizations in energy, infrastructure and technology. He has held CEO and CXO roles, driving business growth, market expansion and successful turnarounds while building high-performing teams and fostering innovation.\n\nDriven by his journey as a parent to a young adult with developmental disability, Arindam founded Soultrove to empower families through access, inclusion and long-term sustainability, ensuring no journey is walked alone. At Soultrove, Arindam brings strategic vision and leadership experience to build India's most trusted digital ecosystem for developmental disabilities, enabling early diagnosis, holistic interventions, skill development and future planning.",
                image: "/arindam-majumdar.jpeg",
              },
              {
                name: "Swati Majumdar",
                role: "Director & Co-Founder, Soultrove India Pvt Ltd",
                description:
                  "Swati Majumdar, Co-Founder and Director at Soultrove, is deeply committed to empowering individuals with developmental disabilities. With a B.Tech in Computer Science and a decade of experience in leading global software services companies, she built expertise in development, delivery and stakeholder engagement.\n\nChoosing to leave her corporate career to become a full-time caregiver and teacher for her child, Swati gained first-hand understanding of the challenges faced by families navigating special needs. At Soultrove, she combines her technical knowledge, caregiving experience and passion to create a supportive ecosystem that empowers children, families and professionals to thrive together.",
                image: "/swati-majumdar.jpeg",
              },
              {
                name: "Rajeev Chakrabarti",
                role: "Director & CSMO, Soultrove India Pvt Ltd",
                description:
                  "Rajeev Chakrabarti brings over 25 years of leadership experience at the CXO level, where he scaled businesses, built brands, and guided organizations with vision and discipline. His entrepreneurial journey further strengthened his ability to merge strategy with purpose.\n\nAs a parent, he deeply relates to the challenges families face in raising children with diverse needs and has witnessed these journeys closely through friends and relatives. At Soultrove, Rajeev leverages his strategic expertise and empathy to shape an inclusive ecosystem that improves access to therapy, healthcare, education and employment for individuals with autism and other developmental conditions across their life stages.",
                image: "/rajeev-chakrabarti.jpeg",
              },
            ].map((member, index) => (
              <Card key={index} className="bg-card hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mb-4 object-cover"
                    />
                    <h4 className="text-lg font-semibold text-foreground mb-2">{member.name}</h4>
                    <p className="text-sm font-medium text-primary mb-4">{member.role}</p>
                    <div className="text-sm text-muted-foreground leading-relaxed space-y-3 text-left">
                      {member.description.split("\n\n").map((paragraph, pIndex) => (
                        <p key={pIndex}>{paragraph}</p>
                      ))}
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
