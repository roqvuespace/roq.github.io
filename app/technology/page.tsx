import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Rocket,
  Ship,
  Satellite,
  Wifi,
  ArrowRight,
  Zap,
  Shield,
  Globe,
  Cpu,
  Battery,
  Radio,
  Navigation,
  Gauge,
  Settings,
} from "lucide-react"
import { Footer } from "@/components/footer"
import Link from "next/link"

const rocketSpecs = [
  { name: "Height", value: "70 m", description: "230 ft" },
  { name: "Diameter", value: "3.7 m", description: "12 ft" },
  { name: "Mass", value: "549,054 kg", description: "1,207,920 lb" },
  { name: "Payload to LEO", value: "22,800 kg", description: "50,265 lb" },
  { name: "Payload to GTO", value: "8,300 kg", description: "18,300 lb" },
  { name: "Payload to Mars", value: "4,020 kg", description: "8,860 lb" },
]

const droneShipSpecs = [
  { name: "Length", value: "91 m", description: "300 ft" },
  { name: "Width", value: "52 m", description: "170 ft" },
  { name: "Landing Accuracy", value: "±2 m", description: "GPS precision" },
  { name: "Sea State Capability", value: "6", description: "Significant wave height 4-6m" },
  { name: "Positioning System", value: "DP3", description: "Dynamic positioning class 3" },
  { name: "Recovery Success", value: "99.2%", description: "Mission success rate" },
]

const satelliteSpecs = [
  { name: "Mass", value: "260 kg", description: "573 lb" },
  { name: "Power", value: "4.6 kW", description: "Solar array output" },
  { name: "Throughput", value: "20 Gbps", description: "Per satellite" },
  { name: "Coverage", value: "1,000 km", description: "Diameter footprint" },
  { name: "Orbital Altitude", value: "550 km", description: "Low Earth Orbit" },
  { name: "Operational Life", value: "10+ years", description: "Design lifetime" },
]

