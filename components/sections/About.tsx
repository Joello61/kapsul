'use client';

import { motion } from 'framer-motion';
import {
  Zap,
  Heart,
  TrendingDown,
  Code,
  Brain,
  Coffee,
  Users,
  Target,
  Lightbulb,
  Award,
} from 'lucide-react';
import Link from 'next/link';

const team = [
  {
    name: 'Alexandre Martin',
    role: 'CEO & Head of Wellness',
    title: 'Le Visionnaire',
    superpower: "L'Empathie",
    quote: 'Un esprit sain ne sert à rien dans un corps buggé.',
    favoriteService: 'K-YOGA',
    skills: { coding: 75, wellness: 95, business: 85 },
    color: '#B8856A',
    icon: Heart,
    bio: 'Ex-développeur reconverti après un burn-out. A transformé sa crise en mission.',
  },
  {
    name: 'Sophie Dubois',
    role: 'CFO & Operations',
    title: 'La Stratège',
    superpower: "L'Optimisation",
    quote: 'La rentabilité est la meilleure forme de durabilité.',
    favoriteService: 'K-FOCUS',
    skills: { coding: 70, business: 95, analytics: 90 },
    color: '#7FA084',
    icon: TrendingDown,
    bio: 'Ancienne consultante McKinsey. Apporte rigueur et scalabilité au projet.',
  },
  {
    name: 'Thomas Leroy',
    role: 'CTO & Creative Director',
    title: "L'Architecte",
    superpower: 'Le Code',
    quote: "Si c'est pas responsive, ça n'existe pas.",
    favoriteService: 'K-ESCAPE',
    skills: { coding: 98, design: 85, wellness: 60 },
    color: '#7FA084',
    icon: Code,
    bio: "Full-stack obsédé par l'UX. A codé la première version de l'app en 48h.",
  },
  {
    name: 'Laura Chen',
    role: 'CMO & Growth',
    title: 'La Voix',
    superpower: 'Le Storytelling',
    quote: "On ne vend pas du temps, on vend de l'énergie.",
    favoriteService: 'K-SLEEP',
    skills: { storytelling: 95, marketing: 90, coding: 70 },
    color: '#B8856A',
    icon: Users,
    bio: 'Ex-Brand Manager chez Calm. Comprend les urbains stressés mieux que personne.',
  },
];

const values = [
  {
    icon: Zap,
    title: 'Innovation',
    subtitle: 'Tech',
    desc: 'Nous utilisons la data et la VR pour hacker le bien-être. Chaque protocole est calibré selon les neurosciences les plus récentes.',
    color: '#7FA084',
    metric: '85%',
    metricLabel: 'de satisfaction tech',
  },
  {
    icon: Heart,
    title: 'Bienveillance',
    subtitle: 'Human',
    desc: "La technologie ne remplace pas la chaleur humaine, elle la complète. Nos praticiens sont au cœur de l'expérience.",
    color: '#B8856A',
    metric: '4.9/5',
    metricLabel: 'note praticiens',
  },
  {
    icon: TrendingDown,
    title: 'Accessibilité',
    subtitle: 'Money',
    desc: "Le bien-être n'est pas un luxe, c'est une maintenance système nécessaire. 12€ au lieu de 90€, sans compromis sur la qualité.",
    color: '#7FA084',
    metric: '-85%',
    metricLabel: 'vs spa classique',
  },
];

const milestones = [
  { year: '2023', title: "L'idée", desc: 'Né en salle de TP après 8h de code' },
  {
    year: '2024',
    title: 'Prototype',
    desc: 'Premier K-Pod testé par 50 étudiants',
  },
  {
    year: '2025',
    title: 'Ouverture',
    desc: 'St-Cyprien accueille notre sanctuaire',
  },
  {
    year: '2026',
    title: 'Expansion',
    desc: 'Toulouse, Paris, Lyon... (à venir)',
  },
];

