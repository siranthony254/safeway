import { Link } from "wouter";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Destinations", href: "/#destinations" },
    { label: "About", href: "/about" },
    { label: "Case Study", href: "/case-study" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-soft">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-ocean to-sunset rounded-lg flex items-center justify-center">
              <span className="text-white font-display font-bold text-lg">S</span>
            </div>
            <span className="font-display font-bold text-xl text-foreground hidden sm:inline">
              Safeway Trips
            </span>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              {item.label}
            </a>
          ))}
          <Link href="/contact">
            <a className="bg-accent text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all font-medium">
              Plan Your Trip
            </a>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden border-t border-border bg-white/95 backdrop-blur-sm"
        >
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-accent transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Link href="/contact">
              <a
                className="bg-accent text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all font-medium text-center"
                onClick={() => setIsOpen(false)}
              >
                Plan Your Trip
              </a>
            </Link>
          </div>
        </motion.nav>
      )}
    </header>
  );
}
