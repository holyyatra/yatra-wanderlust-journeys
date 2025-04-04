
export interface PackageItinerary {
  day: number;
  title: string;
  description: string;
  meals?: string[];
  accommodation?: string;
}

export interface PackageDetails {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  gallery: string[];
  duration: string;
  location: string;
  description: string;
  overview: string;
  price: string;
  inclusions: string[];
  exclusions: string[];
  itinerary: PackageItinerary[];
  highlights: string[];
}

const packages: PackageDetails[] = [
  {
    id: "helicopter-kedarnath",
    title: "Helicopter Yatra - Rishikesh to Kedarnath",
    subtitle: "Quick Divine Darshan by Air",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
    ],
    duration: "1-2 Days",
    location: "Rishikesh to Kedarnath",
    description: "Experience the divine journey to Kedarnath in a luxurious and time-saving helicopter ride from Rishikesh. Perfect for pilgrims with limited time.",
    overview: "This exclusive helicopter package offers a quick and comfortable journey to the sacred Kedarnath temple, one of the twelve Jyotirlingas of Lord Shiva. Skip the arduous trek and fly directly to this divine destination nestled in the Himalayan peaks. Our helicopter service from Rishikesh provides a breathtaking aerial view of the beautiful Himalayan landscape while ensuring a hassle-free pilgrimage experience.",
    price: "₹35,000 per person",
    inclusions: [
      "Return helicopter tickets from Rishikesh to Kedarnath",
      "VIP Darshan at Kedarnath Temple",
      "Breakfast and lunch on day of journey",
      "Assistance for temple procedures",
      "All necessary permits and tickets",
      "Ground assistance at helipad"
    ],
    exclusions: [
      "Personal expenses",
      "Any meals not mentioned in inclusions",
      "Travel insurance",
      "Accommodation in Rishikesh",
      "Additional temple offerings",
      "Any expenses arising due to unforeseen weather conditions"
    ],
    itinerary: [
      {
        day: 1,
        title: "Rishikesh to Kedarnath and Return",
        description: "Early morning reporting at the Rishikesh helipad. After a brief orientation and safety instructions, board the helicopter for a scenic 45-minute flight to Kedarnath. Upon arrival, our representative will guide you to the temple for VIP darshan. After the divine darshan and rituals, enjoy a prepared lunch. In the afternoon, board the helicopter for your return journey to Rishikesh. The entire journey is completed in a single day.",
        meals: ["Breakfast", "Lunch"],
        accommodation: "Not included"
      }
    ],
    highlights: [
      "Aerial view of the majestic Himalayas",
      "Time-saving alternative to the traditional trek",
      "VIP darshan at the sacred Kedarnath Temple",
      "Experienced pilots and ground staff",
      "Flexible scheduling options",
      "Perfect for pilgrims with limited time"
    ]
  },
  {
    id: "haridwar-kedarnath",
    title: "Haridwar to Kedarnath Yatra",
    subtitle: "A Complete Pilgrimage Experience",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
    ],
    duration: "5 Days / 4 Nights",
    location: "Haridwar, Rishikesh, Guptkashi, Kedarnath",
    description: "Embark on a spiritual journey from the holy city of Haridwar to the divine Kedarnath Temple with comfortable accommodations and guided trek.",
    overview: "This comprehensive 5-day package takes you from the sacred city of Haridwar to the divine abode of Lord Shiva at Kedarnath. Experience the spiritual energy of multiple holy sites along the way, including Rishikesh and Guptkashi. Our package includes comfortable accommodations, transportation, guided trek to Kedarnath, and all necessary arrangements for a smooth pilgrimage experience. Immerse yourself in the divine atmosphere and return with blessed memories.",
    price: "₹15,999 per person",
    inclusions: [
      "4 nights accommodation in hotels/guesthouses",
      "All meals (breakfast, lunch, dinner)",
      "Transportation by AC vehicle as per itinerary",
      "Experienced guide for Kedarnath trek",
      "All necessary permits and entrance fees",
      "Ganga Aarti attendance in Haridwar",
      "Ponies/Palanquin/Helicopter tickets (optional, at additional cost)"
    ],
    exclusions: [
      "Personal expenses",
      "Travel insurance",
      "Pony/Palanquin/Helicopter charges for Kedarnath trek",
      "Additional temple offerings",
      "Any expenses arising due to unforeseen weather or route changes"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Haridwar - Rishikesh",
        description: "Arrive in Haridwar and meet our representative. After refreshments, visit key temples in Haridwar including Mansa Devi and Chandi Devi. In the evening, witness the magical Ganga Aarti at Har Ki Pauri. Drive to Rishikesh for overnight stay.",
        meals: ["Dinner"],
        accommodation: "Hotel in Rishikesh"
      },
      {
        day: 2,
        title: "Rishikesh - Guptkashi",
        description: "After breakfast, visit important sites in Rishikesh including Laxman Jhula, Ram Jhula, and Triveni Ghat. Drive to Guptkashi (200 km, approx. 7-8 hours) via Devprayag and Rudraprayag. Enjoy the scenic beauty of the Alaknanda and Mandakini rivers. Overnight stay in Guptkashi.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Hotel in Guptkashi"
      },
      {
        day: 3,
        title: "Guptkashi - Sonprayag - Kedarnath",
        description: "Early morning drive to Sonprayag, then trek to Kedarnath (16 km trek or option for pony/palanquin at additional cost). Visit Kedarnath Temple for evening aarti. Overnight stay in simple accommodations near the temple.",
        meals: ["Breakfast", "Packed Lunch", "Dinner"],
        accommodation: "Guest house in Kedarnath"
      },
      {
        day: 4,
        title: "Kedarnath - Guptkashi",
        description: "Early morning temple darshan, then return trek to Sonprayag. Drive back to Guptkashi for overnight stay.",
        meals: ["Breakfast", "Packed Lunch", "Dinner"],
        accommodation: "Hotel in Guptkashi"
      },
      {
        day: 5,
        title: "Guptkashi - Haridwar/Rishikesh",
        description: "After breakfast, drive back to Haridwar/Rishikesh. Tour concludes with drop-off at your preferred location in Haridwar or Rishikesh.",
        meals: ["Breakfast", "Lunch"],
        accommodation: "Not included"
      }
    ],
    highlights: [
      "Attend the mesmerizing Ganga Aarti in Haridwar",
      "Visit the spiritual city of Rishikesh",
      "Scenic drive through the Himalayan valleys",
      "Guided trek to Kedarnath temple",
      "Divine darshan at one of the holiest Shiva shrines",
      "Comfortable accommodations throughout the journey"
    ]
  },
  {
    id: "char-dham",
    title: "Char Dham Yatra",
    subtitle: "Complete Sacred Circuit of Four Dhams",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
    ],
    duration: "12 Days / 11 Nights",
    location: "Yamunotri, Gangotri, Kedarnath, Badrinath",
    description: "The complete spiritual journey covering all four sacred sites of Yamunotri, Gangotri, Kedarnath, and Badrinath in one comprehensive package.",
    overview: "Embark on the ultimate Hindu pilgrimage with our complete Char Dham Yatra package. Visit the four sacred sites of Yamunotri, Gangotri, Kedarnath, and Badrinath in a single journey. Our meticulously planned 12-day itinerary ensures you experience the spiritual significance of each temple while enjoying comfortable accommodations, transportation, and expert guidance throughout. This holistic journey through the divine Himalayan shrines is believed to cleanse all sins and lead to salvation.",
    price: "₹45,999 per person",
    inclusions: [
      "11 nights accommodation in hotels/guesthouses",
      "All meals (breakfast, lunch, dinner)",
      "Transportation by AC vehicle throughout the journey",
      "Experienced guide for all temple visits and treks",
      "All necessary permits and entrance fees",
      "Daily pooja arrangements at all temples",
      "Medical kit and oxygen support for high altitude areas"
    ],
    exclusions: [
      "Personal expenses",
      "Travel insurance",
      "Pony/Palanquin/Helicopter charges (if opted)",
      "Additional temple offerings",
      "Any expenses arising due to unforeseen weather or route changes"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Haridwar - Drive to Barkot",
        description: "Arrive in Haridwar and meet our representative. Drive to Barkot (200 km, approx. 7-8 hours) via Mussoorie. Overnight stay in Barkot.",
        meals: ["Dinner"],
        accommodation: "Hotel in Barkot"
      },
      {
        day: 2,
        title: "Barkot - Yamunotri - Barkot",
        description: "Early morning drive to Janki Chatti, then trek to Yamunotri (6 km). Visit Yamunotri Temple, Divya Shila, and hot springs. Return to Barkot for overnight stay.",
        meals: ["Breakfast", "Packed Lunch", "Dinner"],
        accommodation: "Hotel in Barkot"
      },
      {
        day: 3,
        title: "Barkot - Uttarkashi",
        description: "Drive to Uttarkashi (100 km, approx. 4 hours). Visit Vishwanath Temple and other local attractions. Overnight stay in Uttarkashi.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Hotel in Uttarkashi"
      },
      {
        day: 4,
        title: "Uttarkashi - Gangotri - Uttarkashi",
        description: "Drive to Gangotri (100 km, approx. 4 hours). Visit Gangotri Temple and perform rituals. Return to Uttarkashi for overnight stay.",
        meals: ["Breakfast", "Packed Lunch", "Dinner"],
        accommodation: "Hotel in Uttarkashi"
      },
      {
        day: 5,
        title: "Uttarkashi - Guptkashi",
        description: "Drive to Guptkashi (220 km, approx. 8-9 hours). Visit Kashi Vishwanath Temple in Guptkashi. Overnight stay.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Hotel in Guptkashi"
      },
      {
        day: 6,
        title: "Guptkashi - Sonprayag - Kedarnath",
        description: "Drive to Sonprayag, then trek to Kedarnath (16 km trek or option for pony/palanquin at additional cost). Evening aarti at Kedarnath Temple. Overnight stay in Kedarnath.",
        meals: ["Breakfast", "Packed Lunch", "Dinner"],
        accommodation: "Guest house in Kedarnath"
      },
      {
        day: 7,
        title: "Kedarnath - Guptkashi",
        description: "Early morning temple darshan, then return trek to Sonprayag. Drive back to Guptkashi for overnight stay.",
        meals: ["Breakfast", "Packed Lunch", "Dinner"],
        accommodation: "Hotel in Guptkashi"
      },
      {
        day: 8,
        title: "Guptkashi - Joshimath",
        description: "Drive to Joshimath (170 km, approx. 6-7 hours) via Karnaprayag. Visit Narsingh Temple in Joshimath. Overnight stay.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Hotel in Joshimath"
      },
      {
        day: 9,
        title: "Joshimath - Badrinath - Joshimath",
        description: "Drive to Badrinath (45 km, approx. 2 hours). Visit Badrinath Temple, Mana Village (last Indian village), Vyas Cave, and Bheem Pul. Return to Joshimath for overnight stay.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Hotel in Joshimath"
      },
      {
        day: 10,
        title: "Joshimath - Rudraprayag",
        description: "Drive to Rudraprayag (140 km, approx. 5-6 hours). Visit the confluence of Alaknanda and Mandakini rivers. Overnight stay in Rudraprayag.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Hotel in Rudraprayag"
      },
      {
        day: 11,
        title: "Rudraprayag - Rishikesh",
        description: "Drive to Rishikesh (140 km, approx. 5-6 hours). Visit key temples and ashrams in Rishikesh. Evening Ganga Aarti at Triveni Ghat. Overnight stay in Rishikesh.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Hotel in Rishikesh"
      },
      {
        day: 12,
        title: "Rishikesh - Haridwar (Departure)",
        description: "After breakfast, drive to Haridwar. Tour concludes with drop-off at your preferred location in Haridwar.",
        meals: ["Breakfast"],
        accommodation: "Not included"
      }
    ],
    highlights: [
      "Complete pilgrimage to all four Dhams in one journey",
      "Scenic treks through beautiful Himalayan terrain",
      "Visit to Mana - the last Indian village near Badrinath",
      "Spiritual experiences at ancient temples and holy rivers",
      "Comfortable accommodations throughout the journey",
      "Expert guides for religious ceremonies and local knowledge"
    ]
  },
  {
    id: "kedarnath-badrinath",
    title: "Kedarnath & Badrinath Yatra",
    subtitle: "Journey to Lord Shiva & Lord Vishnu's Abodes",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
    ],
    duration: "7 Days / 6 Nights",
    location: "Haridwar, Rishikesh, Guptkashi, Kedarnath, Badrinath",
    description: "Combined pilgrimage to the sacred shrines of Kedarnath and Badrinath, the abodes of Lord Shiva and Lord Vishnu in the majestic Himalayas.",
    overview: "This spiritually enriching 7-day package combines visits to two of the most revered temples in Hinduism - Kedarnath, dedicated to Lord Shiva, and Badrinath, dedicated to Lord Vishnu. Journey through the breathtaking Himalayan landscapes, experience the divine energy of these ancient shrines, and participate in authentic rituals guided by experienced priests. Our package includes comfortable accommodations, transportation, guided treks, and all necessary arrangements for a seamless pilgrimage experience.",
    price: "₹25,999 per person",
    inclusions: [
      "6 nights accommodation in hotels/guesthouses",
      "All meals (breakfast, lunch, dinner)",
      "Transportation by AC vehicle throughout the journey",
      "Experienced guide for all temple visits and treks",
      "All necessary permits and entrance fees",
      "Pooja arrangements at both temples",
      "Medical kit and oxygen support for high altitude areas"
    ],
    exclusions: [
      "Personal expenses",
      "Travel insurance",
      "Pony/Palanquin/Helicopter charges (if opted)",
      "Additional temple offerings",
      "Any expenses arising due to unforeseen weather or route changes"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Haridwar - Rishikesh",
        description: "Arrive in Haridwar and meet our representative. Visit key temples in Haridwar. Evening Ganga Aarti at Har Ki Pauri. Drive to Rishikesh for overnight stay.",
        meals: ["Dinner"],
        accommodation: "Hotel in Rishikesh"
      },
      {
        day: 2,
        title: "Rishikesh - Guptkashi",
        description: "After breakfast, visit important sites in Rishikesh. Drive to Guptkashi (200 km, approx. 7-8 hours) via Devprayag and Rudraprayag. Overnight stay in Guptkashi.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Hotel in Guptkashi"
      },
      {
        day: 3,
        title: "Guptkashi - Sonprayag - Kedarnath",
        description: "Drive to Sonprayag, then trek to Kedarnath (16 km trek or option for pony/palanquin at additional cost). Evening aarti at Kedarnath Temple. Overnight stay in Kedarnath.",
        meals: ["Breakfast", "Packed Lunch", "Dinner"],
        accommodation: "Guest house in Kedarnath"
      },
      {
        day: 4,
        title: "Kedarnath - Guptkashi",
        description: "Early morning temple darshan, then return trek to Sonprayag. Drive back to Guptkashi for overnight stay.",
        meals: ["Breakfast", "Packed Lunch", "Dinner"],
        accommodation: "Hotel in Guptkashi"
      },
      {
        day: 5,
        title: "Guptkashi - Joshimath - Badrinath",
        description: "Drive to Badrinath (220 km, approx. 9-10 hours) via Karnaprayag and Joshimath. Evening aarti at Badrinath Temple. Overnight stay in Badrinath.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Hotel in Badrinath"
      },
      {
        day: 6,
        title: "Badrinath - Rudraprayag",
        description: "Morning temple darshan and ritual bath in Tapt Kund. Visit Mana Village, Vyas Cave, and Bheem Pul. Drive to Rudraprayag (160 km, approx. 7-8 hours). Overnight stay in Rudraprayag.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        accommodation: "Hotel in Rudraprayag"
      },
      {
        day: 7,
        title: "Rudraprayag - Haridwar (Departure)",
        description: "After breakfast, drive to Haridwar (140 km, approx. 5-6 hours). Tour concludes with drop-off at your preferred location in Haridwar.",
        meals: ["Breakfast", "Lunch"],
        accommodation: "Not included"
      }
    ],
    highlights: [
      "Visit both Kedarnath (Shiva) and Badrinath (Vishnu) temples",
      "Scenic trek to Kedarnath through beautiful landscapes",
      "Visit to Mana, the last Indian village near Badrinath",
      "Ritual bath in the sacred hot springs of Tapt Kund",
      "Comfortable accommodations throughout the journey",
      "Spiritual guidance for all rituals and ceremonies"
    ]
  }
];

export default packages;
