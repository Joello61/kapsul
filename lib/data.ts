import { Zap, Brain, Moon, Heart, Users, Leaf, Coffee, Sparkles } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

// ============================================
// TYPES
// ============================================

export interface Service {
  name: string;
  desc: string;
  badge: string;
  icon: LucideIcon;
  color: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  popular: boolean;
}

export interface Zone {
  title: string;
  desc: string;
  icon: LucideIcon;
  color: string;
}

export interface Problem {
  title: string;
  desc: string;
}

export interface Solution {
  title: string;
  desc: string;
  icon: LucideIcon;
  color: string;
}

// ============================================
// COULEURS KAPSUL (alignées avec globals.css)
// ============================================

// Ces valeurs correspondent exactement aux variables OKLCH du globals.css
export const COLORS = {
  // Olive - Calme, Nature, Équilibre
  olive: {
    50: 'oklch(0.98 0.012 140)',
    100: 'oklch(0.95 0.025 140)',
    200: 'oklch(0.90 0.045 140)',
    300: 'oklch(0.82 0.070 140)',
    400: 'oklch(0.72 0.095 140)',
    500: 'oklch(0.62 0.115 140)',
    600: 'oklch(0.52 0.105 140)', // Couleur principale
    700: 'oklch(0.42 0.090 140)',
    800: 'oklch(0.34 0.070 140)',
    900: 'oklch(0.26 0.050 140)',
  },
  
  // Terracotta - Chaleur, Humanité, Vitalité
  terra: {
    50: 'oklch(0.97 0.018 50)',
    100: 'oklch(0.94 0.038 50)',
    200: 'oklch(0.88 0.070 50)',
    300: 'oklch(0.80 0.105 50)',
    400: 'oklch(0.70 0.140 50)',
    500: 'oklch(0.64 0.160 50)', // Couleur principale
    600: 'oklch(0.56 0.145 50)',
    700: 'oklch(0.48 0.125 50)',
    800: 'oklch(0.40 0.100 50)',
    900: 'oklch(0.32 0.080 50)',
  },
  
  // Beige - Accent doux
  beige: {
    300: 'oklch(0.82 0.055 75)',
    400: 'oklch(0.74 0.070 75)',
    500: 'oklch(0.68 0.080 75)',
  }
} as const;

// ============================================
// SERVICES DATA
// ============================================

export const servicesTech: Service[] = [
  {
    name: 'K-ESCAPE',
    desc: 'VR Nature & Olfactothérapie pour une immersion totale',
    badge: 'Immersion',
    icon: Leaf,
    color: COLORS.olive[600]
  },
  {
    name: 'K-SLEEP',
    desc: 'Micro-sieste en zéro gravité pour récupération optimale',
    badge: 'Repos',
    icon: Moon,
    color: COLORS.beige[400]
  },
  {
    name: 'K-FOCUS',
    desc: 'Lumière bleue & sons binauraux pour concentration maximale',
    badge: 'Mental',
    icon: Brain,
    color: COLORS.olive[500]
  },
  {
    name: 'FUEL BAR',
    desc: 'Boissons fonctionnelles & nootropiques pour performance',
    badge: 'Nutrition',
    icon: Coffee,
    color: COLORS.terra[500]
  }
];

export const servicesHuman: Service[] = [
  {
    name: 'K-MASSAGE',
    desc: 'Masseurs experts, protocole dos & trapèzes anti-tensions',
    badge: 'Soin Manuel',
    icon: Heart,
    color: COLORS.terra[500]
  },
  {
    name: 'K-YOGA',
    desc: 'Yoga postural en petit groupe avec coach certifié',
    badge: 'Coach Humain',
    icon: Users,
    color: COLORS.terra[600]
  }
];

// ============================================
// PRICING DATA
// ============================================