const impact = [
  {
    icon: Users,
    value: '500+',
    label: 'Utilisateurs actifs',
    sublabel: 'en 6 mois',
  },
  {
    icon: Target,
    value: '3,200',
    label: 'Sessions réalisées',
    sublabel: 'depuis janvier',
  },
  {
    icon: Award,
    value: '4.8/5',
    label: 'Satisfaction globale',
    sublabel: 'sur 200+ avis',
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-stone">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-cream">

        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-sage-200/30 mb-4">
              <Lightbulb className="w-4 h-4 text-sage-600" strokeWidth={2} />
              <span className="text-sm font-semibold text-charcoal">
                Notre histoire
              </span>
            </div>

            <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-semibold text-charcoal leading-tight">
              L&apos;Origine du Reset.
            </h1>

            <p className="text-xl text-sage-600 font-medium max-w-2xl mx-auto">
              Créé par des étudiants épuisés, pour tous ceux qui n&apos;ont
              jamais le temps de souffler.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage-50 border border-sage-200/50">
              <Coffee className="w-4 h-4 text-sage-600" strokeWidth={2} />
              <span className="text-sm font-semibold text-sage-700">
                Genèse
              </span>
            </div>

            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                L&apos;idée de KAPSUL est née en{' '}
                <strong className="text-charcoal">novembre 2023</strong>, dans
                une salle de TP informatique. Après 8 heures de code sans pause,
                nous avions mal au dos, les yeux explosés, et le cerveau en
                brouillard total.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Nous cherchions un endroit pour{' '}
                <span className="text-sage-600 font-semibold">
                  décompresser rapidement
                </span>
                , mais rien n&apos;existait : les Spas demandent 2h et 90€, les
                salles de sport nécessitent trop d&apos;énergie, et le café du
                coin... c&apos;est juste du café.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Alors nous avons décidé de{' '}
                <strong className="text-charcoal">
                  créer ce lieu nous-mêmes
                </strong>
                . Un endroit où l&apos;on peut récupérer en 20 minutes, pour
                moins de 15€, sans rendez-vous compliqué.
              </p>

              <div className="p-6 rounded-2xl bg-sage-50 border-l-4 border-sage-600">
                <p className="text-base italic text-gray-700 mb-2">
                  &quot;KAPSUL, c&apos;est la fusion de notre amour pour la tech
                  et de notre besoin criant d&apos;humanité. Un Pod VR pour
                  l&apos;esprit, des mains expertes pour le corps.&quot;
                </p>
                <p className="text-sm font-semibold text-sage-700">
                  — Alexandre Martin, CEO
                </p>
              </div>
            </div>

            <div className="flex items-center gap-8 pt-6 border-t border-sage-200/50">
              <div className="text-center">
                <div className="font-sans text-4xl font-semibold text-charcoal mb-1">
                  4
                </div>
                <div className="text-sm text-gray-600">Co-fondateurs</div>
              </div>
              <div className="w-px h-12 bg-sage-200/50" />
              <div className="text-center">
                <div className="font-sans text-4xl font-semibold text-sage-600 mb-1">
                  18
                </div>
                <div className="text-sm text-gray-600">Mois de création</div>
              </div>
              <div className="w-px h-12 bg-sage-200/50" />
              <div className="text-center">
                <div className="font-sans text-4xl font-semibold text-charcoal mb-1">
                  500+
                </div>
                <div className="text-sm text-gray-600">Clients actifs</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-sans text-3xl md:text-4xl font-semibold text-charcoal mb-4">
              Notre parcours
            </h2>
            <p className="text-lg text-gray-700">
              De l&apos;idée folle au sanctuaire urbain
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="relative"
              >
                <div className="glass rounded-2xl p-6 border border-sage-100 h-full">
                  <div className="font-sans text-3xl font-semibold text-sage-600 mb-3">
                    {milestone.year}
                  </div>
                  <h3 className="font-semibold text-charcoal mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {milestone.desc}
                  </p>
                </div>
                {idx < milestones.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-sage-200" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-20 bg-stone">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-sans text-3xl md:text-4xl font-semibold text-charcoal mb-4">
              L&apos;Équipe derrière le sanctuaire
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Quatre profils complémentaires, une obsession commune : rendre le
              bien-être accessible à tous les urbains pressés
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, idx) => {
              const Icon = member.icon;
              return (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="group relative"
                >
                  <div className="relative h-full p-8 rounded-3xl glass border border-sage-100 hover:border-sage-200 hover:shadow-xl transition-all duration-500 overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-3xl"
                      style={{
                        background: `radial-gradient(circle at 50% 0%, ${member.color}15, transparent 70%)`,
                      }}
                    />

                    <div className="relative z-10 space-y-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-sans text-2xl font-semibold text-charcoal mb-1">
                            {member.name}
                          </h3>
                          <p className="text-sm font-semibold text-gray-600 mb-2">
                            {member.role}
                          </p>
                          <div
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold"
                            style={{
                              backgroundColor: `${member.color}15`,
                              color: member.color,
                            }}
                          >
                            {member.title}
                          </div>
                        </div>

                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-6 duration-500"
                          style={{ backgroundColor: `${member.color}15` }}
                        >
                          <Icon
                            className="w-8 h-8"
                            style={{ color: member.color }}
                            strokeWidth={2}
                          />
                        </div>
                      </div>

                      {/* Bio */}
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {member.bio}
                      </p>

                      {/* Quote */}
                      <div
                        className="p-4 rounded-xl bg-sage-50/50 border-l-4"
                        style={{ borderColor: member.color }}
                      >
                        <p className="text-sm italic text-gray-700">
                          &quot;{member.quote}&quot;
                        </p>
                      </div>

                      {/* Infos */}
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Zap
                            className="w-4 h-4 text-sage-600"
                            strokeWidth={2}
                          />
                          <span className="text-gray-600">
                            Super-pouvoir :{' '}
                            <span className="text-charcoal font-semibold">
                              {member.superpower}
                            </span>
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Heart
                            className="w-4 h-4 text-terra-500"
                            strokeWidth={2}
                          />
                          <span className="text-gray-600">
                            Service favori :{' '}
                            <span className="text-charcoal font-semibold">
                              {member.favoriteService}
                            </span>
                          </span>
                        </div>
                      </div>

                      {/* Skills */}
                      <div className="space-y-3 pt-4 border-t border-sage-200/50">
                        {Object.entries(member.skills).map(([skill, value]) => (
                          <div key={skill}>
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                                {skill}
                              </span>
                              <span className="text-xs font-bold text-charcoal">
                                {value}%
                              </span>
                            </div>
                            <div className="w-full h-2 rounded-full bg-sage-100 overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${value}%` }}
                                viewport={{ once: true }}
                                transition={{
                                  delay: 0.5 + idx * 0.1,
                                  duration: 1,
                                  ease: 'easeOut',
                                }}
                                className="h-full rounded-full"
                                style={{ backgroundColor: member.color }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-sans text-3xl md:text-4xl font-semibold text-charcoal mb-4">
              Notre ADN
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Trois valeurs qui guident chaque décision, du choix des
              équipements à l&apos;accueil de nos clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  className="group text-center"
                >
                  <div className="glass rounded-3xl p-8 border border-sage-100 hover:border-sage-200 hover:shadow-lg transition-all duration-500 h-full flex flex-col">
                    <div
                      className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-6 duration-500"
                      style={{ backgroundColor: `${value.color}15` }}
                    >
                      <Icon
                        className="w-8 h-8"
                        style={{ color: value.color }}
                        strokeWidth={2}
                      />
                    </div>

                    <h3 className="font-sans text-2xl font-semibold text-charcoal mb-2">
                      {value.title}
                    </h3>

                    <div
                      className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
                      style={{
                        backgroundColor: `${value.color}15`,
                        color: value.color,
                      }}
                    >
                      {value.subtitle}
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6 flex-1">
                      {value.desc}
                    </p>

                    <div className="pt-4 border-t border-sage-200/50">
                      <div
                        className="font-sans text-3xl font-semibold mb-1"
                        style={{ color: value.color }}
                      >
                        {value.metric}
                      </div>
                      <div className="text-xs text-gray-600">
                        {value.metricLabel}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-sans text-3xl md:text-4xl font-semibold text-charcoal mb-4">
              Notre impact
            </h2>
            <p className="text-lg text-gray-700">
              6 mois après l&apos;ouverture, les chiffres parlent
              d&apos;eux-mêmes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {impact.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="glass rounded-2xl p-8 border border-sage-100 text-center hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-sage-600/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-sage-700" strokeWidth={2} />
                  </div>
                  <div className="font-sans text-4xl font-semibold text-charcoal mb-2">
                    {item.value}
                  </div>
                  <div className="font-semibold text-gray-700 mb-1">
                    {item.label}
                  </div>
                  <div className="text-sm text-gray-600">{item.sublabel}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Brain
              className="w-16 h-16 mx-auto text-sage-600"
              strokeWidth={1.5}
            />

            <h2 className="font-sans text-3xl md:text-4xl font-semibold text-charcoal">
              Envie de rejoindre la révolution du repos ?
            </h2>

            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Venez vivre l&apos;expérience KAPSUL. Votre première session vous
              convaincra que{' '}
              <span className="text-sage-600 font-semibold">
                la récupération n&apos;est plus un luxe
              </span>
              .
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/reserver">
                <button className="group w-full sm:w-auto bg-sage-600 text-white hover:bg-sage-700 font-semibold py-4 px-8 rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2">
                  Réserver ma première session
                  <Zap
                    className="w-5 h-5 transition-transform group-hover:rotate-12"
                    strokeWidth={2}
                  />
                </button>
              </Link>

              <Link href="/">
                <button className="w-full sm:w-auto glass text-charcoal hover:bg-white font-medium py-4 px-8 rounded-full transition-all border border-sage-200/50 hover:border-sage-300">
                  Retour à l&apos;accueil
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
