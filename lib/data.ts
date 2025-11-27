import { Zap, Brain, Moon, Heart, Users, Leaf } from 'lucide-react';
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

// ============================================
// SERVICES DATA
// ============================================

export const servicesTech: Service[] = [
  {
    name: 'K-ESCAPE',
    desc: 'VR Nature & Olfactothérapie',
    badge: 'Immersion',
    icon: Leaf,
    color: '#00FF94'
  },
  {
    name: 'K-SLEEP',
    desc: 'Micro-sieste Zéro Gravité',
    badge: 'Repos',
    icon: Moon,
    color: '#FFB347'
  },
  {
    name: 'K-FOCUS',
    desc: 'Lumière bleue & Sons binauraux',
    badge: 'Mental',
    icon: Brain,
    color: '#00FF94'
  },
  {
    name: 'FUEL BAR',
    desc: 'Boissons fonctionnelles & Nootropiques',
    badge: 'Nutrition',
    icon: Leaf,
    color: '#00FF94'
  }
];

export const servicesHuman: Service[] = [
  {
    name: 'K-MASSAGE',
    desc: 'Masseurs experts, protocole dos & trapèzes',
    badge: 'Soin Manuel',
    icon: Heart,
    color: '#FFB347'
  },
  {
    name: 'K-YOGA',
    desc: 'Yoga postural en petit groupe avec coach',
    badge: 'Coach Humain',
    icon: Users,
    color: '#FFB347'
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
      '10€ en Happy Hour',
      'Liberté totale',
      'Accès tous services',
      'Sans engagement'
    ],
    cta: 'Essayer',
    popular: false
  },
  {
    name: 'STUDENT PASS',
    price: '29.90€',
    period: '/mois',
    features: [
      '4 crédits/mois',
      'Accès heures creuses',
      'Fuel Bar -10%',
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
      '8 crédits/mois',
      'Accès illimité',
      'Fuel Bar -15%',
      'Résa prioritaire'
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
    desc: 'Fuel Bar, Networking, Co-working',
    icon: Users,
    color: '#00FF94'
  },
  {
    title: 'Zone Active',
    desc: 'Yoga Studio, Massage Rooms',
    icon: Heart,
    color: '#FFB347'
  },
  {
    title: 'Zone Silence',
    desc: 'K-Pods VR, Sleep Pods',
    icon: Moon,
    color: '#00FF94'
  }
];

// ============================================
// PROBLEMS DATA (pour section Concept)
// ============================================

export const problems = [
  {
    title: 'Mal de dos ?',
    desc: '83% des développeurs souffrent de douleurs posturales chroniques'
  },
  {
    title: 'Stress constant ?',
    desc: 'Le burnout touche 1 actif sur 2 en milieu urbain'
  },
  {
    title: 'Fatigue visuelle ?',
    desc: '7h d\'écran/jour = fatigue cognitive et trouble du sommeil'
  }
];

// ============================================
// SOLUTIONS DATA (pour section Concept)
// ============================================

export const solutions = [
  {
    title: 'TECH',
    desc: 'Pods VR immersifs, zéro gravité, luminothérapie',
    icon: Zap,
    color: '#00FF94'
  },
  {
    title: 'HUMAIN',
    desc: 'Masseurs diplômés, coachs yoga certifiés',
    icon: Heart,
    color: '#FFB347'
  }
];

// ============================================
// FOOTER DATA
// ============================================

export const footerLinks = {
  services: ['K-Pods VR', 'K-Massage', 'K-Yoga', 'Fuel Bar'],
  infos: ['Tarifs', 'FAQ', 'CGV', 'Contact'],
  location: {
    name: 'Quartier Tech Innovation',
    city: 'Toulouse, France'
  }
};