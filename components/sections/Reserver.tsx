'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Check, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { getAllServices } from '@/lib/data';

type Step = 'service' | 'datetime' | 'info' | 'confirmation';

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
  '17:00', '17:30', '18:00', '18:30', '19:00'
];

export default function Reserver() {
  const [step, setStep] = useState<Step>('service');
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = getAllServices();

  const handleServiceSelect = (serviceName: string) => {
    setSelectedService(serviceName);
    setTimeout(() => setStep('datetime'), 300);
  };

  const handleDateTimeNext = () => {
    if (selectedDate && selectedTime) {
      setStep('info');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setStep('confirmation');
  };

  const resetBooking = () => {
    setStep('service');
    setSelectedService(null);
    setSelectedDate('');
    setSelectedTime('');
    setFormData({ firstName: '', lastName: '', email: '', phone: '' });
  };

  // Générer les 14 prochains jours
  const getNextDays = () => {
    const days = [];
    const today = new Date();
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      days.push(date);
    }
    return days;
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short' });
  };

  const formatDateFull = (date: Date) => {
    return date.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-stone pt-32 pb-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 w-full">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-sage-600 transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" strokeWidth={2} />
            Retour à l&apos;accueil
          </Link>
          
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal mb-4">
            Réserver votre session
          </h1>
          <p className="text-lg text-gray-700">
            Quelques étapes pour votre moment de récupération
          </p>
        </div>

        {/* PROGRESS INDICATOR */}
        {step !== 'confirmation' && (
          <div className="flex items-center justify-center gap-2 mb-12">
            {['service', 'datetime', 'info'].map((s, idx) => (
              <div key={s} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all ${
                  step === s ? 'bg-sage-600 text-white scale-110' : 
                  ['service', 'datetime', 'info'].indexOf(step) > idx ? 'bg-sage-200 text-sage-700' : 
                  'bg-gray-200 text-gray-500'
                }`}>
                  {['service', 'datetime', 'info'].indexOf(step) > idx ? <Check className="w-5 h-5" strokeWidth={2.5} /> : idx + 1}
                </div>
                {idx < 2 && <div className={`w-12 h-0.5 mx-2 transition-colors ${
                  ['service', 'datetime', 'info'].indexOf(step) > idx ? 'bg-sage-300' : 'bg-gray-200'
                }`} />}
              </div>
            ))}
          </div>
        )}

        {/* STEPS CONTENT */}
        <AnimatePresence mode="wait">
          
          {/* STEP 1: SERVICE SELECTION */}
          {step === 'service' && (
            <motion.div
              key="service"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-serif font-semibold text-charcoal text-center mb-8">
                Choisissez votre service
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <button
                      key={service.name}
                      onClick={() => handleServiceSelect(service.name)}
                      className="group cursor-pointer p-6 rounded-2xl glass border border-sage-100 hover:border-sage-300 hover:shadow-lg transition-all text-left"
                    >
                      <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform"
                           style={{ backgroundColor: `${service.color}15` }}>
                        <Icon className="w-6 h-6" style={{ color: service.color }} strokeWidth={2} />
                      </div>
                      <h3 className="font-semibold text-charcoal mb-2">{service.name}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{service.desc}</p>
                      <div className="mt-4 inline-block px-3 py-1 rounded-full bg-sage-50 text-sage-700 text-xs font-medium">
                        {service.badge}
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* STEP 2: DATE & TIME */}
          {step === 'datetime' && (
            <motion.div
              key="datetime"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="text-center">
                <h2 className="text-2xl font-serif font-semibold text-charcoal mb-2">
                  Choisissez votre créneau
                </h2>
                <p className="text-gray-600">Service sélectionné : <span className="font-semibold text-sage-700">{selectedService}</span></p>
              </div>

              {/* DATE SELECTION */}
              <div className="space-y-4">
                <label className="block text-sm font-semibold text-charcoal mb-3">
                  <Calendar className="w-4 h-4 inline mr-2" strokeWidth={2} />
                  Date
                </label>
                <div className="grid grid-cols-7 gap-2">
                  {getNextDays().map((date) => {
                    const dateStr = date.toISOString().split('T')[0];
                    const isSelected = selectedDate === dateStr;
                    return (
                      <button
                        key={dateStr}
                        onClick={() => setSelectedDate(dateStr)}
                        className={`p-3 rounded-xl text-center transition-all ${
                          isSelected 
                            ? 'bg-sage-600 text-white shadow-md scale-105' 
                            : 'glass border border-sage-100 hover:border-sage-300 text-charcoal'
                        }`}
                      >
                        <div className="text-xs font-medium mb-1">{formatDate(date).split(' ')[0]}</div>
                        <div className="text-lg font-semibold">{date.getDate()}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* TIME SELECTION */}
              {selectedDate && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <label className="block text-sm font-semibold text-charcoal mb-3">
                    <Clock className="w-4 h-4 inline mr-2" strokeWidth={2} />
                    Heure
                  </label>
                  <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
                    {timeSlots.map((time) => {
                      const isSelected = selectedTime === time;
                      return (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`py-3 px-4 rounded-xl font-medium transition-all ${
                            isSelected 
                              ? 'bg-sage-600 text-white shadow-md' 
                              : 'glass border border-sage-100 hover:border-sage-300 text-charcoal'
                          }`}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              <div className="flex gap-4 pt-6">
                <button
                  onClick={() => setStep('service')}
                  className="flex-1 py-4 rounded-full glass border border-sage-200 font-semibold text-charcoal hover:bg-white transition-all"
                >
                  <ArrowLeft className="w-4 h-4 inline mr-2" strokeWidth={2} />
                  Retour
                </button>
                <button
                  onClick={handleDateTimeNext}
                  disabled={!selectedDate || !selectedTime}
                  className="flex-1 py-4 rounded-full bg-sage-600 text-white font-semibold hover:bg-sage-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  Continuer
                  <ArrowRight className="w-4 h-4 inline ml-2" strokeWidth={2} />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: USER INFO */}
          {step === 'info' && (
            <motion.div
              key="info"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="text-2xl font-serif font-semibold text-charcoal text-center mb-8">
                Vos coordonnées
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">Prénom</label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl glass border border-sage-200 focus:border-sage-400 focus:ring-2 focus:ring-sage-400/20 transition-all"
                      placeholder="Jean"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">Nom</label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl glass border border-sage-200 focus:border-sage-400 focus:ring-2 focus:ring-sage-400/20 transition-all"
                      placeholder="Dupont"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl glass border border-sage-200 focus:border-sage-400 focus:ring-2 focus:ring-sage-400/20 transition-all"
                    placeholder="jean.dupont@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-2">Téléphone</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl glass border border-sage-200 focus:border-sage-400 focus:ring-2 focus:ring-sage-400/20 transition-all"
                    placeholder="06 12 34 56 78"
                  />
                </div>

                <div className="flex gap-4 pt-6">
                  <button
                    type="button"
                    onClick={() => setStep('datetime')}
                    className="flex-1 py-4 rounded-full glass border border-sage-200 font-semibold text-charcoal hover:bg-white transition-all"
                  >
                    <ArrowLeft className="w-4 h-4 inline mr-2" strokeWidth={2} />
                    Retour
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-4 rounded-full bg-sage-600 text-white font-semibold hover:bg-sage-700 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? 'Confirmation...' : 'Confirmer la réservation'}
                    {!isSubmitting && <Check className="w-4 h-4" strokeWidth={2} />}
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* STEP 4: CONFIRMATION */}
          {step === 'confirmation' && (
            <motion.div
              key="confirmation"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-8 max-w-2xl mx-auto"
            >
              <div className="w-20 h-20 rounded-full bg-sage-100 mx-auto flex items-center justify-center">
                <Check className="w-10 h-10 text-sage-600" strokeWidth={2.5} />
              </div>

              <div>
                <h2 className="text-3xl font-serif font-semibold text-charcoal mb-4">
                  Réservation confirmée !
                </h2>
                <p className="text-lg text-gray-700">
                  Un email de confirmation vous a été envoyé à <span className="font-semibold text-sage-700">{formData.email}</span>
                </p>
              </div>

              <div className="glass rounded-2xl p-8 border border-sage-200 text-left space-y-4">
                <h3 className="font-semibold text-charcoal mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-sage-600" strokeWidth={2} />
                  Récapitulatif de votre session
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Service</span>
                    <span className="font-semibold text-charcoal">{selectedService}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date</span>
                    <span className="font-semibold text-charcoal">{formatDateFull(new Date(selectedDate))}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Heure</span>
                    <span className="font-semibold text-charcoal">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Nom</span>
                    <span className="font-semibold text-charcoal">{formData.firstName} {formData.lastName}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/" className="flex-1">
                  <button className="w-full py-4 rounded-full glass border border-sage-200 font-semibold text-charcoal hover:bg-white transition-all">
                    Retour à l&apos;accueil
                  </button>
                </Link>
                <button
                  onClick={resetBooking}
                  className="flex-1 py-4 rounded-full bg-sage-600 text-white font-semibold hover:bg-sage-700 transition-all"
                >
                  Nouvelle réservation
                </button>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}