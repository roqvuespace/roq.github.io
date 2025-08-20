import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Globe, Building, Users, Calendar, CheckCircle, ArrowRight, Zap, Shield, Target } from "lucide-react"
import { Footer } from "@/components/footer"
import Link from "next/link"

const launchPrograms = [
  {
    id: "commercial",
    name: "Commercial Missions",
    icon: Building,
    description: "Dedicated launches for commercial satellites and payloads",
    features: ["Dedicated launch vehicle", "Custom mission profile", "Priority scheduling", "Mission insurance"],
    price: "Starting at $62M",
    capacity: "Up to 4,000 kg to LEO",
    missions: 0,
  },
  {
    id: "rideshare",
    name: "Rideshare Program",
    icon: Users,
    description: "Cost-effective access to space for small satellites",
    features: ["Shared launch costs", "Flexible payload sizes", "Multiple orbit options", "Quick integration"],
    price: "Starting at $1M",
    capacity: "Up to 500 kg per customer",
    missions: 0,
  },
  {
    id: "government",
    name: "Government & Defense",
    icon: Shield,
    description: "Secure launches for national security and government payloads",
    features: [
      "Security clearance",
      "Classified mission support",
      "Rapid response capability",
      "Custom configurations",
    ],
    price: "Contact for pricing",
    capacity: "Mission-specific",
    missions: 0,
  },
  {
    id: "interplanetary",
    name: "Interplanetary Missions",
    icon: Globe,
    description: "Deep space missions to Mars, Moon, and beyond",
    features: ["Extended mission support", "Deep space trajectories", "Advanced guidance systems", "Mission planning"],
    price: "Starting at $90M",
    capacity: "Up to ?? kg to Mars",
    missions: 0,
  },
]

const upcomingLaunches = [
  {
    mission: "N/A",
    date: "N/A",
    time: "N/A",
    vehicle: "N/A",
    payload: "N/A",
    customer: "N/A",
    status: "confirmed",
  }
]

const pastMissions = [
  {
    mission: "N/A",
    date: "N/A",
    vehicle: "N/A",
    result: "Success",
    payload: "N/A",
  }
]

export default function LaunchProgramsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">Launch Services (Soon)</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Launch Programs</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            From small satellites to interplanetary missions, our launch programs provide reliable, cost-effective
            access to space for every mission profile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#programs">
              <Button size="lg" className="text-lg px-8 py-6">
                Explore Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="#schedule">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                View Launch Schedule
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Launch Programs */}
      <section id="programs" className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Launch Programs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tailored launch solutions for every mission requirement, from commercial deployments to deep space
              exploration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {launchPrograms.map((program) => {
              const IconComponent = program.icon
              return (
                <Card key={program.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{program.name}</CardTitle>
                        <CardDescription className="text-base">{program.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{program.price}</div>
                        <div className="text-sm text-muted-foreground">Starting Price</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{program.capacity}</div>
                        <div className="text-sm text-muted-foreground">Payload Capacity</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{program.missions}</div>
                        <div className="text-sm text-muted-foreground">Missions Completed</div>
                      </div>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {program.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Launch Schedule */}
      <section id="schedule" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Launch Schedule</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay updated with our upcoming missions and track our launch history.
            </p>
          </div>

          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
              <TabsTrigger value="upcoming">Upcoming Launches</TabsTrigger>
              <TabsTrigger value="past">Past Missions</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-4">
              {upcomingLaunches.map((launch, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                      <div className="md:col-span-2">
                        <h3 className="font-semibold text-foreground mb-1">{launch.mission}</h3>
                        <p className="text-sm text-muted-foreground">{launch.customer}</p>
                      </div>
                      <div className="text-center">
                        <div className="font-medium text-foreground">{launch.date}</div>
                        <div className="text-sm text-muted-foreground">{launch.time}</div>
                      </div>
                      <div className="text-center">
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          {launch.vehicle}
                        </Badge>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-medium text-foreground">{launch.payload}</div>
                      </div>
                      <div className="text-center">
                        <Badge
                          variant={launch.status === "confirmed" ? "default" : "secondary"}
                          className={launch.status === "confirmed" ? "bg-green-100 text-green-800" : ""}
                        >
                          {launch.status}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="past" className="space-y-4">
              {pastMissions.map((mission, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                      <div className="md:col-span-2">
                        <h3 className="font-semibold text-foreground mb-1">{mission.mission}</h3>
                        <p className="text-sm text-muted-foreground">{mission.payload}</p>
                      </div>
                      <div className="text-center">
                        <div className="font-medium text-foreground">{mission.date}</div>
                      </div>
                      <div className="text-center">
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          {mission.vehicle}
                        </Badge>
                      </div>
                      <div className="text-center">
                        <Badge className="bg-green-100 text-green-800">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          {mission.result}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Mission Capabilities */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Mission Capabilities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced capabilities that set our launch programs apart from the competition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Rapid Response</CardTitle>
                <CardDescription>Launch readiness in as little as 30 days for urgent missions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Streamlined integration process</li>
                  <li>• Dedicated mission teams</li>
                  <li>• Emergency launch capability</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Precision Deployment</CardTitle>
                <CardDescription>Accurate orbital insertion with minimal deviation</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• ±1km orbital accuracy</li>
                  <li>• Multiple deployment sequences</li>
                  <li>• Real-time trajectory monitoring</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Mission Planning</CardTitle>
                <CardDescription>Comprehensive mission support from concept to completion</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• End-to-end mission design</li>
                  <li>• Regulatory compliance support</li>
                  <li>• Post-launch mission operations</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Launch Your Mission?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact our mission planning team to discuss your launch requirements and get a custom quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8 py-6">
                Request Launch Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              Download Mission Guide
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
