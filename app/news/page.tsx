import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Calendar, Clock, ArrowRight, Rocket, Users, ExternalLink } from "lucide-react"
import { Footer } from "@/components/footer"

const featuredNews = {
  title: "Roqvue.space Successfully Deploys 60 Satellites in Record-Breaking Mission",
  excerpt:
    "Our latest Starlink Constellation mission achieved perfect deployment of all 60 satellites, marking our 50th consecutive successful launch.",
  date: "March 10, 2025",
  readTime: "5 min read",
  category: "Mission Success",
  image: "/satellite-deployment-space.png",
  author: "Mission Control Team",
}

const newsArticles = [
  {
    title: "Roqvue.space Announces Partnership with European Space Agency",
    excerpt: "New collaboration will advance deep space exploration capabilities and support upcoming Mars missions.",
    date: "March 8, 2025",
    readTime: "3 min read",
    category: "Partnership",
    image: "/space-partnership-announcement.png",
    author: "Sarah Chen",
  },
  {
    title: "Revolutionary Drone Ship Technology Achieves 99.8% Success Rate",
    excerpt:
      "Our autonomous recovery platforms continue to set industry standards for rocket reusability and cost efficiency.",
    date: "March 5, 2025",
    readTime: "4 min read",
    category: "Technology",
    image: "/drone-ship-recovery.png",
    author: "Marcus Rodriguez",
  },
  {
    title: "Roqvue ISP Service Expands to Rural Communities Worldwide",
    excerpt:
      "High-speed satellite internet now available in 50+ countries, bringing connectivity to underserved regions.",
    date: "March 1, 2025",
    readTime: "6 min read",
    category: "ISP Services",
    image: "/global-internet-coverage.png",
    author: "Aisha Patel",
  },
  {
    title: "Company Raises $500M Series C to Accelerate Mars Mission Development",
    excerpt: "Funding will support development of next-generation heavy-lift vehicles and deep space infrastructure.",
    date: "February 28, 2025",
    readTime: "4 min read",
    category: "Funding",
    image: "/mars-mission-development.png",
    author: "James Thompson",
  },
  {
    title: "Roqvue.space Wins 'Aerospace Innovation of the Year' Award",
    excerpt:
      "Recognition for breakthrough autonomous landing technology and contributions to sustainable space exploration.",
    date: "February 25, 2025",
    readTime: "3 min read",
    category: "Awards",
    image: "/aerospace-innovation-award.png",
    author: "PR Team",
  },
  {
    title: "New Manufacturing Facility Opens in Texas, Creating 500 Jobs",
    excerpt: "State-of-the-art facility will triple our rocket production capacity and support growing launch demand.",
    date: "February 20, 2025",
    readTime: "5 min read",
    category: "Company News",
    image: "/texas-manufacturing-facility.png",
    author: "Operations Team",
  },
]

const pressReleases = [
  {
    title: "Q4 2024 Financial Results: Record Revenue and Mission Success",
    date: "February 15, 2025",
    type: "Financial Results",
  },
  {
    title: "Roqvue.space Selected for NASA Artemis Program Support",
    date: "February 10, 2025",
    type: "Contract Award",
  },
  {
    title: "Environmental Impact Report: 95% Reduction in Launch Emissions",
    date: "February 5, 2025",
    type: "Sustainability",
  },
]

const upcomingEvents = [
  {
    title: "Space Technology Conference 2025",
    date: "April 15-17, 2025",
    location: "Los Angeles, CA",
    description: "Join our CEO Sarah Chen as she presents on the future of reusable rocket technology.",
  },
  {
    title: "Mars Mission Webinar Series",
    date: "April 22, 2025",
    location: "Virtual Event",
    description: "Deep dive into our Mars exploration capabilities and upcoming interplanetary missions.",
  },
  {
    title: "Investor Day 2025",
    date: "May 10, 2025",
    location: "Hawthorne, CA",
    description: "Annual investor presentation and facility tour at our headquarters.",
  },
]

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">News & Updates</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Stay up to date with the latest developments in our mission to revolutionize space technology and global
            connectivity.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={featuredNews.image || "/placeholder.svg"}
                  alt={featuredNews.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">Featured</Badge>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <Badge variant="outline">{featuredNews.category}</Badge>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{featuredNews.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{featuredNews.readTime}</span>
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{featuredNews.title}</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">{featuredNews.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="text-xs">MC</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-muted-foreground">{featuredNews.author}</span>
                  </div>
                  <Button>
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Latest News</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our recent achievements, technological breakthroughs, and company milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative h-48">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-3 left-3" variant="secondary">
                    {article.category}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-2">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Avatar className="w-6 h-6">
                        <AvatarFallback className="text-xs">
                          {article.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-muted-foreground">{article.author}</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases & Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Press Releases */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Press Releases</h2>
              <div className="space-y-4">
                {pressReleases.map((release, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-2 hover:text-primary transition-colors cursor-pointer">
                            {release.title}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{release.date}</span>
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {release.type}
                            </Badge>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-6 bg-transparent">
                View All Press Releases
              </Button>
            </div>

            {/* Upcoming Events */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Upcoming Events</h2>
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-primary/10 rounded-full">
                          <Calendar className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-2">{event.title}</h3>
                          <div className="space-y-1 text-sm text-muted-foreground mb-3">
                            <div className="flex items-center space-x-2">
                              <Calendar className="h-4 w-4" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Users className="h-4 w-4" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">{event.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-6 bg-transparent">
                View All Events
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Rocket className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Stay Updated</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest news, launch updates, and exclusive insights from the world of
              space technology.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button size="lg" className="px-8">
              Subscribe
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            No spam, unsubscribe at any time. Read our privacy policy.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
