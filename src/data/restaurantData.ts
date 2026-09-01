import { Dish, LocationInfo, Review, InstagramPost } from '@/types';

export const LOCATIONS_DATA: LocationInfo[] = [
  {
    id: 'malappuram-flagship',
    city: 'Malappuram',
    name: 'Delicia Malappuram Flagship',
    address: 'Near Civil Station, Calicut Road, Malappuram, Kerala 676505',
    phone: '+91 85930 00014',
    phoneAlt: '+91 85930 00015',
    email: 'malappuram@deliciarestaurant.com',
    hours: {
      lunch: 'Mon - Sun: 11:30 AM – 4:00 PM',
      dinner: 'Mon - Sun: 6:30 PM – 11:30 PM',
      majlis: 'Special Night Service till 12:30 AM'
    },
    ratingStars: 5,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85',
    coordinates: { lat: 11.0732, lng: 76.0740 },
    headChef: 'Ustad Chef Moideen & Chef Raghavan',
    valetAvailable: true,
    dressCode: 'Smart Casual & Traditional Family Elegance',
    features: ['Grand AC Banquet Hall', 'Private Family Cabins', 'Live Tandoor Counter', 'Valet Parking']
  },
  {
    id: 'valluvambram-junction',
    city: 'Valluvambram',
    name: 'Delicia Valluvambram Junction',
    address: 'Calicut - Manjeri Highway Bypass Junction, Valluvambram, Kerala 676517',
    phone: '+91 85930 00024',
    phoneAlt: '+91 85930 00034',
    email: 'valluvambram@deliciarestaurant.com',
    hours: {
      lunch: 'Mon - Sun: 11:00 AM – 4:00 PM',
      dinner: 'Mon - Sun: 6:00 PM – 11:45 PM',
      majlis: 'Drive-in & Takeaway Counter till 1:00 AM'
    },
    ratingStars: 5,
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=85',
    coordinates: { lat: 11.1420, lng: 75.9860 },
    headChef: 'Chef Althaf Hussain & Master Biryani Brigade',
    valetAvailable: true,
    dressCode: 'Casual & Family Friendly',
    features: ['Spacious Highway Parking', 'Arabic Majlis Seating', 'Live Seafood Display', 'Express Takeout Counter']
  }
];

