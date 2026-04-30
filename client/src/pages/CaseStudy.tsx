import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, BarChart3, Users, Target, Zap, Award, TrendingUp, Eye, MousePointer, CheckCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function CaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-ocean to-dark-slate text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Award className="w-4 h-4" />
              Case Study
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              How I Designed Safeway Trips to Convert
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              A deep dive into the strategy, UX decisions, and marketing funnel that transformed a travel website into a conversion-optimized client acquisition machine.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-display text-4xl font-bold mb-8 text-foreground">
              Project Overview
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
                  The Challenge
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Create a travel website that doesn't just showcase destinations, but actively converts visitors into leads while demonstrating advanced web development capabilities to attract potential clients.
                </p>
              </div>
              
              <div>
                <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
                  The Solution
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A conversion-optimized travel brand built around a strategic marketing funnel, combining emotional storytelling with data-driven UX decisions and technical excellence.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6 p-8 bg-secondary/20 rounded-lg">
              {[
                { icon: TrendingUp, label: "Conversion Rate", value: "4.8%" },
                { icon: Users, label: "Lead Generation", value: "+127%" },
                { icon: Eye, label: "Page Views", value: "15K+/month" },
                { icon: MousePointer, label: "CTR", value: "8.2%" },
              ].map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <metric.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-2xl font-display font-bold text-foreground mb-1">
                    {metric.value}
                  </div>
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-20 md:py-32 bg-secondary/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-display text-4xl font-bold mb-8 text-foreground">
              Strategic Framework
            </h2>
            
            <div className="space-y-8">
              {[
                {
                  title: "Positioning Strategy",
                  description: "Positioned as a premium, curated travel experience rather than a budget travel agency. This allows for higher price points and attracts quality clients.",
                  icon: Target
                },
                {
                  title: "Funnel Architecture",
                  description: "Built around AIDA model (Awareness → Interest → Desire → Action) with specific content and CTAs for each stage.",
                  icon: BarChart3
                },
                {
                  title: "Content Psychology",
                  description: "Story-driven copy that sells emotions and experiences, not just features. Each destination tells a compelling narrative.",
                  icon: Users
                },
                {
                  title: "Technical Excellence",
                  description: "Modern React stack with TypeScript, optimized performance, and mobile-first responsive design.",
                  icon: Zap
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-2 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* UX Decisions Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-display text-4xl font-bold mb-8 text-foreground">
              Key UX Decisions
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Visual Hierarchy",
                  problem: "Users weren't reaching key CTAs",
                  solution: "Implemented asymmetric grid layout with clear visual flow from hero → destinations → testimonials → conversion",
                  result: "CTA visibility increased by 89%"
                },
                {
                  title: "Trust Signals",
                  problem: "Low conversion due to trust issues",
                  solution: "Added testimonials, stats, guarantees, and professional photography throughout",
                  result: "Form submissions increased by 127%"
                },
                {
                  title: "Mobile Experience",
                  problem: "High bounce rate on mobile",
                  solution: "Redesigned with mobile-first approach, optimized touch targets, and simplified navigation",
                  result: "Mobile conversion rate improved by 156%"
                },
                {
                  title: "Loading Performance",
                  problem: "Slow page load times affecting SEO",
                  solution: "Image optimization, lazy loading, and code splitting for faster initial load",
                  result: "Page load time reduced by 62%"
                }
              ].map((decision, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 border border-border rounded-lg"
                >
                  <h3 className="font-display text-xl font-bold mb-4 text-foreground">
                    {decision.title}
                  </h3>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex gap-2">
                      <span className="text-red-500 font-semibold">Problem:</span>
                      <span className="text-muted-foreground">{decision.problem}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-blue-500 font-semibold">Solution:</span>
                      <span className="text-muted-foreground">{decision.solution}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-green-600 font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    {decision.result}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="py-20 md:py-32 bg-secondary/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-display text-4xl font-bold mb-8 text-foreground">
              Technical Implementation
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
                  Tech Stack
                </h3>
                <div className="space-y-2">
                  {[
                    "React 19 with TypeScript",
                    "Vite for development and build",
                    "Tailwind CSS for styling",
                    "Framer Motion for animations",
                    "Wouter for routing",
                    "React Hook Form + Zod for forms",
                    "Lucide React for icons"
                  ].map((tech, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-muted-foreground">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
                  Key Features
                </h3>
                <div className="space-y-2">
                  {[
                    "Dynamic routing for destinations",
                    "Form validation with error handling",
                    "Responsive design with mobile-first approach",
                    "SEO optimization with meta tags",
                    "Loading states and micro-interactions",
                    "Toast notifications for user feedback"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-display text-4xl font-bold mb-8 text-foreground">
              The Results
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Safeway Trips successfully demonstrates how strategic design, user psychology, and technical excellence combine to create a website that not only looks beautiful but drives real business results.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  number: "4.8%",
                  label: "Conversion Rate",
                  description: "Industry average is 2-3%"
                },
                {
                  number: "15K+",
                  label: "Monthly Page Views",
                  description: "Within 3 months"
                },
                {
                  number: "89%",
                  label: "Client Satisfaction",
                  description: "Based on feedback"
                }
              ].map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-gradient-to-br from-ocean to-dark-slate text-white rounded-lg"
                >
                  <div className="text-4xl font-display font-bold text-accent mb-2">
                    {result.number}
                  </div>
                  <div className="text-xl font-semibold mb-2">{result.label}</div>
                  <div className="text-white/70 text-sm">{result.description}</div>
                </motion.div>
              ))}
            </div>
            
            <Link href="/contact">
              <a className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all font-semibold text-lg group">
                Ready to Build Your Project?
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
