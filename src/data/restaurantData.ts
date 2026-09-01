import { Dish, LocationInfo, Review, InstagramPost } from '@/types';

export const SIGNATURE_DISHES: Dish[] = [
  {
    id: 'wagyu-a5-rossini',
    name: 'Miyazaki A5 Wagyu Tournedos Rossini',
    frenchName: 'Tournedos Rossini au Wagyu A5 & Foie Gras Poêlé',
    category: 'steaks',
    description: 'Ultra-marbled Japanese A5 Miyazaki beef tenderloin, seared Rougié Hudson Valley foie gras, fresh Périgord black winter truffle shavings, and 48-hour Madeira reduction.',
    price: 185,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85',
    featured: true,
    chefSpecial: true,
    dietary: ['Chef Selection', 'Gluten-Free'],
    pairing: '2015 Château Margaux Premier Grand Cru Classé',
    origin: 'Miyazaki Prefecture, Japan & Périgord, France',
    calories: 780,
    prepTime: '25 min',
    ingredients: ['A5 Miyazaki Tenderloin', 'Hudson Valley Foie Gras', 'Fresh Black Truffle', 'Brioche Melba', 'Aged Madeira Jus'],
    course: 'Main Course'
  },
  {
    id: 'ossetra-caviar-tasting',
    name: 'Imperial Royal Ossetra Caviar Service',
    frenchName: 'Service de Caviar Impérial & Blinis Tièdes',
    category: 'starters',
    description: '50g of Tsar Imperial Royal Ossetra Caviar presented on crystal ice carved bowl, paired with buckwheat blinis, organic egg yolk emulsion, crème fraîche normande, and shallot pearls.',
    price: 210,
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=85',
    featured: true,
    chefSpecial: true,
    dietary: ['Chef Selection', 'Gluten-Free'],
    pairing: '2012 Dom Pérignon Vintage Brut Champagne',
    origin: 'Caspian Sea Sturgeon Preserve',
    calories: 320,
    prepTime: '15 min',
    ingredients: ['Royal Ossetra Caviar 50g', 'Normandy Crème Fraîche', 'Organic Egg Caviar', 'Shallot Pearls', 'Warm Blinis'],
    course: 'Amuse-Bouche'
  },
  {
    id: 'brittany-blue-lobster',
    name: 'Charcoal-Roasted Brittany Blue Lobster',
    frenchName: 'Homard Bleu de Bretagne Rôti aux Épices Douces',
    category: 'seafood',
    description: 'Whole wild Brittany blue lobster grilled over binchotan charcoal, glazed in yuzu coral butter, accompanied by heirloom baby fennel confit and saffron bisque reduction.',
    price: 165,
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=1200&q=85',
    featured: true,
    dietary: ['Gluten-Free', 'Chef Selection'],
    pairing: '2018 Domaine Leflaive Puligny-Montrachet',
    origin: 'Brittany Coastline, France',
    calories: 540,
    prepTime: '22 min',
    ingredients: ['Live Brittany Blue Lobster', 'Yuzu Kosho Butter', 'Saffron Bisque', 'Braised Baby Fennel', 'Micro Sea Greens'],
    course: 'Main Course'
  },
  {
    id: 'white-truffle-tajarin',
    name: 'Alba White Truffle Handcut Tajarin',
    frenchName: 'Tajarin Faits Main à la Truffe Blanche d\'Alba',
    category: 'pastas',
    description: '36-egg-yolk delicate Piedmontese ribbons tossed in cultured mountain butter, 30-month Parmigiano-Reggiano Vacche Rosse, and generous table-shaved Alba white truffles.',
    price: 135,
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=85',
    featured: true,
    dietary: ['Vegetarian', 'Chef Selection'],
    pairing: '2016 Gaja Barbaresco DOCG',
    origin: 'Alba, Piedmont, Italy',
    calories: 620,
    prepTime: '18 min',
    ingredients: ['36-Yolk Egg Pasta', 'Beurre de Baratte', 'Vacche Rosse Parmigiano', 'Fresh Alba White Truffle'],
    course: 'Entrée'
  },
  {
    id: 'golden-sphere-chocolate',
    name: '24K Golden Sphere Grand Cru Valrhona',
    frenchName: 'Sphère Céleste au Chocolat Guanaja 70% & Or 24K',
    category: 'desserts',
    description: 'Handcrafted 24-karat gold leaf dome concealing Guanaja 70% dark chocolate mousse, Madagascar vanilla bean sponge, hazelnut praline crunch, melted tableside with hot espresso caramel.',
    price: 48,
    image: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=1200&q=85',
    featured: true,
    dietary: ['Vegetarian'],
    pairing: 'Château d\'Yquem Premier Cru Supérieur Sauternes 2009',
    origin: 'Valrhona Grand Cru, France',
    calories: 490,
    prepTime: '12 min',
    ingredients: ['Valrhona 70% Guanaja', 'Edible 24K Gold Leaf', 'Madagascar Bourbon Vanilla', 'Piedmont Hazelnuts', 'Salted Espresso Caramel'],
    course: 'Dessert'
  },
  {
    id: 'hokkaido-scallop-carpaccio',
    name: 'Hokkaido Scallop Carpaccio & Finger Lime',
    frenchName: 'Carpaccio de Saint-Jacques de Hokkaido & Caviar Citron',
    category: 'starters',
    description: 'Diver-caught Hokkaido scallops sliced translucent, dressed with white ponzu gelee, Australian finger lime caviar pearls, shiso blossoms, and cold-pressed olive oil.',
    price: 46,
    image: 'https://images.unsplash.com/photo-1539136788836-5699e78bfc75?auto=format&fit=crop&w=1200&q=85',
    featured: false,
    dietary: ['Gluten-Free', 'Dairy-Free'],
    pairing: '2021 Sancerre Domaine Vacheron',
    origin: 'Hokkaido, Japan',
    calories: 240,
    prepTime: '10 min',
    ingredients: ['Hokkaido Scallops', 'White Ponzu Gelee', 'Finger Lime Pearls', 'Purple Shiso', 'Lucini Extra Virgin Oil'],
    course: 'Entrée'
  },
  {
    id: 'morel-artichoke-barigoule',
    name: 'Braised Morel Mushrooms & Baby Artichoke Barigoule',
    frenchName: 'Barigoule d\'Artichauts Poivrade & Morilles Farcies',
    category: 'plant',
    description: 'Stuffed French wild morels with chestnut puree, baby poivrade artichokes braised in thyme-scented white wine broth, toasted pine nuts, and parsley emulsion.',
    price: 58,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=85',
    featured: false,
    dietary: ['Vegan', 'Gluten-Free'],
    pairing: '2020 Meursault Domaine des Comtes Lafon',
    origin: 'Provence, France',
    calories: 380,
    prepTime: '20 min',
    ingredients: ['Fresh Spring Morels', 'Poivrade Baby Artichokes', 'Chestnut Cream', 'Chablis Wine Broth', 'Wild Herbs'],
    course: 'Main Course'
  },
  {
    id: 'smoked-black-cod',
    name: 'Kyoto Miso Smoked Alaskan Black Cod',
    frenchName: 'Cabillaud Noir d\'Alaska Fumé au Miso Blanc de Kyoto',
    category: 'seafood',
    description: 'Sustainably wild-caught black cod marinated for 72 hours in Saikyo sweet white miso, charred over cedar wood, served with pickled ginger shoot and dashi foam.',
    price: 92,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1200&q=85',
    featured: false,
    dietary: ['Gluten-Free', 'Dairy-Free', 'Chef Selection'],
    pairing: 'Dassai Beyond Junmai Daiginjo Sake',
    origin: 'Gulf of Alaska',
    calories: 460,
    prepTime: '20 min',
    ingredients: ['Wild Alaskan Black Cod', 'Kyoto Saikyo White Miso', 'Hon-Mirin', 'Pickled Hajikami Ginger', 'Kombu Dashi Foam'],
    course: 'Main Course'
  },
  {
    id: 'dry-aged-tomahawk',
    name: '45-Day Dry Aged Prime Bone-in Tomahawk (38oz)',
    frenchName: 'Tomahawk de Bœuf Prime Affiné 45 Jours',
    category: 'steaks',
    description: 'Center-cut USDA Prime ribeye aged in Himalayan salt chambers for 45 days. Carved tableside with marrow butter, roasted bone marrow boat, and smoked Maldon salt.',
    price: 240,
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=85',
    featured: false,
    dietary: ['Gluten-Free', 'Chef Selection'],
    pairing: '2017 Opus One Napa Valley Red Blend',
    origin: 'Snake River Farms, Idaho',
    calories: 1450,
    prepTime: '35 min',
    ingredients: ['USDA Prime Tomahawk 38oz', 'Roasted Bone Marrow', 'Black Garlic Butter', 'Smoked Maldon Salt', 'Rosemary Brush'],
    course: 'Main Course'
  },
  {
    id: 'smoked-old-fashioned-cocktail',
    name: 'The Delicia 1928 Smoked Old Fashioned',
    frenchName: 'Old Fashioned Fumé au Bois de Chêne & Or',
    category: 'cocktails',
    description: 'Pappy Van Winkle 15yr Bourbon, antique bitters, artisanal Demerara syrup, infused under a cloche with Applewood smoke and sprayed with edible 24k gold mist.',
    price: 38,
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=85',
    featured: false,
    dietary: ['Chef Selection'],
    pairing: 'Pairs sublimely with Wagyu & Dry-Aged Steaks',
    origin: 'Delicia Mixology Lab',
    calories: 180,
    prepTime: '5 min',
    ingredients: ['Reserve Kentucky Bourbon', 'Handcrafted Angostura Bitters', 'Demerara Rock Candy', 'Applewood Smoke', 'Orange Peel Oils'],
    course: 'Digestif'
  }
];

