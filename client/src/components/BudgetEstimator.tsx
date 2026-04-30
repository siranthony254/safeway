import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Users, MapPin, Calendar, DollarSign, Check, ArrowRight } from 'lucide-react';

interface BudgetEstimatorProps {
  className?: string;
}

export function BudgetEstimator({ className = "" }: BudgetEstimatorProps) {
  const [budget, setBudget] = useState<string>('');
  const [groupSize, setGroupSize] = useState<string>('');
  const [duration, setDuration] = useState<string>('');
  const [destination, setDestination] = useState<string>('');
  const [showResults, setShowResults] = useState(false);

  const calculateEstimate = () => {
    if (budget && groupSize && duration) {
      setShowResults(true);
    }
  };

  const getRecommendations = () => {
    const budgetNum = parseInt(budget);
    const groupNum = parseInt(groupSize);
    const durationNum = parseInt(duration);

    if (!budgetNum || !groupNum || !durationNum) return [];

    const recommendations = [];

    if (budgetNum < 1000) {
      recommendations.push({
        title: "Comfort Package",
        destinations: ["Nanyuki (4 days)", "Local day trips"],
        accommodation: "3-star lodges",
        activities: "Guided tours, basic activities",
        price: "$800-1200"
      });
    } else if (budgetNum < 2500) {
      recommendations.push({
        title: "Premium Package",
        destinations: ["Diani Beach (5 days)", "Maasai Mara (5 days)", "Zanzibar (5 days)"],
        accommodation: "4-5 star resorts",
        activities: "All-inclusive activities, some premium experiences",
        price: "$1500-2500"
      });
    } else {
      recommendations.push({
        title: "Ultra-Luxury Package",
        destinations: ["All destinations available", "Custom itineraries"],
        accommodation: "5-star luxury, private villas",
        activities: "Private guides, exclusive experiences, all-inclusive",
        price: "$3000+"
      });
    }

    return recommendations;
  };

  const recommendations = getRecommendations();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`bg-white rounded-lg shadow-soft p-8 ${className}`}
    >
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
          <Calculator className="w-8 h-8 text-accent" />
        </div>
        <h2 className="font-display text-3xl font-bold mb-4 text-foreground">
          Budget Estimator
        </h2>
        <p className="text-muted-foreground">
          Tell us your budget and preferences, and we'll suggest the perfect Kenya experience for you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            <DollarSign className="w-4 h-4 inline mr-2" />
            Budget per Person (USD)
          </label>
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 bg-white"
          >
            <option value="">Select budget range</option>
            <option value="500">Under $1,000</option>
            <option value="1500">$1,000 - $2,000</option>
            <option value="2500">$2,000 - $3,500</option>
            <option value="4000">$3,500+</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            <Users className="w-4 h-4 inline mr-2" />
            Group Size
          </label>
          <select
            value={groupSize}
            onChange={(e) => setGroupSize(e.target.value)}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 bg-white"
          >
            <option value="">Select group size</option>
            <option value="1">Solo traveler</option>
            <option value="2">Couple (2 people)</option>
            <option value="4">Small group (3-4 people)</option>
            <option value="6">Medium group (5-6 people)</option>
            <option value="8">Large group (7+ people)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            <Calendar className="w-4 h-4 inline mr-2" />
            Trip Duration
          </label>
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 bg-white"
          >
            <option value="">Select duration</option>
            <option value="3">3-4 days</option>
            <option value="5">5-7 days</option>
            <option value="10">10-14 days</option>
            <option value="15">2+ weeks</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            <MapPin className="w-4 h-4 inline mr-2" />
            Preferred Destination (Optional)
          </label>
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 bg-white"
          >
            <option value="">No preference</option>
            <option value="diani">Diani Beach</option>
            <option value="maasai-mara">Maasai Mara</option>
            <option value="nanyuki">Mount Kenya</option>
            <option value="zanzibar">Zanzibar</option>
          </select>
        </div>
      </div>

      <button
        onClick={calculateEstimate}
        disabled={!budget || !groupSize || !duration}
        className="w-full bg-accent text-white py-3 rounded-lg hover:bg-opacity-90 transition-all font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Calculator className="w-5 h-5" />
        Calculate My Perfect Trip
        <ArrowRight className="w-5 h-5" />
      </button>

      {showResults && recommendations.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-8 p-6 bg-gradient-to-br from-ocean/5 to-sunset/5 rounded-lg border border-accent/20"
        >
          <h3 className="font-display text-xl font-bold mb-6 text-foreground">
            Your Recommended Experiences
          </h3>
          
          <div className="space-y-6">
            {recommendations.map((rec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border-l-4 border-accent pl-6"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-display text-lg font-bold text-foreground">
                    {rec.title}
                  </h4>
                  <span className="text-accent font-bold text-lg">
                    {rec.price}
                  </span>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-muted-foreground">
                      <strong>Destinations:</strong> {rec.destinations.join(", ")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-muted-foreground">
                      <strong>Accommodation:</strong> {rec.accommodation}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-muted-foreground">
                      <strong>Activities:</strong> {rec.activities}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-accent/10 rounded-lg">
            <p className="text-sm text-accent font-semibold text-center">
              Ready to book? Contact us for a personalized itinerary based on your preferences!
            </p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