export const SIGNATURE_DISHES: Dish[] = [
  {
    id: 'malabar-dum-biryani',
    name: 'Royal Malabar Kaima Dum Biryani',
    malayalamName: 'തനത് മലബാർ നെയ്ച്ചോർ ദം ബിരിയാണി',
    category: 'biryani',
    description: 'Slow-cooked fragrant Jeerakasala (Kaima) rice layered with tender mutton steeped in Malabar spices, golden caramelized shallots, cashews, and raisins, served with date pickle and coconut chammanthi.',
    price: 360,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=85',
    featured: true,
    chefSpecial: true,
    dietary: ['100% Halal', 'Chef Special'],
    pairing: 'Fresh Sulaimani with Mint & Saffron Kulukki',
    origin: 'Malabar Heritage, Kerala',
    calories: 680,
    prepTime: '20 min',
    ingredients: ['Kaima Rice', 'Tender Kerala Mutton', 'Pure Ghee', 'Malabar Garam Masala', 'Golden Fried Onions', 'Cashews & Raisins'],
    course: 'Main Dastarkhwan'
  },
  {
    id: 'raan-e-delicia',
    name: 'Shahi Raan-e-Delicia (Slow Smoked Leg of Lamb)',
    malayalamName: 'ഷാഹി റാൻ-ഇ-ഡെലിഷ്യ സ്പെഷ്യൽ',
    category: 'tandoori',
    description: 'Whole leg of baby lamb marinated for 48 hours in royal saffron, roasted spices, and Kashmiri chili, slow-braised to melting tenderness in a charcoal clay oven and garnished with 24k silver leaf.',
    price: 1850,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85',
    featured: true,
    chefSpecial: true,
    dietary: ['100% Halal', 'Chef Special', 'Gluten-Free'],
    pairing: 'Kashmiri Royal Saffron Qahwa',
    origin: 'Royal Mughal & Malabar Court',
    calories: 1250,
    prepTime: '35 min',
    ingredients: ['Whole Baby Lamb Leg', 'Kashmiri Saffron', 'Hung Curd', 'Smoked Ghee', 'Edible Chandi Vark'],
    course: 'Main Dastarkhwan'
  },
  {
    id: 'kerala-tiger-prawn-roast',
    name: 'Beypore Jumbo Tiger Prawns Pollichathu',
    malayalamName: 'ബേപ്പൂർ കരിമീൻ / കൊഞ്ച് പൊള്ളിച്ചത്',
    category: 'seafood',
    description: 'Catch-of-the-day jumbo Arabian Sea tiger prawns smothered in shallot-kokum masala, wrapped in fresh banana leaves and roasted over a coconut husk grill.',
    price: 780,
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=1200&q=85',
    featured: true,
    dietary: ['100% Halal', 'Gluten-Free', 'Chef Special'],
    pairing: 'Fresh Tender Coconut Water with Mint',
    origin: 'Malabar Coastal Arabian Sea',
    calories: 420,
    prepTime: '25 min',
    ingredients: ['Fresh Sea Tiger Prawns', 'Kudampuli (Kokum)', 'Shallots Paste', 'Curry Leaves', 'Banana Leaf Wrap'],
    course: 'Main Dastarkhwan'
  },
  {
    id: 'tandoori-platter-grand',
    name: 'Delicia Imperial Tandoori Charcoal Platter',
    malayalamName: 'ഡെലിഷ്യ റോയൽ തന്തൂരി പ്ലാറ്റർ',
    category: 'tandoori',
    description: 'An opulent feast featuring Murgh Malai Tikka, Kasturi Boti Kebab, Charcoal Afgani Tangdi, and Fish Hariyali Kebabs served on a sizzling hot stone with mint-coriander labneh.',
    price: 980,
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=1200&q=85',
    featured: true,
    dietary: ['100% Halal', 'Chef Special'],
    pairing: 'Pineapple Mint Kulukki Sharbath',
    origin: 'North-West Frontier & Kerala',
    calories: 890,
    prepTime: '25 min',
    ingredients: ['Malai Chicken', 'Mutton Boti', 'Fresh Pomfret', 'Creamy Marinade', 'Mint Labneh'],
    course: 'Starter / Appetizer'
  },
  {
    id: 'nalli-nihari-parotta',
    name: 'Lucknowi Nalli Nihari with Flaky Malabar Parotta',
    malayalamName: 'നല്ലി നിഹാരിയും നാടൻ പൊറോട്ടയും',
    category: 'curries',
    description: 'Overnight simmered lamb shanks in an aromatic 32-spice marrow broth, served with piping hot, hand-layered flaky Malabar parottas and fresh ginger juliennes.',
    price: 520,
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1200&q=85',
    featured: true,
    dietary: ['100% Halal', 'Chef Special'],
    pairing: 'Spiced Buttermilk with Curry Leaves',
    origin: 'Awadhi & Kerala Fusion',
    calories: 740,
    prepTime: '15 min',
    ingredients: ['Lamb Shank Marrow', 'Potli Masala', 'Ghee Roasted Onions', 'Flaky Parotta'],
    course: 'Main Dastarkhwan'
  },
  {
    id: 'elaneer-payasam-gold',
    name: 'Royal 24K Gold Elaneer Payasam & Shahi Tukda',
    malayalamName: 'തനത് ഇളനീർ പായസവും ഷാഹി തുക്ഡയും',
    category: 'desserts',
    description: 'Fresh tender coconut pulp blended with condensed coconut milk, green cardamom, roasted cashews, served alongside saffron-soaked crisp brioche Shahi Tukda with edible 24k gold leaf.',
    price: 240,
    image: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=1200&q=85',
    featured: true,
    dietary: ['Vegetarian', 'Kids Friendly'],
    pairing: 'Rose Petal Lassi with Pistachio',
    origin: 'Malappuram Sweet Tradition',
    calories: 340,
    prepTime: '10 min',
    ingredients: ['Fresh Tender Coconut Flesh', 'Cardamom Ghee', 'Alphonso Mango Nectar', 'Saffron Milk', '24K Gold Flake'],
    course: 'Royal Dessert'
  },
  {
    id: 'alfaham-kanthari',
    name: 'Charcoal Kanthari (Bird’s Eye Chili) Al Faham',
    malayalamName: 'കാന്താരി അൽഫഹാം ചിക്കൻ',
    category: 'tandoori',
    description: 'Juicy whole chicken infused with fiery Wayanad Kanthari chilies, raw garlic, and Mediterranean herbs, grilled over natural coconut charcoal with homemade garlic toum and Kuboos.',
    price: 490,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=85',
    featured: false,
    dietary: ['100% Halal', 'Gluten-Free'],
    pairing: 'Iced Passionfruit Mojito',
    origin: 'Arabian & Kerala Malabar',
    calories: 590,
    prepTime: '25 min',
    ingredients: ['Whole Spring Chicken', 'Wayanad Kanthari Green Chili', 'Garlic Toum', 'Kuboos', 'Charcoal Smoke'],
    course: 'Main Dastarkhwan'
  },
  {
    id: 'malabar-fish-mango-curry',
    name: 'King Seer Fish (Neymeen) Raw Mango Curry',
    malayalamName: 'നെയ്മീൻ മാങ്ങാക്കറി (മീൻ കറി)',
    category: 'curries',
    description: 'Freshly sliced Arabian Sea King Fish simmered in thick first-pressed coconut milk, green mango slices, crushed shallots, and fresh curry leaves.',
    price: 480,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=85',
    featured: false,
    dietary: ['100% Halal', 'Gluten-Free'],
    pairing: 'Steamed Appam or Pathiri',
    origin: 'Kozhikode & Malappuram Coast',
    calories: 450,
    prepTime: '20 min',
    ingredients: ['King Seer Fish (Neymeen)', 'Fresh Coconut Milk', 'Raw Green Mango', 'Fenugreek', 'Curry Leaves'],
    course: 'Main Dastarkhwan'
  },
  {
    id: 'paneer-tikka-lababdar',
    name: 'Kashmiri Saffron Paneer Tikka Lababdar',
    malayalamName: 'പനീർ ടിക്ക ലബാബ്ദാർ',
    category: 'curries',
    description: 'Farm-fresh cottage cheese cubes charred in tandoor, folded in a rich tomato, cashew, and saffron gravy with fresh cream and butter naan.',
    price: 360,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=85',
    featured: false,
    dietary: ['Vegetarian', 'Jain Friendly'],
    pairing: 'Fresh Badam Milk with Kesar',
    origin: 'North Indian Royal Kitchens',
    calories: 480,
    prepTime: '18 min',
    ingredients: ['Fresh Paneer', 'Cashew Cream', 'Kashmiri Saffron', 'Kasuri Methi', 'Butter Gravy'],
    course: 'Main Dastarkhwan'
  },
  {
    id: 'blue-lagoon-kulukki',
    name: 'The Delicia Signature Saffron & Mint Kulukki',
    malayalamName: 'ഡെലിഷ്യ സ്പെഷ്യൽ കുലുക്കി സർബത്ത്',
    category: 'beverages',
    description: 'Handcrafted Malappuram style shaken mocktail with Sabja seeds, green chili slit, mint crush, crushed ice, and royal saffron drizzle.',
    price: 140,
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=85',
    featured: false,
    dietary: ['Vegetarian', 'Kids Friendly'],
    pairing: 'Perfect palate cleanser with spicy Biryani and Al Faham',
    origin: 'Kerala Malabar Street & Luxury Bar',
    calories: 110,
    prepTime: '5 min',
    ingredients: ['Sweet Basil (Sabja) Seeds', 'Green Chili', 'Lemon Nectar', 'Kashmiri Saffron', 'Mint Leaves'],
    course: 'Signature Refreshment'
  }
];