export const CHEF_TASTING_MENU = [
  {
    courseNumber: '01',
    courseName: 'Amuse-Bouche',
    title: 'Imperial Ossetra Pearl & Gold Tartlet',
    description: 'Smoked dashi custard, crispy nori tart, Oscietra caviar, 24k gold flake',
    winePairing: '2014 Pol Roger Sir Winston Churchill Brut'
  },
  {
    courseNumber: '02',
    courseName: 'Premier Service',
    title: 'Hokkaido Sea Urchin & King Crab Royale',
    description: 'Bafun uni, Alaskan king crab, ginger consommé gelée, green apple snow',
    winePairing: '2020 Domaine Leflaive Chevalier-Montrachet Grand Cru'
  },
  {
    courseNumber: '03',
    courseName: 'Pasta Artistry',
    title: 'Aged Duck Agnolotti & Alba Truffle',
    description: 'Confit Moulard duck, brown butter emulsion, toasted hazelnuts, freshly planed white truffle',
    winePairing: '2016 Bruno Giacosa Falletto Barolo'
  },
  {
    courseNumber: '04',
    courseName: 'Poisson',
    title: 'Wild Turbot Cooked on Fig Leaves',
    description: 'Brittany coast turbot, smoked bone jus, seaweed butter, chanterelles',
    winePairing: '2019 Jean-Louis Chave Hermitage Blanc'
  },
  {
    courseNumber: '05',
    courseName: 'Viande Principale',
    title: 'Miyazaki A5 Wagyu Tenderloin & Smoked Marrow',
    description: 'Binchotan seared beef, fermented black garlic emulsion, glazed spring shallots',
    winePairing: '2010 Château Cheval Blanc Premier Grand Cru Classé A'
  },
  {
    courseNumber: '06',
    courseName: 'Prédessert',
    title: 'Yuzu Sorbet & Champagne Espuma',
    description: 'Wild yuzu granita, mint pearls, vintage Champagne foam, crystallized basil',
    winePairing: '2018 Billecart-Salmon Brut Rosé'
  },
  {
    courseNumber: '07',
    courseName: 'Dessert Signature',
    title: 'Smoked Valrhona Chocolate Monolith',
    description: '70% Guanaja ganache, tonka bean gelato, salted smoked caramel, cacao nib tuile',
    winePairing: '1997 Taylor Fladgate Vintage Port'
  }
];

