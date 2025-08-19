import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Rocket } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Rocket className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">Roqvue.space</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Pioneering the future of space technology with innovative rockets, drone ships, and satellite solutions
              for global connectivity.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm">
                Twitter
              </Button>
              <Button variant="outline" size="sm">
                LinkedIn
              </Button>
              <Button variant="outline" size="sm">
                YouTube
              </Button>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Technologies</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/technology#rockets" className="hover:text-primary transition-colors">
                  Rockets
                </Link>
              </li>
              <li>
                <Link href="/technology#ships" className="hover:text-primary transition-colors">
                  Drone Ships
                </Link>
              </li>
              <li>
                <Link href="/technology#satellites" className="hover:text-primary transition-colors">
                  Satellites
                </Link>
              </li>
              <li>
                <Link href="/technology#isp" className="hover:text-primary transition-colors">
                  ISP Services
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-primary transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Roqvue.space. All rights reserved. Reaching for the stars, one launch at a time.</p>
        </div>
      </div>
    </footer>
  )
}
