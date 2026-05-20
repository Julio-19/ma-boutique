// ============================================================
//  DONNÉES DE LA BOUTIQUE — modifie ici ou via le Dashboard
// ============================================================
const WHATSAPP_NUMBER = "2290160086119"; // ← Mets TON numéro WhatsApp (sans +)

const DEFAULT_PRODUCTS = [
  {
    id: 1,
    name: "Crème Éclaircissante Naturelle",
    price: 1200,
    oldPrice: 19000,
    stars: 4.5,
    description: "Crème 100 % naturelle à base de karité et aloe vera. Hydrate, nourrit et unifie le teint en douceur. Sans parabène, sans mercure. Résultats visibles en 2 semaines.",
    images: [
      "images/blog-3.jpg,
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80",
      "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=600&q=80"
    ],
    badge: "Bestseller",
    category: "Beauté"
  },
  {
    id: 2,
    name: "Huile de Coco Vierge Bio",
    price: 5000,
    oldPrice: 7500,
    stars: 5,
    description: "Huile de coco vierge pressée à froid, 100 % bio. Idéale pour les cheveux, la peau et la cuisine. Pot de 500 ml.",
    images: [
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&q=80",
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80"
    ],
    badge: "Bio",
    category: "Soins"
  },
  {
    id: 3,
    name: "Sérum Anti-Taches Vitamine C",
    price: 11000,
    oldPrice: 15000,
    stars: 4,
    description: "Sérum concentré en vitamine C pure à 20 %. Réduit les taches, unifie le teint et donne de l'éclat. Flacon de 30 ml avec pipette.",
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80",
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&q=80"
    ],
    badge: "Nouveau",
    category: "Beauté"
  },
  {
    id: 4,
    name: "Savon Noir Africain Argan",
    price: 3500,
    oldPrice: null,
    stars: 4.5,
    description: "Savon noir authentique enrichi à l'huile d'argan. Nettoie en profondeur, exfolie et laisse la peau douce. 250 g.",
    images: [
      "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=600&q=80",
      "https://images.unsplash.com/photo-1583947581924-860bda6a26df?w=600&q=80"
    ],
    badge: null,
    category: "Soins"
  },
  {
    id: 5,
    name: "Masque Cheveux Karité Miel",
    price: 6500,
    oldPrice: 9000,
    stars: 4,
    description: "Masque capillaire ultra-nourrissant au beurre de karité et miel d'acacia. Répare les pointes, démêle et fait briller. 300 ml.",
    images: [
      "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=600&q=80",
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=600&q=80"
    ],
    badge: "Promo",
    category: "Cheveux"
  }
];

// Charge depuis localStorage ou utilise les données par défaut
function getProducts() {
  try {
    const stored = localStorage.getItem('boutique_products');
    return stored ? JSON.parse(stored) : DEFAULT_PRODUCTS;
  } catch(e) {
    return DEFAULT_PRODUCTS;
  }
}

function saveProducts(products) {
  localStorage.setItem('boutique_products', JSON.stringify(products));
}