export const LOCATIONS_DATA: LocationInfo[] = [
  {
    id: 'manhattan-flagship',
    city: 'New York',
    name: 'Delicia Manhattan Flagship',
    address: '432 Park Avenue, Midtown Manhattan, NY 10022',
    phone: '+1 (212) 555-8900',
    email: 'reservations.ny@delicia-dining.com',
    hours: {
      lunch: 'Wed - Sun: 12:00 PM – 2:30 PM',
      dinner: 'Mon - Sun: 5:00 PM – 11:30 PM',
      brunch: 'Sat & Sun: 11:00 AM – 3:00 PM'
    },
    michelinStars: 3,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85',
    coordinates: { lat: 40.7618, lng: -73.9715 },
    sommelier: 'Antoine de la Rivière, Master Sommelier',
    headChef: 'Chef Laurent Mercier',
    valetAvailable: true,
    dressCode: 'Formal Elegance (Jackets required for gentlemen, no athletic wear)'
  },
  {
    id: 'beverly-hills',
    city: 'Beverly Hills',
    name: 'Delicia Beverly Hills Villa',
    address: '9876 Wilshire Blvd, Beverly Hills, CA 90210',
    phone: '+1 (310) 555-4321',
    email: 'reservations.bh@delicia-dining.com',
    hours: {
      lunch: 'Thu - Sun: 12:00 PM – 2:30 PM',
      dinner: 'Mon - Sun: 5:30 PM – 11:00 PM',
      brunch: 'Sun: 10:30 AM – 3:00 PM'
    },
    michelinStars: 2,
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=85',
    coordinates: { lat: 34.0664, lng: -118.4116 },
    sommelier: 'Elena Rostova, DipWSET',
    headChef: 'Chef Marcus Vance',
    valetAvailable: true,
    dressCode: 'Smart Chic & Cocktail Attire'
  },
  {
    id: 'mayfair-london',
    city: 'London',
    name: 'Delicia Mayfair Townhouse',
    address: '14 Berkeley Square, Mayfair, London W1J 6BQ',
    phone: '+44 20 7946 0992',
    email: 'reservations.london@delicia-dining.com',
    hours: {
      lunch: 'Tue - Sat: 12:00 PM – 2:45 PM',
      dinner: 'Mon - Sat: 6:00 PM – 11:45 PM'
    },
    michelinStars: 3,
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
    coordinates: { lat: 51.5094, lng: -0.1448 },
    sommelier: 'Lord Charles Montgomery',
    headChef: 'Chef Delphine Rousseau',
    valetAvailable: true,
    dressCode: 'Lounge Suit / Black Tie Welcome'
  },
  {
    id: 'ginza-tokyo',
    city: 'Tokyo',
    name: 'Delicia Ginza Tower',
    address: '6-10-1 Ginza, Chuo City, Tokyo 104-0061',
    phone: '+81 3 5555 8899',
    email: 'reservations.tokyo@delicia-dining.com',
    hours: {
      lunch: 'Wed - Sun: 11:30 AM – 2:00 PM',
      dinner: 'Tue - Sun: 5:30 PM – 11:00 PM'
    },
    michelinStars: 2,
    image: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=85',
    coordinates: { lat: 35.6698, lng: 139.7634 },
    sommelier: 'Kenji Takahashi, Master of Sake & Wine',
    headChef: 'Chef Hiroshi Tanaka & Antoine Delicia',
    valetAvailable: true,
    dressCode: 'Refined Upscale'
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-1',
    author: 'Michelin Guide Inspector',
    role: 'Official Review 2024',
    rating: 5,
    comment: 'Delicia elevates contemporary French-Japanese fusion into pure operatic poetry. The Miyazaki A5 Rossini with black truffle reduction is arguably one of the finest single bites created on Earth this decade.',
    source: 'Michelin Guide',
    date: 'Autumn 2024',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    dishRecommended: 'Miyazaki A5 Wagyu Tournedos Rossini'
  },
  {
    id: 'rev-2',
    author: 'Pete Wells',
    role: 'Chief Food Critic',
    rating: 5,
    comment: 'From the moment you step through the obsidian doors into the glowing gold dining sanctum, Delicia operates at an echelon few restaurants ever touch. The wine program is transcendent.',
    source: 'The New York Times',
    date: 'Winter 2024',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    dishRecommended: 'Brittany Blue Lobster & White Truffle Tajarin'
  },
  {
    id: 'rev-3',
    author: 'Lady Victoria Hastings',
    role: 'Global Gastronomy Patron',
    rating: 5,
    comment: 'We hosted our daughter\'s wedding gala with Delicia Catering. The level of perfection, discrete choreography of the 40-person service team, and impeccable plating was breathtaking.',
    source: 'VIP Guest',
    date: 'Summer 2024',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    dishRecommended: 'Grand Degustation Tasting Menu'
  },
  {
    id: 'rev-4',
    author: 'Forbes Global Luxury',
    role: 'Hospitality Index',
    rating: 5,
    comment: 'Awarded 5 Stars consecutively. Delicia sets the benchmark for ultra-luxury dining worldwide. The attention to acoustics, private vault dining, and personalized sommelier pairings is unmatched.',
    source: 'Forbes Travel',
    date: 'Spring 2024',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    dishRecommended: 'Imperial Royal Ossetra Caviar'
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig-1',
    image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=800&q=80',
    caption: 'Behind the pass with Chef Antoine: carving dry-aged cuts before service. ✨ #DeliciaDining #MichelinStar',
    likes: 4892,
    comments: 142,
    url: '#'
  },
  {
    id: 'ig-2',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
    caption: 'Pouring rare 1996 Grand Cru from our private subterranean vault. 🍷 #SommelierSelect #WineSpectator',
    likes: 3120,
    comments: 88,
    url: '#'
  },
  {
    id: 'ig-3',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80',
    caption: 'The 24K Celestial Gold Sphere before the warm espresso caramel pour. Pure bliss. 🍫 #Valrhona #GoldDessert',
    likes: 7420,
    comments: 295,
    url: '#'
  },
  {
    id: 'ig-4',
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80',
    caption: 'Midnight at the Skyline Terrace in Mayfair. The art of unforgettable evenings. 🍸 #DeliciaLondon',
    likes: 5210,
    comments: 116,
    url: '#'
  },
  {
    id: 'ig-5',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    caption: 'Sizzling A5 Wagyu with fresh winter truffles planed tableside. 🥩 #EpicureanDelight',
    likes: 6180,
    comments: 184,
    url: '#'
  },
  {
    id: 'ig-6',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    caption: 'Tables set for tonight\'s 7-course private gala. Ready to welcome our distinguished guests. 🕯️ #HauteCuisine',
    likes: 4330,
    comments: 97,
    url: '#'
  }
];

