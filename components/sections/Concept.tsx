'use client';

import Section from '@/components/shared/Section';
import BentoCard from '@/components/ui/BentoCard';
import {
  Brain,
  AlertCircle,
  Eye,
  Zap,
  Heart,
  TrendingDown,
  Clock,
  Award,
} from 'lucide-react';
import { cubicBezier, motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

const problems = [
  {
    title: 'Surcharge mentale',
    desc: "Votre cerveau traite 34 Go de données par jour. Il n'a jamais appris à s'arrêter.",
    icon: Brain,
    stat: '85%',
    statLabel: 'des urbains concernés',
  },
  {
    title: 'Corps sous tension',
    desc: 'Trapèzes noués, dos bloqué, nuque raide. Votre corps crie ce que votre esprit ignore.',
    icon: AlertCircle,
    stat: '7/10',
    statLabel: 'souffrent de TMS',
  },
  {
    title: 'Fatigue oculaire',
    desc: "8h par jour devant un écran. Vos yeux surchauffent et votre clarté mentale s'effondre.",
    icon: Eye,
    stat: '92%',
    statLabel: 'ont des symptômes',
  },
];

const results = [
  {
    icon: TrendingDown,
    value: '-78%',
    label: 'Cortisol',
    sublabel: 'dès 20min',
  },
  {
    icon: Clock,
    value: '3h',
    label: 'Effet prolongé',
    sublabel: 'après la séance',
  },
  {
    icon: Award,
    value: '4.9/5',
    label: 'Satisfaction',
    sublabel: '+500 avis',
  },
];

export default function Concept() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [imageLoaded, setImageLoaded] = useState(false);

  const problemImages = [
    '/images/stress.jpg',
    '/images/back-pain.jpg',
    '/images/eye-strain.jpg',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: cubicBezier(0.22, 1, 0.36, 1) },
    },
  };

  return (
    <Section id="concept" background="cream">
      {/* HEADER */}
      <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="font-sans text-4xl md:text-5xl font-semibold text-charcoal leading-tight mb-6"
        >
          La vie moderne nous épuise.
          <span className="block mt-2 text-sage-600 font-semibold">
            Il est temps de respirer.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto"
        >
          Trois fléaux de l&apos;urbain moderne nous touchent tous. KAPSUL a
          créé la réponse. Une approche qui ne masque pas les symptômes, mais
          répare les causes.
        </motion.p>
      </div>

      {/* BENTO GRID - PROBLÈMES avec stats intégrées */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
      >
        {problems.map((problem, idx) => (
          <motion.div key={problem.title} variants={itemVariants}>
            <BentoCard
              title={problem.title}
              desc={problem.desc}
              image={problemImages[idx]}
              imagePosition="top"
              className="h-full"
            >
              {/* Stat intégrée dans la card */}
              <div className="mt-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-sage-100/50">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-sans text-2xl font-semibold text-charcoal">
                      {problem.stat}
                    </div>
                    <div className="text-xs text-gray-600">
                      {problem.statLabel}
                    </div>
                  </div>
                  <problem.icon
                    className="w-8 h-8 text-sage-600"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
            </BentoCard>
          </motion.div>
        ))}
      </motion.div>

      {/* Citation ou insight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto mb-20"
      >
        <div className="p-8 md:p-10 rounded-3xl bg-linear-to-br from-sage-50 to-cream border border-sage-100">
          <p className="font-sans text-xl md:text-2xl text-charcoal leading-relaxed text-center mb-4">
            &quot;On ne peut pas éliminer le stress de la vie moderne. Mais on
            peut donner au corps et à l&apos;esprit les outils pour se
            régénérer.&quot;
          </p>
          <div className="text-center">
            <span className="text-sm font-semibold text-sage-700">
              Dr. Sarah Chen
            </span>
            <span className="text-sm text-gray-600">
              {' '}
              — Neurosciences, Stanford
            </span>
          </div>
        </div>
      </motion.div>

      {/* LA SOLUTION - Layout côte à côte */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16"
      >
        {/* IMAGE À GAUCHE */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-charcoal/5 aspect-4/3 group">
          <Image
            src="/images/kapsul-space.jpg"
            alt="Espace KAPSUL - Notre approche hybride"
            fill
            className={`object-cover transition-all duration-1000 ${
              imageLoaded ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
            } group-hover:scale-105`}
            onLoad={() => setImageLoaded(true)}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          {/* Badge flottant */}
          <div className="absolute top-6 right-6 glass px-4 py-2 rounded-full backdrop-blur-md border border-white/40">
            <span className="text-sm font-semibold text-charcoal">
              Quartier St-Cyprien
            </span>
          </div>

          {/* Info bottom */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="glass rounded-2xl p-4 backdrop-blur-md border border-white/40">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-charcoal/60 uppercase tracking-wider mb-1">
                    Espace
                  </div>
                  <div className="font-semibold text-charcoal">
                    150m² dédiés à votre pause
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-sans text-2xl font-semibold text-sage-700">
                    3
                  </div>
                  <div className="text-xs text-charcoal/60">Zones</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CONTENU À DROITE */}
        <div className="space-y-8">
          <div>
            <h3 className="font-sans text-3xl md:text-4xl lg:text-5xl font-semibold text-charcoal mb-4 leading-tight">
              Tech et Touch.
              <br />
              <span className="text-sage-600">L&apos;alliance parfaite.</span>
            </h3>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Une approche hybride unique qui combine technologie immersive et
              expertise humaine pour une régénération totale en 20 minutes.
              Parce que votre corps mérite autant d&apos;attention que votre
              esprit.
            </p>

            {/* Mini CTA */}
            <div className="flex items-center gap-3 text-sm text-sage-700">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-sage-600 animate-pulse" />
                <span className="font-medium">6 protocoles disponibles</span>
              </div>
              <span className="text-gray-400">•</span>
              <span className="font-medium">Sans abonnement</span>
            </div>
          </div>

          {/* Features cards */}
          <div className="space-y-4">
            {/* Tech */}
            <div className="group p-6 rounded-2xl glass border border-sage-100 hover:border-sage-200 hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sage-600/10 flex items-center justify-center shrink-0 group-hover:bg-sage-600 group-hover:scale-110 transition-all">
                  <Zap
                    className="w-6 h-6 text-sage-700 group-hover:text-white transition-colors"
                    strokeWidth={2}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-charcoal text-lg">
                      Tech
                    </h4>
                    <span className="text-lg font-semibold text-sage-600 px-2 py-1 rounded-full bg-sage-50">
                      K-PODS
                    </span>
                  </div>
                  <p className="text-[16px] text-gray-700 leading-relaxed">
                    Immersion VR, luminothérapie et sons binauraux calibrés pour
                    une déconnexion neuronale instantanée. La science au service
                    de votre pause.
                  </p>
                </div>
              </div>
            </div>

            {/* Touch */}
            <div className="group p-6 rounded-2xl glass border border-sage-100 hover:border-terra-200 hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-terra-500/10 flex items-center justify-center shrink-0 group-hover:bg-terra-500 group-hover:scale-110 transition-all">
                  <Heart
                    className="w-6 h-6 text-terra-600 group-hover:text-white transition-colors"
                    strokeWidth={2}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-charcoal text-lg">
                      Touch
                    </h4>
                    <span className="text-lg font-semibold text-terra-600 px-2 py-1 rounded-full bg-terra-50">
                      K-MOVE
                    </span>
                  </div>
                  <p className="text-[16px] text-gray-700 leading-relaxed">
                    Mains expertes de praticiens certifiés pour dénouer les
                    tensions réelles, muscle par muscle. L&apos;humain au cœur
                    de votre soin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* RÉSULTATS MESURABLES - Nouvelle section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-10"
      >
        <div className="text-center mb-10">
          <h3 className="font-sans text-3xl md:text-4xl font-semibold text-charcoal">
            Des effets immédiats,{' '}
            <span className="text-sage-600">scientifiquement prouvés</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {results.map((result, idx) => (
            <motion.div
              key={result.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="p-8 rounded-3xl glass border border-sage-100 border-sage-200 shadow-lg transition-all duration-300 text-center group"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-sage-600/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
              >
                <result.icon
                  className={`w-7 h-7 text-sage-700`}
                  strokeWidth={2}
                />
              </div>
              <div className={`font-sans text-4xl md:text-5xl font-semibold text-sage-600 mb-2`}>
                {result.value}
              </div>
              <div className="font-semibold text-charcoal text-lg mb-1">
                {result.label}
              </div>
              <div className="text-sm text-gray-600">{result.sublabel}</div>
            </motion.div>
          ))}
        </div>

        {/* Note scientifique */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-md text-gray-600 mt-8 max-w-2xl mx-auto"
        >
          * Études menées sur 200+ participants par le laboratoire de
          neurosciences comportementales de l&apos;Université Paul Sabatier,
          Toulouse.
        </motion.p>
      </motion.div>
    </Section>
  );
}
