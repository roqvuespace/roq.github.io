import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, MessageSquare, Rocket, Users, Newspaper, Building, ArrowRight } from "lucide-react"
import { Footer } from "@/components/footer"

const contactOptions = [
  {
    icon: Rocket,
    title: "Launch Services",
    description: "Inquiries about launch programs and mission planning",
    email: "launches@roqvue.space",
    phone: "+1 (555) 123-4567",
  },
  {
    icon: Users,
    title: "General Inquiries",
    description: "General questions about our company and services",
    email: "info@roqvue.space",
    phone: "+1 (555) 123-4500",
  },
  {
    icon: Newspaper,
    title: "Media & Press",
    description: "Press inquiries and media relations",
    email: "press@roqvue.space",
    phone: "+1 (555) 123-4580",
  },
  {
    icon: Building,
    title: "Partnerships",
    description: "Business development and partnership opportunities",
    email: "partnerships@roqvue.space",
    phone: "+1 (555) 123-4590",
  },
]

const offices = [
  {
    name: "Headquarters",
    city: "Hawthorne, CA",
    address: "1 Rocket Road, Hawthorne, CA 90250",
    phone: "+1 (555) 123-4500",
    email: "hawthorne@roqvue.space",
    hours: "Mon-Fri: 8:00 AM - 6:00 PM PST",
    description: "Main headquarters and manufacturing facility",
  },
  {
    name: "Austin Office",
    city: "Austin, TX",
    address: "500 Innovation Drive, Austin, TX 78701",
    phone: "+1 (555) 123-4600",
    email: "austin@roqvue.space",
    hours: "Mon-Fri: 9:00 AM - 5:00 PM CST",
    description: "Software development and mission control",
  },
  {
    name: "Seattle Office",
    city: "Seattle, WA",
    address: "200 Space Way, Seattle, WA 98101",
    phone: "+1 (555) 123-4700",
    email: "seattle@roqvue.space",
    hours: "Mon-Fri: 8:00 AM - 5:00 PM PST",
    description: "Satellite development and testing",
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Ready to launch your project or have questions about our services? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Your Company" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="inquiryType">Inquiry Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="launch">Launch Services</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="media">Media & Press</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="careers">Careers</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project or inquiry..."
                    className="min-h-[120px]"
                  />
                </div>
                <Button className="w-full" size="lg">
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Choose the best way to reach us based on your specific needs. Our team is here to help you achieve
                  your space technology goals.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactOptions.map((option, index) => {
                  const IconComponent = option.icon
                  return (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-primary/10 rounded-full">
                            <IconComponent className="h-5 w-5 text-primary" />
                          </div>
                          <CardTitle className="text-lg">{option.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <p className="text-sm text-muted-foreground">{option.description}</p>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2 text-sm">
                            <Mail className="h-4 w-4 text-primary" />
                            <a href={`mailto:${option.email}`} className="text-primary hover:underline">
                              {option.email}
                            </a>
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <Phone className="h-4 w-4 text-primary" />
                            <a href={`tel:${option.phone}`} className="text-primary hover:underline">
                              {option.phone}
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* Quick Contact */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <MessageSquare className="h-6 w-6 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">Need immediate assistance?</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    For urgent launch-related inquiries, contact our 24/7 mission support line.
                  </p>
                  <Button variant="outline" className="bg-background">
                    <Phone className="mr-2 h-4 w-4" />
                    Call +1 (555) 123-SPACE
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Locations</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Visit us at one of our offices across the United States. Each location specializes in different aspects of
              our space technology development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <CardTitle className="text-xl">{office.name}</CardTitle>
                  </div>
                  <CardDescription className="text-base font-medium">{office.city}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{office.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2 text-sm">
                      <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Phone className="h-4 w-4 text-primary" />
                      <a href={`tel:${office.phone}`} className="text-primary hover:underline">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Mail className="h-4 w-4 text-primary" />
                      <a href={`mailto:${office.email}`} className="text-primary hover:underline">
                        {office.email}
                      </a>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{office.hours}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions about our services and processes.
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How long does it take to plan and execute a launch?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Typical launch planning takes 6-18 months depending on mission complexity. Our rapid response
                  capability can accommodate urgent missions in as little as 30 days for qualified payloads.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What are your payload size and weight limitations?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our Falcon-class rockets can deliver up to 22,800 kg to Low Earth Orbit (LEO) and 8,300 kg to
                  Geostationary Transfer Orbit (GTO). For rideshare missions, individual payloads can be up to 500 kg.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you provide mission insurance?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, we work with leading aerospace insurance providers to offer comprehensive mission insurance
                  options. Our team can help you navigate insurance requirements and options.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can you accommodate international customers?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Absolutely. We work with customers worldwide and handle all necessary export licensing and regulatory
                  compliance for international missions, subject to applicable laws and regulations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
