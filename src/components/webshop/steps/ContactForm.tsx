'use client';

import React from 'react';
import { useWebshop } from '../WebshopContext';
import { Clock, Calendar, CalendarDays, User, Building2, Mail, Phone, MapPin } from 'lucide-react';

const DELIVERY_OPTIONS = [
  { 
    id: '2months', 
    label: 'Do 2 meseca', 
    description: 'Najbrže moguće isporučivanje',
    icon: <Clock size={20} className="text-[var(--glow-color)]" />
  },
  { 
    id: '3-6months', 
    label: '3-6 meseci', 
    description: 'Standardno vreme isporuke',
    icon: <Calendar size={20} className="text-[var(--glow-color)]" />
  },
  { 
    id: '6+months', 
    label: '6+ meseci', 
    description: 'Dugoročno planiranje',
    icon: <CalendarDays size={20} className="text-[var(--glow-color)]" />
  }
];

export default function ContactForm() {
  const { updateContactForm, contactForm } = useWebshop();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    updateContactForm({
      [name]: value
    });
  };

  return (
    <div className="space-y-6">
      {/* Tip korisnika */}
      <div className="bg-zinc-900/50 rounded-xl overflow-hidden">
        <div className="flex items-center gap-3 p-4 border-b border-zinc-800">
          <User className="w-5 h-5 text-[var(--glow-color)]" />
          <h3 className="text-base font-medium text-white">Tip korisnika</h3>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => updateContactForm({ userType: 'individual' })}
              className={`p-4 rounded-xl border transition-colors ${
                contactForm.userType === 'individual'
                  ? 'border-[var(--glow-color)] bg-[rgba(182,155,95,0.1)] text-white'
                  : 'border-zinc-800 hover:border-[var(--glow-color)] text-zinc-400'
              }`}
            >
              <div className="flex flex-col items-center gap-2">
                <User className="w-8 h-8" />
                <span className="text-sm font-medium">Fizičko lice</span>
              </div>
            </button>
            <button
              onClick={() => updateContactForm({ userType: 'company' })}
              className={`p-4 rounded-xl border transition-colors ${
                contactForm.userType === 'company'
                  ? 'border-[var(--glow-color)] bg-[rgba(182,155,95,0.1)] text-white'
                  : 'border-zinc-800 hover:border-[var(--glow-color)] text-zinc-400'
              }`}
            >
              <div className="flex flex-col items-center gap-2">
                <Building2 className="w-8 h-8" />
                <span className="text-sm font-medium">Pravno lice</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Kontakt informacije */}
      <div className="bg-zinc-900/50 rounded-xl overflow-hidden">
        <div className="flex items-center gap-3 p-4 border-b border-zinc-800">
          <Mail className="w-5 h-5 text-[var(--glow-color)]" />
          <h3 className="text-base font-medium text-white">Kontakt informacije</h3>
        </div>
        <div className="p-4 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm text-zinc-400 flex items-center gap-2">
                <User className="w-4 h-4" />
                {contactForm.userType === 'individual' ? 'Ime i prezime' : 'Ime kontakt osobe'}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={contactForm.name}
                onChange={handleChange}
                placeholder={contactForm.userType === 'individual' ? 'Unesite vaše ime i prezime' : 'Unesite ime kontakt osobe'}
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white text-sm focus:border-[var(--glow-color)] focus:outline-none focus:ring-1 focus:ring-[var(--glow-color)] transition-all"
                required
              />
            </div>
            {contactForm.userType === 'company' && (
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm text-zinc-400 flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  Naziv kompanije
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={contactForm.company}
                  onChange={handleChange}
                  placeholder="Unesite naziv kompanije"
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white text-sm focus:border-[var(--glow-color)] focus:outline-none focus:ring-1 focus:ring-[var(--glow-color)] transition-all"
                  required
                />
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-zinc-400 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={contactForm.email}
                onChange={handleChange}
                placeholder="Unesite vašu email adresu"
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white text-sm focus:border-[var(--glow-color)] focus:outline-none focus:ring-1 focus:ring-[var(--glow-color)] transition-all"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm text-zinc-400 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Telefon
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={contactForm.phone}
                onChange={handleChange}
                placeholder="Unesite vaš broj telefona"
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white text-sm focus:border-[var(--glow-color)] focus:outline-none focus:ring-1 focus:ring-[var(--glow-color)] transition-all"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="address" className="text-sm text-zinc-400 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Adresa
            </label>
            <textarea
              id="address"
              name="address"
              value={contactForm.address}
              onChange={handleChange}
              placeholder="Unesite vašu adresu"
              rows={3}
              className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white text-sm focus:border-[var(--glow-color)] focus:outline-none focus:ring-1 focus:ring-[var(--glow-color)] transition-all resize-none"
              required
            />
          </div>
        </div>
      </div>

      {/* Vreme isporuke */}
      <div className="bg-zinc-900/50 rounded-xl overflow-hidden">
        <div className="flex items-center gap-3 p-4 border-b border-zinc-800">
          <Clock className="w-5 h-5 text-[var(--glow-color)]" />
          <h3 className="text-base font-medium text-white">Vreme isporuke</h3>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {DELIVERY_OPTIONS.map(option => (
              <button
                key={option.id}
                onClick={() => updateContactForm({ deliveryTime: option.id })}
                className={`p-4 rounded-xl border transition-colors ${
                  contactForm.deliveryTime === option.id
                    ? 'border-[var(--glow-color)] bg-[rgba(182,155,95,0.1)] text-white'
                    : 'border-zinc-800 hover:border-[var(--glow-color)] text-zinc-400'
                }`}
              >
                <div className="flex flex-col items-center gap-2">
                  {option.icon}
                  <span className="text-sm font-medium">{option.label}</span>
                  <span className="text-xs text-zinc-500">{option.description}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 