export const CHEF_TASTING_MENU = [
  {
    courseNumber: '01',
    courseName: 'Welcome Refreshment',
    title: 'Saffron Badam Qahwa & Stuffed Medjool Dates',
    description: 'Warm Kashmiri saffron tea infused with crushed cardamom, almonds, and royal dates.',
    pairing: 'Cardamom & Rose Mist'
  },
  {
    courseNumber: '02',
    courseName: 'Starters Service',
    title: 'Murgh Malai Kebab & Beypore Fish Cutlet',
    description: 'Velvety cream chicken kebabs with crisp Kozhikode style seer fish patties.',
    pairing: 'Mint Coriander Labneh Dip'
  },
  {
    courseNumber: '03',
    courseName: 'Royal Seafood',
    title: 'Banana Leaf Roasted Tiger Prawns (Pollichathu)',
    description: 'Charcoal grilled jumbo prawns smothered in kokum shallot masala.',
    pairing: 'Fresh Tender Coconut Water'
  },
  {
    courseNumber: '04',
    courseName: 'Tandoori Sizzle',
    title: 'Charcoal Kanthari Al Faham with Fluffy Kuboos',
    description: 'Smoked juicy chicken infused with fiery Wayanad green chilies and garlic toum.',
    pairing: 'Iced Passionfruit Sharbath'
  },
  {
    courseNumber: '05',
    courseName: 'Grand Dastarkhwan',
    title: 'Royal Malabar Kaima Mutton Dum Biryani',
    description: 'Slow cooked tender mutton layered with Jeerakasala rice, served with date chutney & raita.',
    pairing: 'Traditional Malabar Sulaimani'
  },
  {
    courseNumber: '06',
    courseName: 'Royal Breads & Gravy',
    title: 'Flaky Kerala Parotta with Nalli Nihari Gravy',
    description: '32-spice lamb shank gravy with hot flaky coin parottas.',
    pairing: 'Spiced Sambharam Buttermilk'
  },
  {
    courseNumber: '07',
    courseName: 'Dessert Grand Finale',
    title: '24K Gold Elaneer Payasam & Warm Shahi Tukda',
    description: 'Tender coconut sweet soup with saffron brioche and pistachio rabri.',
    pairing: 'Kashmiri Saffron Tea'
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-1',
    author: 'Chef Pillai (Renowned Culinary Icon)',
    role: 'Celebrity Master Chef',
    rating: 5,
    comment: 'Delicia brings the true royal heritage of Malabar and North Indian flavors onto a single grand canvas. The Kaima Mutton Dum Biryani and the Kanthari Al Faham are unmatched anywhere in Kerala.',
    source: 'Kerala Food Critics',
    date: '2024',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    dishRecommended: 'Royal Malabar Kaima Dum Biryani'
  },
  {
    id: 'rev-2',
    author: 'Adv. Faisal Rahman & Family',
    role: 'Regular Patron - Malappuram',
    rating: 5,
    comment: 'The private AC family cabins in the Malappuram branch are so spacious and comfortable. Our children love the Tandoori platter and the Elaneer Payasam. Outstanding hospitality by the staff!',
    source: 'Google 4.9★',
    date: '2024',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    dishRecommended: 'Delicia Imperial Tandoori Platter & Parotta'
  },
  {
    id: 'rev-3',
    author: 'Dr. Anoop Kurian & Team',
    role: 'Private Event Host',
    rating: 5,
    comment: 'We booked Delicia Catering for our medical conference gala in Valluvambram with 350 guests. The live Dum Biryani dhabba and mocktail counters were phenomenal. Every guest was praising the food.',
    source: 'VIP Family Patron',
    date: '2024',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    dishRecommended: 'Live Wedding & Gala Dastarkhwan'
  },
  {
    id: 'rev-4',
    author: 'Times Food Awards Kerala',
    role: 'Food & Hospitality Jury',
    rating: 5,
    comment: 'Voted Best Luxury Family Restaurant & Halal Dining in Malappuram district. Impeccable hygiene, authentic coal-fired tandoor, and royal ambiance.',
    source: 'Times Food & Nightlife',
    date: '2024',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    dishRecommended: 'Shahi Raan-e-Delicia'
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig-1',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    caption: 'Opening the pot of freshly dum-cooked Malabar Biryani at our Malappuram kitchen! 🍚✨ #DeliciaMalappuram #DumBiryani',
    likes: 8490,
    comments: 245,
    url: '#'
  },
  {
    id: 'ig-2',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    caption: 'Live charcoal sizzle: Kanthari Al Faham & hot butter kuboos at Valluvambram branch. 🔥 #Valluvambram #AlFaham',
    likes: 6210,
    comments: 184,
    url: '#'
  },
  {
    id: 'ig-3',
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80',
    caption: 'Fresh catch Tiger Prawns Pollichathu in banana leaf wrap. Authentic coastal heaven. 🦐🍃 #MalabarSeafood',
    likes: 7120,
    comments: 198,
    url: '#'
  },
  {
    id: 'ig-4',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    caption: 'Grand dining hall set for a royal wedding dinner at Delicia Malappuram. ✨ #FamilyDining #MalappuramFood',
    likes: 5430,
    comments: 112,
    url: '#'
  },
  {
    id: 'ig-5',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    caption: 'Slow smoked Raan-e-Delicia with saffron rice. The crown jewel of our menu. 👑 #RoyalDastarkhwan',
    likes: 9340,
    comments: 310,
    url: '#'
  },
  {
    id: 'ig-6',
    image: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80',
    caption: 'Tender coconut Elaneer Payasam with 24k gold leaf touch. The perfect sweet conclusion! 🥥 #ElaneerPayasam',
    likes: 6890,
    comments: 176,
    url: '#'
  }
];

