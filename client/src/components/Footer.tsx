import { Link } from "wouter";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-sunset rounded-lg flex items-center justify-center">
                <span className="font-display font-bold text-lg text-white">S</span>
              </div>
              <span className="font-display font-bold text-lg">Safeway Trips</span>
            </div>
            <p className="text-white/70 text-sm">
              Curated travel experiences in Kenya, designed for adventurers seeking authenticity and luxury.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold mb-4">Destinations</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/destinations/diani" className="text-white/70 hover:text-white transition-colors">
                  Diani Beach
                </a>
              </li>
              <li>
                <a href="/destinations/maasai-mara" className="text-white/70 hover:text-white transition-colors">
                  Maasai Mara
                </a>
              </li>
              <li>
                <a href="/destinations/nanyuki" className="text-white/70 hover:text-white transition-colors">
                  Mount Kenya
                </a>
              </li>
              <li>
                <a href="/destinations/zanzibar" className="text-white/70 hover:text-white transition-colors">
                  Zanzibar
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="text-white/70 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white/70 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/" className="text-white/70 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0 text-accent" />
                <a href="mailto:hello@safewaytrips.com" className="text-white/70 hover:text-white transition-colors">
                  hello@safewaytrips.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0 text-accent" />
                <a href="tel:+254712345678" className="text-white/70 hover:text-white transition-colors">
                  +254 (0) 712 345 678
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-accent" />
                <span className="text-white/70">
                  Nairobi, Kenya
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
          <p>&copy; 2026 Safeway Trips. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
