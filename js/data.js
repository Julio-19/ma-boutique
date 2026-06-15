// ============================================================
//  DONNÉES DE LA BOUTIQUE — modifie ici ou via le Dashboard
// ============================================================
const WHATSAPP_NUMBER = "22993077243"; // ← Mets TON numéro WhatsApp (sans +)

const DEFAULT_PRODUCTS = [
  {
    id: 1,
    name: "Gel Anti-Acné MOOYAM — Acide Salicylique 20g",
    price: 3000,
    oldPrice: 5000,
    stars: 4.5,
    description: "✨ Tu en as assez des boutons qui te volent ta confiance ? Ce gel a changé la vie de centaines de mes clients ici à Cotonou. En seulement 3 jours, la peau commence à se purifier. En 12h, la rougeur diminue. C'est cliniquement formulé avec de l'acide salicylique pas du hasard, de la vraie science.",
    images: [
      "images/acne1.jpg",
      "images/acne2.jpg",
      "images/acne3.jpg",
      "images/acne4.jpg",
      "images/acne5.jpg",
      "images/acne6.jpg",
      "images/acne7.jpg",
      "images/acne8.jpg",
      "images/acne9.jpg",
      "images/acne10.jpg"
    ],
    badge: "Bestseller",
    category: "Beauté"
  },
  {
    id: 2,
    name: "Huile de Batana 100% — Honduras Miracle Oil",
    price: 8000,
    oldPrice: 10000 ,
    stars: 5,
    description: "💆‍♀️ Tes cheveux méritent le meilleur — et le meilleur vient du Honduras.L'huile de Batana est utilisée depuis des générations par les femmes d'Amérique centrale pour avoir des cheveux épais, brillants et en bonne santé. On l'appelle 'l'huile miracle' et pour une bonne raison.",
    images: [
      "images/batana1.jpg",
      "images/batana2.jpg",
      "images/batana3.jpg",
      "images/batana4.jpg",
      "images/batana5.jpg",
      "images/batana6.jpg",
      "images/batana7.jpg",
      "images/batana8.jpg",
      "images/batana9.jpg",
      "images/batana10.jpg"
    ],
    badge: "Bio",
    category: "Soins"
  },
  {
    id: 3,
    name: "Height Growth Maximizer — Vitamine D, Calcium & Zinc",
    price: 15000,
    oldPrice: 20000,
    stars: 4,
    description: "📏 Tu veux une grande taille et donner à ton corps les nutriments qu'il lui faut vraiment ? Ce complément premium contient Vitamine D3, Calcium et Zinc, les 3 nutriments essentiels que la plupart des Béninois ne reçoivent pas en quantité suffisante dans leur alimentation quotidienne pour grandir en taille rapidement",
    images: [
     "images/taille1.jpg",
     "images/taille2.jpg",
      "images/taille3.jpg",
      "images/taille4.jpg",
      "images/taille5.jpg",
     "images/taille6.jpg"
    ],
    badge: "Nouveau",
    category: "Complément alimentaire"
  },
  {
    id: 4,
    name: "Sac à Dos Essentials — Cuir Noir Premium",
    price: 5000,
    oldPrice: null,
    stars: 4.5,
    description: "🖤 Le sac qui dit tout sur toi sans que tu aies besoin de parler. Ce sac à dos disponible en plusieurs couleurs n'est pas juste un accessoire. C'est une déclaration. Sobre, élégant, résistant fait pour les gens qui ont du style sans en faire trop.",
    images: [
      "images/sac1.jpg",
      "images/sac2.jpg",
      "images/sac3.jpg",
      "images/sac4.jpg",
      "images/sac5.jpg",
      "images/sac6.jpg",
      "images/sac7.jpg",
      "images/sac8.jpg",
      "images/sac9.jpg",
      "images/sac10.jpg"
    ],
    badge: "Mode & Accessoires",
    category: "Soins"
  },
  {
    id: 5,
    name: "Savon Debbitone — Radiant Skin Soap au Mie",
    price: 6500,
    oldPrice: 9000,
    stars: 4,
    description: "🍯 Une peau lumineuse, douce et unifiée, c'est possible dès la première utilisation. Le Savon Debbitone au Miel est le secret beauté de milliers de femmes africaines. Antiseptique, nourrissant et formulé pour les peaux métissées et noires, il respecte ta peau tout en la transformant.",
    images: [
      "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=600&q=80",
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=600&q=80"
    ],
    badge: "Soin peau",
    category: "Soins"
  },
  {
    id: 6,
    name: "Queen Love — BIG BOY",
    price: 3000,
    oldPrice: 5000,
    stars: 5,
    description: "Produits de Performance Masculine. Tu cherches à reprendre confiance et à offrir le meilleur à ta partenaire ? Ce produits de soin masculin premium sont utilisés par de nombreux hommes qui ont décidé de ne plus subir les complexes mais d'agir. Formules naturelles, sans danger, résultats visibles.",
    images: [
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80",
      "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab12?w=600&q=80"
    ],
    badge: "Homme",
    category: "Soins"
  },
  {
    id: 7,
    name: "Huile Intime TONISABEREY — 10ml",
    price: 3000,
    oldPrice: 5500,
    stars: 4.5,
    description: "Tu cherches à gagner en confiance et à offrir davantage à ta partenaire ? L'huile TONISABEREY est une huile de massage intime premium, formulée spécialement pour les hommes qui veulent des résultats visibles, sans danger et sans effets secondaires.",
    images: [
      "https://images.unsplash.com/photo-1607006344380-b6775a0824a7?w=600&q=80",
      "https://images.unsplash.com/photo-1585232351009-aa69e0c919f0?w=600&q=80"
    ],
    badge: "Virilitee",
    category: "Soins"
  },
  {
    id: 8,
    name: "Max Man Gel & Crème Agrandissante — 50g",
    price: 8000,
    oldPrice: null,
    stars: 4,
    description: "🧴 Le gel que les hommes s'échangent en secret, maintenant disponible chez moi. Max Man est le produit de soin masculin le plus vendu dans sa catégorie. Gel et crème épaississante pour hommes, formulé pour ceux qui veulent reprendre le contrôle et apporter satisfaction à leur partenaire.",
    images: [
      "https://images.unsplash.com/photo-1585501049087-d678e9b4d1a4?w=600&q=80",
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80"
    ],
    badge: null,
    category: "Soins"
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
