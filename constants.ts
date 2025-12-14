import { Property, Review } from './types';

// Asset URLs from User Uploads
export const LOGO_URL = "https://fkousziwzbnkdkfdphid.supabase.co/storage/v1/object/public/attachments/08d51139-4d6d-4958-86d4-041496666e85";

// Organized images into specific properties based on visual context
export const PROPERTIES: Property[] = [
  {
    id: 1,
    name: "The Royal Canal Estate",
    location: "Cape Coral, Florida",
    description: "Experience waterfront luxury in this sprawling estate featuring a private dock, expansive pool lanai, and breathtaking aerial views of the Florida waterways.",
    image: "https://fkousziwzbnkdkfdphid.supabase.co/storage/v1/object/public/attachments/2b7617b1-e24c-4235-8664-884b2c159846",
    price: "$450 / night",
    features: ["Waterfront", "Private Pool", "4 Bedrooms", "Boat Dock"]
  },
  {
    id: 2,
    name: "Azure Modern Suite",
    location: "Miami, Florida",
    description: "A contemporary masterpiece with striking blue accent walls, high-end furniture, and an open-concept design perfect for the modern traveler.",
    image: "https://fkousziwzbnkdkfdphid.supabase.co/storage/v1/object/public/attachments/a2777421-4d10-4e31-8f3b-e0f3164a66a3",
    price: "$320 / night",
    features: ["Designer Interior", "King Suite", "Smart Home", "Central Location"]
  },
  {
    id: 3,
    name: "Palm View Retreat",
    location: "Fort Lauderdale, Florida",
    description: "Relax in a tropical paradise. This home offers a serene backyard oasis, screened-in patio, and lush landscaping for ultimate privacy.",
    image: "https://fkousziwzbnkdkfdphid.supabase.co/storage/v1/object/public/attachments/8d504516-7d0b-4e1b-ad89-2917034b22c6",
    price: "$280 / night",
    features: ["Tropical Garden", "Screened Patio", "Family Friendly", "BBQ Grill"]
  },
  {
    id: 4,
    name: "The Blue Horizon Villa",
    location: "Tampa Bay, Florida",
    description: "Elegant architecture meets modern comfort. Enjoy spacious living areas, a gourmet kitchen, and a master suite designed for pure relaxation.",
    image: "https://fkousziwzbnkdkfdphid.supabase.co/storage/v1/object/public/attachments/53f7f023-ec52-4752-9b2e-0a068615b14c",
    price: "$380 / night",
    features: ["Gourmet Kitchen", "Luxury Bath", "Workspace", "Fast Wi-Fi"]
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    location: "New York, NY",
    rating: 5,
    text: "Absolutely stunning property! The attention to detail was incredible. It felt like a 5-star hotel but with the privacy of a home. Will definitely book again.",
    date: "October 2023"
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "San Francisco, CA",
    rating: 5,
    text: "Camara Enterprise exceeded our expectations. The check-in was seamless, the house was spotless, and the pool area was pure heaven.",
    date: "September 2023"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    location: "Austin, TX",
    rating: 5,
    text: "The interior design is breathtaking. You can tell they really care about the guest experience. Highly recommended for family vacations.",
    date: "August 2023"
  }
];

// Placeholder for hero video (High quality luxury travel/home vibe)
export const HERO_VIDEO_URL = "https://player.vimeo.com/external/371842884.sd.mp4?s=d4420e159146199321e102cb5706599db3d4928d&profile_id=164&oauth2_token_id=57447761";
