export interface Dish {
  id: string;
  name: string;
  frenchName?: string;
  category: 'starters' | 'steaks' | 'seafood' | 'pastas' | 'plant' | 'desserts' | 'wines' | 'cocktails';
  description: string;
  price: number;
  image: string;
  featured?: boolean;
  chefSpecial?: boolean;
  spicyLevel?: number;
  dietary: ('Gluten-Free' | 'Vegan' | 'Vegetarian' | 'Halal' | 'Dairy-Free' | 'Nut-Free' | 'Chef Selection')[];
  pairing?: string;
  origin?: string;
  calories?: number;
  prepTime?: string;
  ingredients: string[];
  course?: 'Amuse-Bouche' | 'Entrée' | 'Main Course' | 'Intermezzo' | 'Dessert' | 'Digestif';
}

export interface LocationInfo {
  id: string;
  city: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: {
    lunch: string;
    dinner: string;
    brunch?: string;
  };
  michelinStars: number;
  image: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  sommelier: string;
  headChef: string;
  valetAvailable: boolean;
  dressCode: string;
}

export interface Review {
  id: string;
  author: string;
  role: string;
  rating: number;
  comment: string;
  source: 'Michelin Guide' | 'The New York Times' | 'World 50 Best' | 'Forbes Travel' | 'VIP Guest';
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
  seatingZone: 'main-dining' | 'chef-counter' | 'wine-vault' | 'skyline-terrace';
  occasion?: string;
  dietaryNotes?: string;
  guestName: string;
  email: string;
  phone: string;
  winePairingAddon: boolean;
}

export interface CartItem {
  dish: Dish;
  quantity: number;
  specialInstructions?: string;
}