export const CATERING_PACKAGES = [
  {
    id: 'royal-soiree',
    name: 'The Imperial Gala Package',
    type: 'Private & Corporate Galas (50 - 500 Guests)',
    pricePerGuest: 320,
    description: 'Full white-glove team, 6-course seated tasting menu, Grand Cru champagne reception, tableside caviar cart, and dedicated sommelier staff.',
    includes: [
      '6-Course Custom Plated Menu with Chef on-site',
      'Tsar Imperial Caviar & Champagne Toast',
      'Sommelier Wine Pairings per course',
      'Artisanal Linen, Custom Gold Rim China & Baccarat Crystal',
      'Master Bartender Custom Cocktail Bar',
      'Event Producer & Floor Captain Coordination'
    ],
    popular: true
  },
  {
    id: 'haute-wedding',
    name: 'Haute Wedding Celebration',
    type: 'Luxury Weddings & Receptions',
    pricePerGuest: 280,
    description: 'An unforgettable matrimonial banquet with cocktail hour stations, 5-course customized dinner, signature gold desserts, and late-night gourmet bites.',
    includes: [
      'Interactive Raw Bar & Truffle Canapés on arrival',
      '5-Course Curated Seasonal Banquet Menu',
      'Delicia 24K Custom Tiered Wedding Cake creation',
      'Midnight Gourmet Slider & Truffle Fry Lounge',
      'Full Banquet Staff, Setup & Teardown logistics'
    ],
    popular: false
  },
  {
    id: 'intimate-yacht',
    name: 'Private Estate & Superyacht Dining',
    type: 'Intimate VVIP Gatherings (8 - 30 Guests)',
    pricePerGuest: 450,
    description: 'Executive Chef private residency in your villa or superyacht. Bespoke tailored Omakase/Degustation dining with personal sommelier and butler.',
    includes: [
      'Bespoke menu crafted around host\'s exact preferences',
      'A5 Wagyu & Live Lobster live preparation',
      'Rare Cellar Reserve Vintage pairings',
      'Dedicated Private Chef, Sous Chef & Maître D\'',
      'Discreet, confidential 5-star service'
    ],
    popular: false
  }
];

export const AWARDS = [
  { title: '3 Michelin Stars', org: 'Michelin Guide 2024', icon: '⭐' },
  { title: 'World\'s Top 10 Best', org: 'World\'s 50 Best Restaurants', icon: '🏆' },
  { title: 'Grand Award', org: 'Wine Spectator 2023 - 2024', icon: '🍷' },
  { title: '5-Star Diamond', org: 'Forbes Travel Guide', icon: '💎' },
  { title: 'Best Fine Dining', org: 'Global Epicurean Awards', icon: '👑' },
];
