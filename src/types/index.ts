export interface Dish {
  id: string;
  name: string;
  malayalamName?: string;
  category: 'starters' | 'biryani' | 'seafood' | 'tandoori' | 'curries' | 'breads' | 'desserts' | 'beverages';
  description: string;
  price: number;
  image: string;
  featured?: boolean;
  chefSpecial?: boolean;
  spicyLevel?: number;
  dietary: ('100% Halal' | 'Vegetarian' | 'Chef Special' | 'Gluten-Free' | 'Jain Friendly' | 'Kids Friendly')[];
  pairing?: string;
  origin?: string;
  calories?: number;
  prepTime?: string;
  ingredients: string[];
  course?: 'Starter / Appetizer' | 'Main Dastarkhwan' | 'Bread & Rice' | 'Royal Dessert' | 'Signature Refreshment';
}

export interface LocationInfo {
  id: string;
  city: string;
  name: string;
  address: string;
  phone: string;
  phoneAlt: string;
  email: string;
  hours: {
    lunch: string;
    dinner: string;
    majlis?: string;
  };
  ratingStars: number;
  image: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  headChef: string;
  valetAvailable: boolean;
  dressCode: string;
  features: string[];
}

export interface Review {
  id: string;
  author: string;
  role: string;
  rating: number;
  comment: string;
  source: 'Kerala Food Critics' | 'Times Food & Nightlife' | 'Google 4.9★' | 'VIP Family Patron' | 'Malabar Foodies Guild';
  date: string;
  avatar: string;
  dishRecommended: string;
}

export interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  url: string;
}

export interface ReservationFormData {
  locationId: string;
  date: string;
  timeSlot: string;
  guests: number;
  seatingZone: 'family-ac' | 'royal-majlis' | 'main-dining' | 'rooftop-breeze';
  occasion?: string;
  dietaryNotes?: string;
  guestName: string;
  email: string;
  phone: string;
  welcomeDrinkAddon: boolean;
}

export interface CartItem {
  dish: Dish;
  quantity: number;
  specialInstructions?: string;
}
