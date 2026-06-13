// ============================================================
//  DONNÉES DE LA BOUTIQUE — modifie ici ou via le Dashboard
// ============================================================
const WHATSAPP_NUMBER = "22953096726"; // ← Mets TON numéro WhatsApp (sans +)

const DEFAULT_PRODUCTS = [
  {
    id: 1,
    name: "Crème Éclaircissante Naturelle",
    price: 8500,
    oldPrice: 12000,
    stars: 4.5,
    description: "Crème 100 % naturelle à base de karité et aloe vera. Hydrate, nourrit et unifie le teint en douceur. Sans parabène, sans mercure. Résultats visibles en 2 semaines.",
    images: [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80",
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
  },
  {
    id: 6,
    name: "Gel Aloe Vera Pur 100%",
    price: 4500,
    oldPrice: 6000,
    stars: 5,
    description: "Gel d'aloe vera pur extrait à froid, sans additifs ni colorants. Apaise les irritations, hydrate la peau et accélère la cicatrisation. Flacon de 250 ml. Convient à tous types de peau.",
    images: [
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80",
      "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab12?w=600&q=80"
    ],
    badge: "Nouveau",
    category: "Soins"
  },
  {
    id: 7,
    name: "Beurre de Karité Brut",
    price: 3800,
    oldPrice: 5500,
    stars: 4.5,
    description: "Beurre de karité brut non raffiné, récolté et travaillé artisanalement. Nourrit intensément la peau sèche, protège les lèvres et fortifie les cheveux. Pot de 200 g. Idéal pour toute la famille.",
    images: [
      "https://images.unsplash.com/photo-1607006344380-b6775a0824a7?w=600&q=80",
      "https://images.unsplash.com/photo-1585232351009-aa69e0c919f0?w=600&q=80"
    ],
    badge: "Artisanal",
    category: "Soins"
  },
  {
    id: 8,
    name: "Huile de Ricin Cheveux & Cils",
    price: 4200,
    oldPrice: null,
    stars: 4,
    description: "Huile de ricin pressée à froid, épaisse et nourrissante. Stimule la pousse des cheveux et des cils, réduit la casse et renforce les racines. Flacon 100 ml avec pinceau applicateur inclus.",
    images: [
      "https://images.unsplash.com/photo-1585501049087-d678e9b4d1a4?w=600&q=80",
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80"
    ],
    badge: null,
    category: "Cheveux"
  },
  {
    id: 9,
    name: "Savon Tumeric & Curcuma",
    price: 2800,
    oldPrice: 4000,
    stars: 4.5,
    description: "Savon artisanal au curcuma et à la poudre de tumeric. Unifie le teint, réduit les taches sombres et illumine la peau en douceur. Sans sulfate, sans parfum artificiel. 150 g.",
    images: [
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&q=80",
      "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=600&q=80"
    ],
    badge: "Promo",
    category: "Beauté"
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
