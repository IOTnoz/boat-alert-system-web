import { Github, Twitter, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40 mt-16 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-medium">IOTnoz</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Membangun sistem pengawasan kapal yang realtime digunakan untuk pelayaran yang lebih aman.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col space-y-4 md:items-center">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
              <a href="#" className="text-sm hover:text-primary transition-colors">
                About
              </a>
              <a href="#" className="text-sm hover:text-primary transition-colors">
                Work
              </a>
              <a href="#" className="text-sm hover:text-primary transition-colors">
                Services
              </a>
              <a href="#" className="text-sm hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col space-y-4 md:items-end">
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-border/40">
          <p className="text-xs text-muted-foreground">© {currentYear} IOTnoz. All rights reserved.</p>
          <p className="text-xs text-muted-foreground mt-2 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>{" "}
            ·{" "}
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
