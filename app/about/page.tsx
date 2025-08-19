import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Rocket, Users, Target, Star, Globe, Award, ArrowRight, Heart, Lightbulb, Shield } from "lucide-react"
import { Footer } from "@/components/footer"
import Link from "next/link"

const leadership = [
  {
    name: "Dr. Sarah Chen",
    role: "CEO & Founder",
    bio: "Former SpaceX engineer with 15+ years in aerospace. PhD in Aerospace Engineering from MIT.",
    image: "/ceo-space-industry.png",
    initials: "SC",
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO",
    bio: "Ex-Blue Origin propulsion specialist. Led development of next-gen rocket engines.",
    image: "/professional-cto-engineer.png",
    initials: "MR",
  },
  {
    name: "Dr. Aisha Patel",
    role: "VP of Engineering",
    bio: "Former NASA mission director. Expert in satellite systems and orbital mechanics.",
    image: "/professional-woman-vp-engineering.png",
    initials: "AP",
  },
  {
    name: "James Thompson",
    role: "VP of Operations",
    bio: "20+ years in aerospace manufacturing. Previously at Boeing and Lockheed Martin.",
    image: "/professional-man-vp-operations.png",
    initials: "JT",
  },
]

const milestones = [
  {
    year: "2020",
    title: "Company Founded",
    description: "Roqvue.space established with $50M Series A funding",
    icon: Rocket,
  },
  {
    year: "2021",
    title: "First Test Flight",
    description: "Successful suborbital test of Falcon-class prototype",
    icon: Target,
  },
  {
    year: "2022",
    title: "Orbital Success",
    description: "First successful orbital launch and satellite deployment",
    icon: Globe,
  },
  {
    year: "2023",
    title: "Drone Ship Landing",
    description: "First successful autonomous rocket recovery at sea",
    icon: Award,
  },
  {
    year: "2024",
    title: "ISP Service Launch",
    description: "Commercial satellite internet service goes live",
    icon: Star,
  },
]

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We push the boundaries of what's possible in space technology, constantly seeking new solutions.",
  },
  {
    icon: Shield,
    title: "Safety",
    description: "Safety is our top priority in every mission, from design to execution.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe the best results come from diverse teams working together toward common goals.",
  },
  {
    icon: Heart,
    title: "Sustainability",
    description: "We're committed to sustainable space exploration that benefits all of humanity.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">Our Story</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">About Roqvue.space</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We're on a mission to make space accessible to everyone, building the infrastructure that will support
            humanity's expansion beyond Earth.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                To democratize access to space through innovative, reliable, and cost-effective launch solutions. We
                believe that space technology should serve all of humanity, connecting people across the globe and
                enabling scientific discovery that benefits everyone.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-primary/10 rounded-full mt-1">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Accessibility</h3>
                    <p className="text-muted-foreground">
                      Making space technology available to organizations of all sizes
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-primary/10 rounded-full mt-1">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Global Impact</h3>
                    <p className="text-muted-foreground">Connecting the world through advanced satellite technology</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-primary/10 rounded-full mt-1">
                    <Rocket className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Innovation</h3>
                    <p className="text-muted-foreground">Pushing the boundaries of aerospace engineering</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img src="/futuristic-space-station.png" alt="Space Mission" className="rounded-lg shadow-2xl w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do, from engineering decisions to company culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Leadership Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the experienced leaders driving our mission to revolutionize space technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={leader.image || "/placeholder.svg"} alt={leader.name} />
                    <AvatarFallback className="text-lg">{leader.initials}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl">{leader.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{leader.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{leader.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our mission to revolutionize space technology and global connectivity.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const IconComponent = milestone.icon
                return (
                  <div key={index} className="relative flex items-center">
                    <div className="flex-1 text-right pr-8">
                      {index % 2 === 0 && (
                        <Card className="inline-block max-w-md">
                          <CardHeader>
                            <div className="flex items-center justify-end space-x-2">
                              <div>
                                <CardTitle className="text-lg">{milestone.title}</CardTitle>
                                <CardDescription>{milestone.year}</CardDescription>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">{milestone.description}</p>
                          </CardContent>
                        </Card>
                      )}
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center z-10">
                      <IconComponent className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1 pl-8">
                      {index % 2 === 1 && (
                        <Card className="inline-block max-w-md">
                          <CardHeader>
                            <div className="flex items-center space-x-2">
                              <div>
                                <CardTitle className="text-lg">{milestone.title}</CardTitle>
                                <CardDescription>{milestone.year}</CardDescription>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">{milestone.description}</p>
                          </CardContent>
                        </Card>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">By the Numbers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">88</div>
              <div className="text-muted-foreground">Successful Missions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">$2.5B</div>
              <div className="text-muted-foreground">Total Funding Raised</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15</div>
              <div className="text-muted-foreground">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Join Our Mission</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be part of the team that's building the future of space technology and global connectivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/careers">
              <Button size="lg" className="text-lg px-8 py-6">
                View Open Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
