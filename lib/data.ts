import { Brain, Moon, Heart, Users, Leaf, Coffee } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

// ============================================
// TYPES
// ============================================

export interface Service {
  name: string;
  desc: string;
  badge: string;
  icon: LucideIcon;
  color?: string;
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
// SERVICES DATA
// ============================================

export const servicesTech: Service[] = [
  {
    name: 'K-ESCAPE',
    desc: 'Immersion VR nature et olfactothérapie. Évadez-vous instantanément dans des paysages apaisants.',
    badge: 'Immersion',
    icon: Leaf,
    color: 'sage'
  },
  {
    name: 'K-SLEEP',
    desc: 'Micro-sieste en position zéro gravité. Récupération optimale en 20 minutes chrono.',
    badge: 'Repos',
    icon: Moon,
    color: 'sage'
  },
  {
    name: 'K-FOCUS',
    desc: 'Luminothérapie bleue et sons binauraux. Retrouvez votre concentration maximale.',
    badge: 'Mental',
    icon: Brain,
    color: 'sage'
  },
];

export const servicesHuman: Service[] = [
  {
    name: 'K-MASSAGE',
    desc: 'Protocole dos et trapèzes par des praticiens experts. Libérez les tensions accumulées.',
    badge: 'Soin Manuel',
    icon: Heart,
    color: 'terra'
  },
  {
    name: 'K-YOGA',
    desc: 'Yoga postural en petit groupe avec coach certifié. Reconnectez-vous à votre corps.',
    badge: 'Coach Humain',
    icon: Users,
    color: 'terra'
  },
  {
    name: 'FUEL BAR',
    desc: 'Boissons fonctionnelles et nootropiques. Soutenez vos performances naturellement.',
    badge: 'Nutrition',
    icon: Coffee,
    color: 'terra'
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
    price: '25.99€',
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
    price: '39.99€',
    period: '/mois',
    features: [
      '8 crédits par mois inclus',
      'Accès illimité 7j/7',
      'Fuel Bar -15% permanent',
      'Réservation prioritaire'
    ],
    cta: 'Souscrire',
    popular: false
  },
  {
    name: 'PRO PASS',
    price: '59.99€',
    period: '/mois',
    features: [
      '12 crédits par mois inclus',
      'Accès illimité 7j/7',
      'Fuel Bar -20% permanent',
      'Réservation prioritaire'
    ],
    cta: 'Souscrire',
    popular: true
  }
];

// ============================================
// ZONES DATA
// ============================================

export const zones: Zone[] = [
  {
    title: 'Zone Sociale',
    desc: 'Fuel Bar, espace networking et co-working connecté pour échanger et vous ressourcer.',
    icon: Users,
    color: '#7FA084'
  },
  {
    title: 'Zone Active',
    desc: 'Studio yoga avec miroirs et salles de massage privées pour votre récupération physique.',
    icon: Heart,
    color: '#B8856A'
  },
  {
    title: 'Zone Silence',
    desc: 'K-Pods VR immersifs et sleep pods zéro gravité. Silence absolu garanti.',
    icon: Moon,
    color: '#9CA89E'
  }
];

// ============================================
// FOOTER DATA
// ============================================

export const footerLinks = {
  services: ['K-Pods VR', 'K-Massage', 'K-Yoga', 'Fuel Bar'],
  infos: ['Tarifs', 'FAQ', 'À Propos', 'Contact'],
  social: ['Instagram', 'LinkedIn', 'Facebook'],
  location: {
    name: 'Quartier St-Cyprien',
    address: 'Boulevard de l\'Innovation',
    city: 'Toulouse, France',
    phone: '+33 5 61 00 00 00',
    email: 'hello@kapsul.co'
  }
};

// ============================================
// HELPERS
// ============================================

export const getAllServices = (): Service[] => {
  return [...servicesTech, ...servicesHuman];
};

export const getServiceByName = (name: string): Service | undefined => {
  return getAllServices().find(s => s.name === name);
};

export const getPopularPlan = (): PricingPlan | undefined => {
  return pricingPlans.find(p => p.popular);
};