export const pricingPlans: PricingPlan[] = [
  {
    name: 'À la Carte',
    price: '12€',
    period: '/session',
    features: [
      '10€ en Happy Hour (9h-12h)',
      'Liberté totale, zéro engagement',
      'Accès à tous les services',
      'Parfait pour découvrir'
    ],
    cta: 'Essayer maintenant',
    popular: false
  },
  {
    name: 'STUDENT PASS',
    price: '29.90€',
    period: '/mois',
    features: [
      '4 crédits par mois inclus',
      'Accès heures creuses (9h-17h)',
      'Fuel Bar -10% toute l\'année',
      'Carte étudiant requise'
    ],
    cta: 'Commencer',
    popular: true
  },
  {
    name: 'STANDARD PASS',
    price: '49.90€',
    period: '/mois',
    features: [
      '8 crédits par mois inclus',
      'Accès illimité 7j/7',
      'Fuel Bar -15% permanent',
      'Réservation prioritaire'
    ],
    cta: 'Souscrire',
    popular: false
  }
];

// ============================================
// ZONES DATA
// ============================================

export const zones: Zone[] = [
  {
    title: 'Zone Sociale',
    desc: 'Fuel Bar, espace networking et co-working connecté',
    icon: Users,
    color: COLORS.olive[600]
  },
  {
    title: 'Zone Active',
    desc: 'Studio yoga avec miroirs, salles de massage privées',
    icon: Heart,
    color: COLORS.terra[500]
  },
  {
    title: 'Zone Silence',
    desc: 'K-Pods VR immersifs et sleep pods zéro gravité',
    icon: Moon,
    color: COLORS.beige[400]
  }
];

// ============================================
// PROBLEMS DATA (pour section Concept)
// ============================================

export const problems: Problem[] = [
  {
    title: 'Mal de dos chronique ?',
    desc: '83% des travailleurs du digital souffrent de douleurs posturales'
  },
  {
    title: 'Stress permanent ?',
    desc: 'Le burnout touche 1 actif urbain sur 2, la déconnexion devient vitale'
  },
  {
    title: 'Fatigue visuelle ?',
    desc: '7h d\'écran par jour = fatigue cognitive et troubles du sommeil'
  }
];

// ============================================
// SOLUTIONS DATA (pour section Concept)
// ============================================

export const solutions: Solution[] = [
  {
    title: 'TECH',
    desc: 'Pods VR immersifs, zéro gravité, luminothérapie intelligente',
    icon: Zap,
    color: COLORS.olive[600]
  },
  {
    title: 'HUMAIN',
    desc: 'Masseurs diplômés d\'État, coachs yoga certifiés',
    icon: Heart,
    color: COLORS.terra[500]
  }
];

// ============================================
// FOOTER DATA
// ============================================

export const footerLinks = {
  services: ['K-Pods VR', 'K-Massage', 'K-Yoga', 'Fuel Bar'],
  infos: ['Tarifs', 'FAQ', 'CGV', 'Contact'],
  social: ['Instagram', 'LinkedIn', 'Facebook'],
  location: {
    name: 'Quartier Tech Innovation',
    address: 'Boulevard de l\'Innovation',
    city: 'Toulouse, France',
    phone: '+33 5 61 00 00 00',
    email: 'hello@kapsul.co'
  }
};

// ============================================
// STATS DATA (optionnel - pour section Hero ou About)
// ============================================

export const stats = [
  {
    value: '15min',
    label: 'Session moyenne',
    icon: Sparkles
  },
  {
    value: '94%',
    label: 'Satisfaction client',
    icon: Heart
  },
  {
    value: '6',
    label: 'Services uniques',
    icon: Zap
  }
];

// ============================================
// HELPERS
// ============================================

/**
 * Récupère tous les services (Tech + Human)
 */
export const getAllServices = (): Service[] => {
  return [...servicesTech, ...servicesHuman];
};

/**
 * Récupère un service par son nom
 */
export const getServiceByName = (name: string): Service | undefined => {
  return getAllServices().find(s => s.name === name);
};

/**
 * Récupère le plan de pricing populaire
 */
export const getPopularPlan = (): PricingPlan | undefined => {
  return pricingPlans.find(p => p.popular);
};