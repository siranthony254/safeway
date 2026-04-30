import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Heart, Globe, Users } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
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
              Our Story
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              How a passion for Kenya became a mission to share its magic with the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#destinations">
                <a className="bg-accent text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all font-semibold flex items-center justify-center gap-2 group">
                  Explore Our Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Link>
              <Link href="/contact">
                <a className="bg-accent/20 text-white px-8 py-3 rounded-lg hover:bg-accent/30 transition-all font-semibold backdrop-blur-sm">
                  Start Your Journey
                </a>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl font-bold mb-6 text-foreground">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                At Safeway Trips, we believe travel is more than just visiting new places. It's about transformation. It's about connecting with cultures, understanding people, and discovering parts of yourself you never knew existed.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're committed to creating travel experiences that are not just beautiful, but meaningful. Experiences that respect local communities, protect our environment, and leave travelers forever changed.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-sand to-secondary/30 rounded-lg p-8 h-96 flex items-center justify-center"
            >
              <div className="text-center">
                <Heart className="w-20 h-20 text-accent mx-auto mb-4" />
                <p className="text-foreground font-semibold text-lg">
                  Travel with Purpose
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 md:py-32 bg-secondary/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-display text-4xl font-bold mb-8 text-foreground">
              How It All Started
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                In 2014, I took my first trip to Kenya with nothing but a backpack and an open heart. I was running from something—burnout, routine, the monotony of corporate life. What I found instead was a calling.
              </p>

              <p>
                I spent three months traveling through Kenya's most iconic destinations. I hiked Mount Kenya's peaks, watched the Great Migration in the Maasai Mara, and spent quiet mornings on Diani's pristine beaches. But more importantly, I met people. Real people. Guides, lodge owners, local artisans—people whose stories changed me.
              </p>

              <p>
                I realized that most travelers were missing out. They were rushing through destinations, checking boxes, and missing the soul of the places they visited. They weren't connecting with local communities. They weren't getting the insider perspective. They were just tourists.
              </p>

              <p>
                That's when Safeway Trips was born. I wanted to create a company that didn't just book trips—it crafted experiences. Experiences that were safe, luxurious, and deeply authentic. Experiences that benefited local communities and respected the environment.
              </p>

              <p>
                Twelve years later, we've had the privilege of guiding nearly 3,000 travelers through Kenya. We've maintained a 98% satisfaction rate. More importantly, we've helped create jobs, supported conservation efforts, and built lasting relationships between travelers and local communities.
              </p>

              <p>
                Every trip we organize is a testament to Kenya's magic and to the incredible people who call it home. We're not just in the business of travel. We're in the business of transformation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-display text-4xl font-bold mb-12 text-center text-foreground"
          >
            Our Core Values
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Authenticity",
                description:
                  "We create real experiences with real people. No staged performances, no tourist traps. Just genuine connection.",
              },
              {
                icon: Globe,
                title: "Sustainability",
                description:
                  "We're committed to protecting Kenya's natural beauty and supporting local communities for generations to come.",
              },
              {
                icon: Users,
                title: "Excellence",
                description:
                  "From booking to departure, we obsess over every detail to ensure your experience exceeds expectations.",
              },
            ].map((value, index) => (
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
                    <value.icon className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold mb-3 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32 bg-secondary/20">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-display text-4xl font-bold mb-12 text-center text-foreground"
          >
            Meet the Team
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                name: "Alex Kariuki",
                role: "Founder & CEO",
                bio: "Kenya native with 12 years of travel industry experience.",
              },
              {
                name: "Amara Okonkwo",
                role: "Head of Operations",
                bio: "Logistics expert ensuring every trip runs flawlessly.",
              },
              {
                name: "David Kipchoge",
                role: "Lead Guide",
                bio: "Wildlife expert with intimate knowledge of Maasai Mara.",
              },
              {
                name: "Zainab Hassan",
                role: "Customer Experience",
                bio: "Dedicated to making every traveler feel at home.",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-soft text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-ocean to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-display font-bold text-xl">S</span>
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-accent font-semibold text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-32 bg-dark-slate text-white">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "12+", label: "Years in Business" },
              { number: "2,847", label: "Happy Travelers" },
              { number: "98%", label: "Satisfaction Rate" },
              { number: "$500K+", label: "Community Impact" },
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

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-ocean to-dark-slate text-foreground">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Join Our Community
            </h2>
              <p className="text-lg text-black mb-8 max-w-2xl mx-auto">
              Become part of a global community of travelers who've discovered Kenya's magic with Safeway Trips.
            </p>
            <Link href="/contact">
              <a className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all font-semibold text-lg group">
                Start Your Journey
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
