import { motion } from "framer-motion";
import { Link } from "wouter";
import { Destination } from "@/lib/destinations";
import { ArrowRight } from "lucide-react";

interface DestinationCardProps {
  destination: Destination;
  index?: number;
}

export function DestinationCard({
  destination,
  index = 0,
}: DestinationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link href={`/destinations/${destination.slug}`}>
        <a className="block h-full">
          <div className="relative overflow-hidden rounded-lg shadow-soft hover:shadow-medium transition-shadow duration-300">
            {/* Hero Image */}
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img
                src={destination.heroImageCompressed}
                alt={destination.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
                {destination.name}
              </h3>
              <p className="text-sm md:text-base text-white/90 mb-4 line-clamp-2">
                {destination.tagline}
              </p>

              {/* Meta Info */}
              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-xs md:text-sm">
                  <span className="flex items-center gap-1">
                    <span className="font-semibold">{destination.duration}</span>{" "}
                    days
                  </span>
                  <span className="text-white/70">•</span>
                  <span>{destination.difficulty}</span>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </a>
      </Link>
    </motion.div>
  );
}
