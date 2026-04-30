import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Check, MapPin, Calendar, Users, Zap } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TestimonialCard } from "@/components/TestimonialCard";
import { getDestinationBySlug } from "@/lib/destinations";

export default function DestinationDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold mb-4">Destination Not Found</h1>
          <Link href="/">
            <a className="text-accent font-semibold hover:underline">Back to Home</a>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-20 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={destination.heroImageCompressed}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container relative z-10">
          <Link href="/">
            <a className="inline-flex items-center gap-2 text-white mb-8 hover:gap-3 transition-all group">
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </a>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-4">
              {destination.name}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
              {destination.tagline}
            </p>

            <div className="flex flex-wrap gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{destination.duration} Days</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>{destination.groupSize}</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span>{destination.difficulty}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Best: {destination.bestTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="font-display text-4xl font-bold mb-6 text-foreground">
              The Experience
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {destination.description}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {destination.whatToExpect}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 md:py-32 bg-secondary/20">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-display text-4xl font-bold mb-12 text-foreground"
          >
            What Awaits You
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {destination.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-lg text-foreground">{highlight}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-display text-4xl font-bold mb-12 text-foreground"
          >
            Day-by-Day Itinerary
          </motion.h2>

          <div className="space-y-8">
            {destination.itinerary.map((day, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-l-4 border-accent pl-6 py-4"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    Day {day.day}: {day.title}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">{day.description}</p>
                <div className="flex flex-wrap gap-2">
                  {day.highlights.map((highlight, i) => (
                    <span
                      key={i}
                      className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 md:py-32 bg-secondary/20">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-display text-4xl font-bold mb-12 text-center text-foreground"
          >
            Pricing Options
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {destination.pricing.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-lg p-8 ${
                  tier.featured
                    ? "bg-gradient-to-br from-ocean to-dark-slate text-white shadow-medium scale-105"
                    : "bg-white shadow-soft"
                }`}
              >
                {tier.featured && (
                  <div className="inline-block bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    Most Popular
                  </div>
                )}

                <h3 className={`font-display text-2xl font-bold mb-2 ${tier.featured ? "text-white" : "text-foreground"}`}>
                  {tier.name}
                </h3>
                <p className={`text-sm mb-6 ${tier.featured ? "text-white/70" : "text-muted-foreground"}`}>
                  {tier.description}
                </p>

                <div className="mb-6">
                  <span className={`font-display text-5xl font-bold ${tier.featured ? "text-white" : "text-accent"}`}>
                    ${tier.price}
                  </span>
                  <span className={tier.featured ? "text-white/70" : "text-muted-foreground"}>
                    {" "}per person
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 ${tier.featured ? "text-accent" : "text-accent"}`} />
                      <span className={tier.featured ? "text-white/90" : "text-foreground"}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact">
                  <a className={`block w-full text-center py-3 rounded-lg font-semibold transition-all ${
                    tier.featured
                      ? "bg-accent text-white hover:bg-opacity-90"
                      : "bg-accent/10 text-foreground hover:bg-accent/20"
                  }`}>
                    Choose This Package
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-display text-4xl font-bold mb-12 text-center text-foreground"
          >
            What Travelers Say
          </motion.h2>

          <TestimonialCard
            quote={destination.testimonial.quote}
            author={destination.testimonial.author}
            role={destination.testimonial.role}
          />
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
              Ready to Experience {destination.name}?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Limited slots available. Secure your spot today and start your adventure.
            </p>
            <Link href="/contact">
              <a className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all font-semibold text-lg group">
                Plan Your Trip
                <ArrowLeft className="w-6 h-6 rotate-180 group-hover:translate-x-1 transition-transform" />
              </a>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
