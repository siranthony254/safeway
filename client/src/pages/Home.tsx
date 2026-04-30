import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, MapPin, Users, Zap } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DestinationCard } from "@/components/DestinationCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { SvgDivider } from "@/components/SvgDivider";
import { SEO, seoConfig } from "@/components/SEO";
import { LimitedSpotsCountdown } from "@/components/CountdownTimer";
import { destinations, getFeaturedDestinations } from "@/lib/destinations";

export default function Home() {
  const featuredDestinations = getFeaturedDestinations();

  return (
    <div className="min-h-screen bg-background">
      <SEO {...seoConfig.home} canonical="https://safewaytrips.com" />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-20 md:pb-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663443948049/CxdDMGsa3Pr7Yyr2abi8Vv/homepage-hero-DRefRzrceisymxGcgWLeip.webp"
            alt="Kenya Adventure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="container relative z-10 flex flex-col items-center justify-center text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Curated Kenya Experiences for People Who Need a Real Break
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              From moment you leave home to the moment you return, every detail is handled—so you can fully switch off and experience Kenya the way it was meant to be.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#destinations">
                <a className="bg-accent text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all font-semibold flex items-center justify-center gap-2 group">
                  Explore Destinations
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Link>
              <Link href="/contact">
                <a className="bg-accent/20 text-white px-8 py-3 rounded-lg hover:bg-accent/30 transition-all font-semibold backdrop-blur-sm">
                  Plan Your Trip
                </a>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Safeway Trips Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Why Choose Safeway Trips?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything You Hate About Planning Trips—We've Already Solved It
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: "Curated Destinations",
                description:
                  "We don't send you everywhere—only where it's truly worth your time.",
              },
              {
                icon: Users,
                title: "Expert Guides",
                description:
                  "You won't feel like a tourist. Our local guides make every place feel personal.",
              },
              {
                icon: Zap,
                title: "Seamless Experience",
                description:
                  "From booking to return, we handle every detail so you can focus on adventure.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations Section */}
      <section id="destinations" className="py-20 md:py-32 bg-secondary/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Find Your Next Escape
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're chasing sunsets, wildlife, or quiet moments away from the noise—we've designed something for you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {featuredDestinations.map((destination, index) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
                index={index}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/contact">
              <a className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all group">
                View All Destinations
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Travelers' Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real experiences from real travelers who discovered Kenya with us.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Diani exceeded every expectation. The beaches are absolutely stunning, and the service was impeccable. I've never felt more at peace.",
                author: "Sarah Mitchell",
                role: "Travel Blogger",
              },
              {
                quote:
                  "The Maasai Mara safari was the most incredible experience of my life. Seeing the Big Five in their natural habitat was unforgettable.",
                author: "James Chen",
                role: "Adventure Photographer",
              },
              {
                quote:
                  "Nanyuki was the perfect escape. The lodge was stunning, the mountain views breathtaking, and the staff made us feel like family.",
                author: "Emma Rodriguez",
                role: "Wellness Coach",
              },
            ].map((testimonial, index) => (
              <TestimonialCard
                key={index}
                {...testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-32 bg-dark-slate text-white">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "2,847", label: "Happy Travelers" },
              { number: "98%", label: "Satisfaction Rate" },
              { number: "12+", label: "Years Experience" },
              { number: "4", label: "Iconic Destinations" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <p className="text-white/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-20 md:py-32 bg-secondary/20">
        <div className="container">
          <LimitedSpotsCountdown />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-ocean to-dark-slate text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Ready for Your Adventure?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Limited slots available for our upcoming trips. Secure your spot today and start your Kenya journey.
            </p>
            <Link href="/contact">
              <a className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all font-semibold text-lg group">
                Plan Your Trip Now
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