export const CATERING_PACKAGES = [
  {
    id: 'royal-nikah-gala',
    name: 'The Grand Malabar Nikah & Wedding Feast',
    type: 'Royal Weddings & Banquets (100 - 2,500 Guests)',
    pricePerGuest: 650,
    description: 'Full royal dastarkhwan service, live Dum Biryani handi, live charcoal Al Faham and Shawarma counters, fresh seafood pollichathu, assortment of Malabar sweets, and dedicated service captains.',
    includes: [
      'Authentic Kaima Mutton / Chicken Dum Biryani Live Pots',
      'Live Charcoal Al Faham & Tandoori Kebab Station',
      'Banana Leaf Wrapped Fish / Prawns Pollichathu',
      'Layered Malabar Parotta & Wheat Pathiri with Stew',
      'Royal Elaneer Payasam, Shahi Tukda & Saffron Tea Counter',
      'Complete Crockery, Table Setup & Uniformed Service Staff'
    ],
    popular: true
  },
  {
    id: 'majlis-celebration',
    name: 'Family Majlis & Housewarming Banquet',
    type: 'Intimate Family Celebrations (30 - 150 Guests)',
    pricePerGuest: 480,
    description: 'Curated traditional feast featuring Ghee Rice with Nalli Nihari, Tandoori Platters, Malabar Fish Curry, and custom dessert bar delivered hot at your residence or venue.',
    includes: [
      'Fragrant Malabar Ghee Rice & Jeera Pulao',
      'Special Nalli Nihari or Butter Chicken Curry',
      'Mixed Tandoori Platter & Hot Kuboos',
      'Kulukki Sharbath & Tender Coconut Drink',
      'Full delivery, thermal buffet warmers & setup'
    ],
    popular: false
  },
  {
    id: 'corporate-summit',
    name: 'Corporate Gala & Luxury Buffet',
    type: 'Business Meets & Executive Dinners (50 - 500 Guests)',
    pricePerGuest: 550,
    description: 'Multi-cuisine executive spread combining Mughlai, Malabar, Arabian, and Continental live counters with professional buffet presentation.',
    includes: [
      'Continental Starters & Live Pasta / Kebab Bar',
      'Executive Biryani & Fried Rice Counter',
      'Paneer Tikka & Exotic Veg Curries',
      'Artisanal Desserts & Saffron Qahwa Lounge',
      'Event Coordinator & Service Crew'
    ],
    popular: false
  }
];

export const AWARDS = [
  { title: 'Best Luxury Family Restaurant', org: 'Kerala Culinary Awards 2024', icon: '⭐' },
  { title: 'Top 10 Dum Biryani of Malabar', org: 'Malabar Foodies Guild', icon: '🏆' },
  { title: '100% Halal & Hygiene Excellence', org: 'Kerala Health & Food Safety', icon: '🛡️' },
  { title: '4.9 Star Rating (12,000+ Reviews)', org: 'Google Verified Dining', icon: '💎' },
  { title: 'Best Wedding & Event Caterer', org: 'Malappuram Hospitality Forum', icon: '👑' },
];
