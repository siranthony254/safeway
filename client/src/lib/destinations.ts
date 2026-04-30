export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  highlights: string[];
}

export interface PricingTier {
  name: string;
  price: number;
  description: string;
  includes: string[];
  featured?: boolean;
}

export interface Destination {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  heroImageCompressed: string;
  duration: number;
  bestTime: string;
  difficulty: "Easy" | "Moderate" | "Challenging";
  groupSize: string;
  itinerary: ItineraryDay[];
  pricing: PricingTier[];
  highlights: string[];
  whatToExpect: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

export const destinations: Destination[] = [
  {
    id: "diani",
    slug: "diani",
    name: "Diani Beach Paradise",
    tagline: "5 days in Diani where your only job is to breathe, explore, and feel alive again.",
    description:
      "Escape to Kenya's most luxurious beach destination. Diani Beach offers pristine white sands, crystal-clear turquoise waters, and world-class resorts. Whether you're seeking relaxation, water sports, or cultural experiences, Diani delivers the perfect blend of adventure and tranquility.",
    heroImage:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663443948049/CxdDMGsa3Pr7Yyr2abi8Vv/diani-hero-DZjbVWy4GmcBSfPMmqbzg7.png",
    heroImageCompressed:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663443948049/CxdDMGsa3Pr7Yyr2abi8Vv/diani-hero-EcVEZQXia2SLJ2xw8Horot.webp",
    duration: 5,
    bestTime: "June - October, December - February",
    difficulty: "Easy",
    groupSize: "2-12 people",
    highlights: [
      "Pristine white sand beaches",
      "Dolphin watching and snorkeling",
      "Traditional dhow sailing",
      "Luxury resort experience",
      "Water sports and beach activities",
      "Coastal cuisine and dining",
    ],
    whatToExpect:
      "Days spent lounging on pristine beaches, exploring coral reefs, and enjoying world-class hospitality. Evenings feature fresh seafood dinners and sunset walks along the shore. This is pure relaxation with optional adventure.",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Settlement",
        description:
          "Arrive at Mombasa International Airport. Transfer to your luxury beachfront resort in Diani. Settle in and enjoy the sunset from your private terrace.",
        highlights: [
          "Airport transfer",
          "Resort check-in",
          "Welcome dinner",
          "Sunset viewing",
        ],
      },
      {
        day: 2,
        title: "Dolphin Watching & Snorkeling",
        description:
          "Early morning boat trip to spot dolphins in their natural habitat. Snorkel in vibrant coral gardens teeming with tropical fish. Lunch on the beach.",
        highlights: [
          "Dolphin watching",
          "Coral reef snorkeling",
          "Beach lunch",
          "Afternoon relaxation",
        ],
      },
      {
        day: 3,
        title: "Traditional Dhow Sailing",
        description:
          "Experience the magic of traditional dhow sailing. Glide across turquoise waters, explore hidden coves, and enjoy fresh seafood lunch prepared onboard.",
        highlights: [
          "Dhow sailing experience",
          "Cove exploration",
          "Onboard lunch",
          "Swimming in secluded spots",
        ],
      },
      {
        day: 4,
        title: "Beach Day & Spa",
        description:
          "Indulge in a full day of relaxation. Beach time, spa treatments, and optional water sports. Evening beach bonfire with cocktails.",
        highlights: [
          "Spa treatments",
          "Beach activities",
          "Water sports (optional)",
          "Beach bonfire",
        ],
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Final morning swim or beach walk. Transfer to airport for your journey home, carrying memories of paradise.",
        highlights: [
          "Final beach time",
          "Airport transfer",
          "Departure",
        ],
      },
    ],
    pricing: [
      {
        name: "Comfort",
        price: 1200,
        description: "3-star resort with essential amenities",
        includes: [
          "3-star beachfront resort",
          "Daily breakfast",
          "2 guided activities",
          "Airport transfers",
          "24/7 support",
        ],
      },
      {
        name: "Luxury",
        price: 2200,
        featured: true,
        description: "5-star resort with premium experiences",
        includes: [
          "5-star beachfront resort",
          "All meals included",
          "4 guided activities",
          "Private airport transfers",
          "Spa credit",
          "24/7 concierge",
        ],
      },
      {
        name: "Ultra-Luxury",
        price: 3800,
        description: "Private villa with personalized service",
        includes: [
          "Private beachfront villa",
          "Personal chef",
          "All meals & drinks",
          "Private guide",
          "Water sports included",
          "Spa treatments included",
          "Private airport transfers",
        ],
      },
    ],
    testimonial: {
      quote:
        "Diani exceeded every expectation. The beaches are absolutely stunning, and the service was impeccable. I've never felt more at peace.",
      author: "Sarah Mitchell",
      role: "Travel Blogger",
    },
  },
  {
    id: "maasai-mara",
    slug: "maasai-mara",
    name: "Maasai Mara Safari",
    tagline: "Witness the raw power of nature in Africa's most iconic wildlife reserve.",
    description:
      "Experience the legendary Maasai Mara, where millions of wildebeest migrate across golden plains and lions rule the savanna. This is Africa at its most dramatic and authentic. Watch the Big Five, experience Maasai culture, and create memories that will last a lifetime.",
    heroImage:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663443948049/CxdDMGsa3Pr7Yyr2abi8Vv/maasai-mara-hero-WQhCimSJybkiA4TbYaFq9w.png",
    heroImageCompressed:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663443948049/CxdDMGsa3Pr7Yyr2abi8Vv/maasai-mara-hero-AXiroa4G7hxZb9Qw6h7J3Y.webp",
    duration: 5,
    bestTime: "July - October (Great Migration)",
    difficulty: "Moderate",
    groupSize: "4-8 people per vehicle",
    highlights: [
      "Big Five wildlife viewing",
      "Great Migration (seasonal)",
      "Hot air balloon safari",
      "Maasai village visits",
      "Professional guides",
      "Photography opportunities",
    ],
    whatToExpect:
      "Early morning and late afternoon game drives in open-top vehicles. Encounters with lions, elephants, giraffes, and countless other species. Evening visits to Maasai villages to learn about local culture. This is adventure and education combined.",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Orientation",
        description:
          "Fly from Nairobi to Maasai Mara. Check into your safari lodge. Afternoon game drive to spot wildlife and get oriented.",
        highlights: [
          "Flight to Maasai Mara",
          "Lodge check-in",
          "Afternoon game drive",
          "Sunset viewing",
        ],
      },
      {
        day: 2,
        title: "Full Day Safari & Maasai Visit",
        description:
          "Early morning game drive for optimal wildlife viewing. Afternoon visit to a Maasai village to experience local culture and traditions.",
        highlights: [
          "Morning game drive",
          "Picnic lunch in the bush",
          "Afternoon game drive",
          "Maasai village visit",
        ],
      },
      {
        day: 3,
        title: "Hot Air Balloon Safari",
        description:
          "Float above the Mara at sunrise. Experience the landscape from a unique perspective. Champagne breakfast in the bush.",
        highlights: [
          "Hot air balloon flight",
          "Aerial photography",
          "Bush breakfast",
          "Afternoon game drive",
        ],
      },
      {
        day: 4,
        title: "Migration & Wildlife",
        description:
          "Full day dedicated to following the Great Migration (seasonal) or tracking predators and prey. Comprehensive wildlife experience.",
        highlights: [
          "Morning game drive",
          "Migration viewing (seasonal)",
          "Bush lunch",
          "Afternoon game drive",
        ],
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Final morning game drive. Transfer to airstrip for flight back to Nairobi, carrying unforgettable safari memories.",
        highlights: [
          "Final game drive",
          "Airport transfer",
          "Flight to Nairobi",
        ],
      },
    ],
    pricing: [
      {
        name: "Standard",
        price: 1800,
        description: "Comfortable lodge with shared game drives",
        includes: [
          "Mid-range safari lodge",
          "All meals",
          "Shared game drives",
          "Professional guide",
          "Park fees",
          "Airport transfers",
        ],
      },
      {
        name: "Premium",
        price: 3200,
        featured: true,
        description: "Luxury camp with private guide option",
        includes: [
          "Luxury safari camp",
          "All meals & drinks",
          "Shared or private game drives",
          "Expert naturalist guide",
          "Hot air balloon safari",
          "Maasai village visit",
          "Park fees included",
        ],
      },
      {
        name: "Exclusive",
        price: 5500,
        description: "Private camp with dedicated guide and vehicles",
        includes: [
          "Exclusive safari camp",
          "Personal chef",
          "All meals & premium drinks",
          "Private guide & vehicle",
          "Hot air balloon safari",
          "Maasai cultural immersion",
          "Photography guidance",
          "Park fees included",
        ],
      },
    ],
    testimonial: {
      quote:
        "The Maasai Mara safari was the most incredible experience of my life. Seeing the Big Five in their natural habitat, and the hot air balloon at sunrise... I'm still speechless.",
      author: "James Chen",
      role: "Adventure Photographer",
    },
  },
  {
    id: "nanyuki",
    slug: "nanyuki",
    name: "Mount Kenya Retreat",
    tagline: "Discover the magic where mountains meet culture at Kenya's equator.",
    description:
      "Nanyuki, nestled at the foothills of Mount Kenya, offers a unique blend of mountain adventure, luxury hospitality, and authentic Kenyan culture. Visit the equator, explore pristine highlands, and experience world-class lodges in a cooler, more intimate setting.",
    heroImage:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663443948049/CxdDMGsa3Pr7Yyr2abi8Vv/nanyuki-hero-69Ezi2t9omHGoXRdBR2AjT.png",
    heroImageCompressed:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663443948049/CxdDMGsa3Pr7Yyr2abi8Vv/nanyuki-hero-fNxLDMMuUsm9qAb6bkxmex.webp",
    duration: 4,
    bestTime: "Year-round (best: June-October, December-February)",
    difficulty: "Moderate",
    groupSize: "2-10 people",
    highlights: [
      "Mount Kenya views",
      "Equator crossing experience",
      "Ol Pejeta Conservancy",
      "Luxury mountain lodges",
      "Hiking and nature walks",
      "Cultural experiences",
    ],
    whatToExpect:
      "Cool mountain air, stunning views of Mount Kenya, and a more relaxed pace than traditional safaris. Days include guided walks, conservancy visits, and cultural interactions. Evenings feature fireside conversations and gourmet dinners.",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Equator Experience",
        description:
          "Drive from Nairobi to Nanyuki. Visit the equator monument and experience standing on both hemispheres simultaneously. Check into your luxury mountain lodge.",
        highlights: [
          "Equator crossing",
          "Monument visit",
          "Lodge check-in",
          "Welcome dinner",
        ],
      },
      {
        day: 2,
        title: "Ol Pejeta Conservancy",
        description:
          "Full day at Ol Pejeta, one of Kenya's premier wildlife conservancies. Game drives, rhino sanctuary visit, and chimpanzee sanctuary tour.",
        highlights: [
          "Game drives",
          "Rhino sanctuary",
          "Chimpanzee sanctuary",
          "Bush lunch",
          "Photography opportunities",
        ],
      },
      {
        day: 3,
        title: "Mount Kenya Hiking & Culture",
        description:
          "Guided nature walk with Mount Kenya views. Visit local communities to learn about traditional Kenyan culture and lifestyle.",
        highlights: [
          "Nature walk",
          "Mount Kenya views",
          "Cultural village visit",
          "Local market exploration",
          "Sunset viewing",
        ],
      },
      {
        day: 4,
        title: "Relaxation & Departure",
        description:
          "Leisurely morning at the lodge. Spa treatments or optional activities. Afternoon transfer back to Nairobi.",
        highlights: [
          "Spa treatments",
          "Optional activities",
          "Lunch at lodge",
          "Transfer to Nairobi",
        ],
      },
    ],
    pricing: [
      {
        name: "Comfort",
        price: 900,
        description: "Cozy lodge with mountain views",
        includes: [
          "Mountain lodge",
          "All meals",
          "Equator visit",
          "Guided nature walk",
          "Airport transfers",
        ],
      },
      {
        name: "Luxury",
        price: 1800,
        featured: true,
        description: "Premium lodge with full experiences",
        includes: [
          "Luxury mountain lodge",
          "All meals & drinks",
          "Ol Pejeta full day",
          "Guided nature walks",
          "Cultural visits",
          "Spa credit",
          "Airport transfers",
        ],
      },
      {
        name: "Ultra-Luxury",
        price: 2800,
        description: "Exclusive lodge with personalized service",
        includes: [
          "Exclusive mountain lodge",
          "Personal chef",
          "All meals & premium drinks",
          "Private guide",
          "Ol Pejeta private tour",
          "Spa treatments included",
          "Cultural immersion program",
          "Private airport transfers",
        ],
      },
    ],
    testimonial: {
      quote:
        "Nanyuki was the perfect escape. The lodge was stunning, the mountain views breathtaking, and the staff made us feel like family. A truly special place.",
      author: "Emma Rodriguez",
      role: "Wellness Coach",
    },
  },
  {
    id: "zanzibar",
    slug: "zanzibar",
    name: "Zanzibar Island Escape",
    tagline: "Step into history, embrace the spice, and surrender to island paradise.",
    description:
      "Zanzibar, the Spice Island, is a captivating blend of history, culture, and natural beauty. Explore the UNESCO World Heritage Stone Town, relax on pristine beaches, and experience the rich heritage of this legendary island destination.",
    heroImage:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663443948049/CxdDMGsa3Pr7Yyr2abi8Vv/zanzibar-hero-Pvw2J6PWbdHhrrgrnXVaWN.png",
    heroImageCompressed:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663443948049/CxdDMGsa3Pr7Yyr2abi8Vv/zanzibar-hero-buhNGZLbw9hLYjKNXDfj9t.webp",
    duration: 5,
    bestTime: "June - October, December - February",
    difficulty: "Easy",
    groupSize: "2-12 people",
    highlights: [
      "Stone Town UNESCO heritage",
      "Spice plantation tours",
      "Beach relaxation",
      "Snorkeling and diving",
      "Local markets and cuisine",
      "Sunset dhow cruises",
    ],
    whatToExpect:
      "Days exploring narrow winding streets of Stone Town, visiting spice plantations, and relaxing on beautiful beaches. Evenings feature fresh seafood, local music, and sunset dhow cruises. A perfect blend of culture, nature, and relaxation.",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Stone Town Exploration",
        description:
          "Arrive in Zanzibar. Settle into your beachfront resort. Afternoon walking tour of UNESCO World Heritage Stone Town with its historic architecture and bustling markets.",
        highlights: [
          "Airport transfer",
          "Resort check-in",
          "Stone Town walking tour",
          "Local market visit",
          "Sunset dinner",
        ],
      },
      {
        day: 2,
        title: "Spice Plantation & Local Culture",
        description:
          "Full day spice plantation tour. Learn about cloves, nutmeg, and other spices that made Zanzibar legendary. Visit local villages and interact with communities.",
        highlights: [
          "Spice plantation tour",
          "Spice tasting",
          "Village visits",
          "Local lunch",
          "Cultural interactions",
        ],
      },
      {
        day: 3,
        title: "Beach Day & Snorkeling",
        description:
          "Relax on pristine beaches. Afternoon snorkeling in vibrant coral gardens. Evening sunset dhow cruise with cocktails.",
        highlights: [
          "Beach relaxation",
          "Snorkeling adventure",
          "Coral reef exploration",
          "Sunset dhow cruise",
          "Beach dinner",
        ],
      },
      {
        day: 4,
        title: "Island Adventure",
        description:
          "Optional: Pemba Island day trip for diving, or relaxation day at the resort with spa treatments and water sports.",
        highlights: [
          "Pemba Island (optional)",
          "Diving or relaxation",
          "Spa treatments",
          "Water sports",
          "Evening entertainment",
        ],
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Final morning at the beach. Transfer to airport for your journey home with memories of island magic.",
        highlights: [
          "Final beach time",
          "Airport transfer",
          "Departure",
        ],
      },
    ],
    pricing: [
      {
        name: "Comfort",
        price: 1100,
        description: "3-star beachfront resort with essentials",
        includes: [
          "3-star beachfront resort",
          "Daily breakfast",
          "Stone Town tour",
          "Spice plantation tour",
          "Airport transfers",
        ],
      },
      {
        name: "Luxury",
        price: 2100,
        featured: true,
        description: "5-star resort with premium experiences",
        includes: [
          "5-star beachfront resort",
          "All meals included",
          "Stone Town private tour",
          "Spice plantation tour",
          "Snorkeling & dhow cruise",
          "Spa credit",
          "Airport transfers",
        ],
      },
      {
        name: "Ultra-Luxury",
        price: 3500,
        description: "Private villa with personalized service",
        includes: [
          "Private beachfront villa",
          "Personal chef",
          "All meals & drinks",
          "Private guide",
          "Spice plantation private tour",
          "Snorkeling & diving included",
          "Sunset dhow cruise",
          "Spa treatments included",
          "Private airport transfers",
        ],
      },
    ],
    testimonial: {
      quote:
        "Zanzibar captured my heart. The Stone Town is magical, the beaches are pristine, and the spice plantations were fascinating. I'm already planning my return visit.",
      author: "Michael Thompson",
      role: "Travel Writer",
    },
  },
];

export const getDestinationBySlug = (slug: string): Destination | undefined => {
  return destinations.find((d) => d.slug === slug);
};

export const getFeaturedDestinations = (): Destination[] => {
  return destinations.slice(0, 3);
};
