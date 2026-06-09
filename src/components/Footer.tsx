import { Link } from "wouter";
import { SiInstagram } from "react-icons/si";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link href="/">
              <div className="inline-block bg-slate-900 rounded-lg p-1 mb-6">
                <img 
                  src="/codenixor-logo.png" 
                  alt="CodeNixor Logo" 
                  className="h-10 w-auto cursor-pointer"
                />
              </div>
            </Link>
            <p className="text-muted-foreground text-sm mb-6">
              Building digital experiences that grow businesses. Precision engineering meets creative vision.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/codenixor/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <LinkedInIcon className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/codenixor.in" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <SiInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/"><span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer text-sm">Home</span></Link></li>
              <li><Link href="/services"><span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer text-sm">Services</span></Link></li>
              <li><Link href="/work"><span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer text-sm">Work</span></Link></li>
              <li><Link href="/pricing"><span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer text-sm">Pricing</span></Link></li>
              <li><Link href="/about"><span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer text-sm">About</span></Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              <li className="text-muted-foreground text-sm">Website Development</li>
              <li className="text-muted-foreground text-sm">UI/UX Design</li>
              <li className="text-muted-foreground text-sm">E-Commerce Development</li>
              <li className="text-muted-foreground text-sm">Business Automation</li>
              <li className="text-muted-foreground text-sm">Brand Identity</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <p className="text-muted-foreground text-sm mb-2">Ready to start a project?</p>
            <a href="mailto:contact@codenixor.com" className="text-primary hover:underline font-medium">
              contact@codenixor.com
            </a>
            <div className="mt-6">
              <p className="text-xs text-muted-foreground">Follow the founder:</p>
              <a href="https://www.linkedin.com/in/chaush-ayaan-380931320" target="_blank" rel="noreferrer" className="text-sm font-medium text-foreground hover:text-primary flex items-center gap-2 mt-2">
                <LinkedInIcon className="w-4 h-4" /> Chaush Ayaan
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 CodeNixor. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <span className="hover:text-foreground cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-foreground cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
