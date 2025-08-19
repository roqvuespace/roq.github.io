import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  MapPin,
  Users,
  Heart,
  Coffee,
  Plane,
  GraduationCap,
  Shield,
  ArrowRight,
  Code,
  Wrench,
  Calculator,
  Rocket,
} from "lucide-react"
import { Footer } from "@/components/footer"
import Link from "next/link"

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health, dental, and vision insurance plus wellness programs",
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description: "Flexible hours, remote work options, and unlimited PTO policy",
  },
  {
    icon: Plane,
    title: "Travel & Relocation",
    description: "Relocation assistance and travel opportunities for launches and conferences",
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description: "Education reimbursement, conference attendance, and internal training programs",
  },
  {
    icon: Shield,
    title: "Financial Security",
    description: "Competitive salary, equity options, 401(k) matching, and life insurance",
  },
  {
    icon: Users,
    title: "Team Culture",
    description: "Collaborative environment with team events, hackathons, and innovation time",
  },
]

const openPositions = [
  {
    title: "Senior Rocket Engineer",
    department: "Engineering",
    location: "Hawthorne, CA",
    type: "Full-time",
    icon: Rocket,
    description: "Lead the design and development of next-generation rocket propulsion systems.",
    requirements: ["MS in Aerospace Engineering", "5+ years rocket engine experience", "Propulsion system design"],
  },
  {
    title: "Software Engineer - Flight Systems",
    department: "Software",
    location: "Austin, TX",
    type: "Full-time",
    icon: Code,
    description: "Develop critical flight software for autonomous rocket guidance and control systems.",
    requirements: ["BS in Computer Science", "C++ and Python proficiency", "Real-time systems experience"],
  },
  {
    title: "Manufacturing Engineer",
    department: "Operations",
    location: "Hawthorne, CA",
    type: "Full-time",
    icon: Wrench,
    description: "Optimize manufacturing processes for rocket and satellite production.",
    requirements: ["BS in Manufacturing Engineering", "Lean manufacturing experience", "Aerospace background"],
  },
  {
    title: "Mission Analyst",
    department: "Mission Planning",
    location: "Remote",
    type: "Full-time",
    icon: Calculator,
    description: "Analyze mission requirements and develop optimal launch trajectories.",
    requirements: ["MS in Aerospace Engineering", "Orbital mechanics expertise", "MATLAB/Python skills"],
  },
  {
    title: "Satellite Systems Engineer",
    department: "Engineering",
    location: "Seattle, WA",
    type: "Full-time",
    icon: Rocket,
    description: "Design and integrate satellite communication systems and payloads.",
    requirements: ["BS in Electrical Engineering", "RF systems experience", "Satellite communications"],
  },
  {
    title: "Quality Assurance Engineer",
    department: "Quality",
    location: "Hawthorne, CA",
    type: "Full-time",
    icon: Shield,
    description: "Ensure the highest quality standards for all aerospace components and systems.",
    requirements: ["BS in Engineering", "AS9100 experience", "Aerospace quality standards"],
  },
]

const testimonials = [
  {
    name: "Alex Kim",
    role: "Senior Software Engineer",
    quote:
      "Working at Roqvue.space means being part of something bigger than yourself. Every day, I know my code is helping humanity reach for the stars.",
    image: "/professional-software-engineer.png",
    initials: "AK",
  },
  {
    name: "Maria Santos",
    role: "Propulsion Engineer",
    quote:
      "The technical challenges here are incredible, and the team support is unmatched. I've grown more in two years here than in my entire previous career.",
    image: "/professional-female-engineer.png",
    initials: "MS",
  },
  {
    name: "David Chen",
    role: "Mission Planner",
    quote:
      "From concept to launch, seeing our missions succeed is the most rewarding experience. The collaborative culture here makes impossible things possible.",
    image: "/professional-mission-planner.png",
    initials: "DC",
  },
]

const offices = [
  {
    city: "N/A",
    address: "N/A",
    description: "Our headquarters and primary manufacturing facility",
    employees: "0+",
  }
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">Join Our Team</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Careers at Roqvue.space</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Join a team of passionate engineers, scientists, and innovators working to make space accessible to
            everyone. Build the future of space technology with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#positions">
              <Button size="lg" className="text-lg px-8 py-6">
                View Open Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              Learn About Our Culture
            </Button>
          </div>
        </div>
      </section>

      {/* Why Work Here */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Why Work at Roqvue.space?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer more than just a job – we offer the opportunity to be part of humanity's greatest adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Open Positions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find your next career opportunity and help us build the future of space technology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {openPositions.map((position, index) => {
              const IconComponent = position.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary/10 rounded-full">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{position.title}</CardTitle>
                          <CardDescription className="text-primary font-medium">{position.department}</CardDescription>
                        </div>
                      </div>
                      <Badge variant="outline">{position.type}</Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-2">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{position.location}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{position.description}</p>
                    <div className="mb-4">
                      <h4 className="font-medium text-foreground mb-2">Key Requirements:</h4>
                      <ul className="space-y-1">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="text-sm text-muted-foreground flex items-center space-x-2">
                            <div className="w-1 h-1 bg-primary rounded-full"></div>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">What Our Team Says</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from the engineers and innovators who are building the future of space technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Locations</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We have offices across the United States, each focused on different aspects of our mission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <CardTitle className="text-xl">{office.city}</CardTitle>
                  </div>
                  <CardDescription>{office.address}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{office.description}</p>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{office.employees} employees</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Application Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our hiring process is designed to be thorough yet respectful of your time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold">1</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Apply Online</h3>
              <p className="text-sm text-muted-foreground">
                Submit your application and resume through our careers portal
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold">2</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Phone Screen</h3>
              <p className="text-sm text-muted-foreground">Initial conversation with our recruiting team</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold">3</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Technical Interview</h3>
              <p className="text-sm text-muted-foreground">In-depth technical discussion with the hiring team</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold">4</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Final Interview</h3>
              <p className="text-sm text-muted-foreground">Meet the team and discuss culture fit</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Launch Your Career?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us in building the future of space technology. Your next adventure starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Browse All Positions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              Submit General Application
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