const ispSpecs = [
  { name: "Download Speed", value: "1 Gbps+", description: "Peak throughput" },
  { name: "Upload Speed", value: "100 Mbps+", description: "Peak throughput" },
  { name: "Latency", value: "<20 ms", description: "Round-trip time" },
  { name: "Coverage", value: "Global", description: "Worldwide service" },
  { name: "Availability", value: "99.9%", description: "Service uptime" },
  { name: "Constellation Size", value: "4,000+", description: "Active satellites" },
]

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">Advanced Technology</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Our Technology</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Cutting-edge aerospace technology designed for reliability, efficiency, and the future of space exploration.
          </p>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="rockets" className="w-full">
            <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-12">
              <TabsTrigger value="rockets">Rockets</TabsTrigger>
              <TabsTrigger value="ships">Drone Ships</TabsTrigger>
              <TabsTrigger value="satellites">Satellites</TabsTrigger>
              <TabsTrigger value="isp">ISP Services</TabsTrigger>
            </TabsList>

            {/* Rockets Tab */}
            <TabsContent value="rockets" className="space-y-12">
              <div className="text-center mb-12">
                <div className="mx-auto mb-6 p-4 bg-primary/10 rounded-full w-fit">
                  <Rocket className="h-12 w-12 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Falcon-Class Rockets</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Our reusable heavy-lift launch vehicles represent the pinnacle of rocket engineering, designed for
                  maximum reliability and cost efficiency.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img
                    src="/placeholder-i3ax0.png"
                    alt="Falcon-Class Rocket"
                    className="rounded-lg shadow-2xl w-full"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">Technical Specifications</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {rocketSpecs.map((spec, index) => (
                      <Card key={index} className="p-4">
                        <div className="text-2xl font-bold text-primary mb-1">{spec.value}</div>
                        <div className="font-medium text-foreground mb-1">{spec.name}</div>
                        <div className="text-sm text-muted-foreground">{spec.description}</div>
                      </Card>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Reusability Rate</span>
                        <span className="text-sm text-muted-foreground">95%</span>
                      </div>
                      <Progress value={95} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Mission Success Rate</span>
                        <span className="text-sm text-muted-foreground">99.8%</span>
                      </div>
                      <Progress value={99.8} className="h-2" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <Zap className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Merlin Engines</CardTitle>
                    <CardDescription>9 sea-level optimized engines in first stage</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• 845 kN thrust per engine</li>
                      <li>• Deep throttling capability</li>
                      <li>• Restart capability for landing</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <Navigation className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Autonomous Flight</CardTitle>
                    <CardDescription>Advanced guidance and navigation systems</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Real-time trajectory optimization</li>
                      <li>• Autonomous landing capability</li>
                      <li>• Weather-adaptive flight paths</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <Shield className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Safety Systems</CardTitle>
                    <CardDescription>Multiple redundant safety mechanisms</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Automated flight termination</li>
                      <li>• Redundant avionics systems</li>
                      <li>• Emergency abort capability</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Drone Ships Tab */}
            <TabsContent value="ships" className="space-y-12">
              <div className="text-center mb-12">
                <div className="mx-auto mb-6 p-4 bg-primary/10 rounded-full w-fit">
                  <Ship className="h-12 w-12 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Autonomous Drone Ships</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  AI-powered recovery platforms that enable precise rocket landings at sea, revolutionizing launch
                  vehicle reusability.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">Platform Specifications</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {droneShipSpecs.map((spec, index) => (
                      <Card key={index} className="p-4">
                        <div className="text-2xl font-bold text-primary mb-1">{spec.value}</div>
                        <div className="font-medium text-foreground mb-1">{spec.name}</div>
                        <div className="text-sm text-muted-foreground">{spec.description}</div>
                      </Card>
                    ))}
                  </div>
                </div>
                <div>
                  <img
                    src="/autonomous-ship-platform.png"
                    alt="Autonomous Drone Ship"
                    className="rounded-lg shadow-2xl w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <Cpu className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>AI Navigation</CardTitle>
                    <CardDescription>Advanced AI systems for autonomous positioning</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Machine learning algorithms</li>
                      <li>• Real-time weather adaptation</li>
                      <li>• Predictive positioning</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <Gauge className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Precision Control</CardTitle>
                    <CardDescription>Dynamic positioning with GPS precision</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• ±2m landing accuracy</li>
                      <li>• Real-time position correction</li>
                      <li>• Multi-sensor fusion</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <Settings className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Recovery Systems</CardTitle>
                    <CardDescription>Specialized equipment for rocket recovery</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Reinforced landing deck</li>
                      <li>• Automated securing systems</li>
                      <li>• Emergency response protocols</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Satellites Tab */}
            <TabsContent value="satellites" className="space-y-12">
              <div className="text-center mb-12">
                <div className="mx-auto mb-6 p-4 bg-primary/10 rounded-full w-fit">
                  <Satellite className="h-12 w-12 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Advanced Satellites</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Next-generation communication satellites designed for high-throughput, low-latency global
                  connectivity.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img
                    src="/modern-satellite-earth.png"
                    alt="Advanced Satellite"
                    className="rounded-lg shadow-2xl w-full"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">Satellite Specifications</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {satelliteSpecs.map((spec, index) => (
                      <Card key={index} className="p-4">
                        <div className="text-2xl font-bold text-primary mb-1">{spec.value}</div>
                        <div className="font-medium text-foreground mb-1">{spec.name}</div>
                        <div className="text-sm text-muted-foreground">{spec.description}</div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <Radio className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Phased Array Antennas</CardTitle>
                    <CardDescription>Advanced beamforming technology</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• 1,000+ antenna elements</li>
                      <li>• Electronic beam steering</li>
                      <li>• Multiple simultaneous beams</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <Battery className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Power Systems</CardTitle>
                    <CardDescription>High-efficiency solar arrays and batteries</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• 4.6 kW solar array output</li>
                      <li>• Lithium-ion battery backup</li>
                      <li>• 15-year design life</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <Globe className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Global Coverage</CardTitle>
                    <CardDescription>Worldwide connectivity constellation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• 1,000 km coverage diameter</li>
                      <li>• Polar and equatorial orbits</li>
                      <li>• Seamless handover capability</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* ISP Services Tab */}
            <TabsContent value="isp" className="space-y-12">
              <div className="text-center mb-12">
                <div className="mx-auto mb-6 p-4 bg-primary/10 rounded-full w-fit">
                  <Wifi className="h-12 w-12 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">ISP Services</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  High-speed satellite internet providing global connectivity with fiber-like performance and low
                  latency.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">Service Specifications</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {ispSpecs.map((spec, index) => (
                      <Card key={index} className="p-4">
                        <div className="text-2xl font-bold text-primary mb-1">{spec.value}</div>
                        <div className="font-medium text-foreground mb-1">{spec.name}</div>
                        <div className="text-sm text-muted-foreground">{spec.description}</div>
                      </Card>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Global Coverage</span>
                        <span className="text-sm text-muted-foreground">95%</span>
                      </div>
                      <Progress value={95} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Service Availability</span>
                        <span className="text-sm text-muted-foreground">99.9%</span>
                      </div>
                      <Progress value={99.9} className="h-2" />
                    </div>
                  </div>
                </div>
                <div>
                  <img src="/satellite-internet.png" alt="ISP Services" className="rounded-lg shadow-2xl w-full" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <Zap className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>High-Speed Internet</CardTitle>
                    <CardDescription>Fiber-like speeds via satellite</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Up to 1 Gbps download</li>
                      <li>• Up to 100 Mbps upload</li>
                      <li>• No data caps</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <Globe className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Global Reach</CardTitle>
                    <CardDescription>Internet access anywhere on Earth</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Remote area coverage</li>
                      <li>• Maritime connectivity</li>
                      <li>• Aviation internet</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <Shield className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Enterprise Solutions</CardTitle>
                    <CardDescription>Business-grade connectivity</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Dedicated bandwidth</li>
                      <li>• SLA guarantees</li>
                      <li>• 24/7 technical support</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Interested in Our Technology?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Learn more about how our advanced space technologies can support your mission requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8 py-6">
                Contact Our Engineers
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              Download Technical Specs
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
