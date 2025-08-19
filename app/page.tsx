import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rocket, Satellite, Ship, Wifi, ArrowRight, Star, Users, Target } from "lucide-react"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background"></div>
        <img
          src="/rocket-launch-starry-space.png"
          alt="Rocket Launch"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">Next Generation Space Technology</Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Pioneering the
            <span className="text-primary block">Future of Space</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Developing advanced rockets, autonomous drone ships, and cutting-edge satellites to revolutionize space
            exploration and ISP services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/launch-programs">
              <Button size="lg" className="text-lg px-8 py-6">
                Explore Our Technology
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              Watch Launch Video
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Successful Launches</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">99.8%</div>
              <div className="text-muted-foreground">Mission Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Satellites Deployed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">ISP Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Technologies</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From reusable rockets to autonomous recovery systems, we're building the infrastructure for humanity's
              space future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <Rocket className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Falcon-Class Rockets</CardTitle>
                <CardDescription>
                  Reusable heavy-lift vehicles designed for reliability and cost efficiency
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 70-ton payload capacity</li>
                  <li>• 95% reusability rate</li>
                  <li>• Autonomous landing system</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <Ship className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Autonomous Drone Ships</CardTitle>
                <CardDescription>AI-powered recovery platforms for safe rocket landings at sea</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• GPS precision landing</li>
                  <li>• Weather-adaptive positioning</li>
                  <li>• 99% recovery success rate</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <Satellite className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Advanced Satellites</CardTitle>
                <CardDescription>Next-generation communication satellites for global connectivity</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 10-year operational life</li>
                  <li>• High-throughput capacity</li>
                  <li>• Low-latency communication</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <Wifi className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>ISP Services</CardTitle>
                <CardDescription>Satellite-based internet providing global high-speed connectivity</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 1Gbps+ speeds</li>
                  <li>• Global coverage</li>
                  <li>• Enterprise solutions</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                At Roqvue.space, we believe that space technology should be accessible, reliable, and sustainable. Our
                mission is to democratize space access while building the infrastructure that will support humanity's
                expansion beyond Earth.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="mx-auto mb-3 p-2 bg-primary/10 rounded-full w-fit">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">Innovation</h3>
                  <p className="text-sm text-muted-foreground">Pushing the boundaries of what's possible</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-3 p-2 bg-primary/10 rounded-full w-fit">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">Accessibility</h3>
                  <p className="text-sm text-muted-foreground">Making space technology available to all</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-3 p-2 bg-primary/10 rounded-full w-fit">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">Excellence</h3>
                  <p className="text-sm text-muted-foreground">Delivering unmatched quality and reliability</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="/futuristic-space-station.png" alt="Space Station" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Ready to Launch Your Project?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Partner with us to bring your space technology vision to life. From concept to orbit, we're here to make it
            happen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8 py-6">
                Start Your Mission
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
