'use client';

<<<<<<< HEAD
import React, { useState } from 'react';
import { useWebshop } from '../WebshopContext';
import { ShoppingCart, User, Building, Mail, Phone, MapPin, ChevronRight, Send, Clock, X, MessageSquare } from 'lucide-react';
import { DELIVERY_OPTIONS } from './ContactForm';

interface DeliveryOption {
  id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

export default function Submission() {
  const { cart, contactForm, currentStep, setCurrentStep, resetState, closeQuoteModal } = useWebshop();
  const { userType, name, email, phone, address, city, postalCode, company, deliveryTime, message } = contactForm;
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/send-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cart,
          contactForm,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send quote');
      }

      setShowSuccessModal(true);
    } catch (error) {
      console.error('Error sending quote:', error);
      // You might want to show an error message to the user here
    }
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    resetState();
    closeQuoteModal();
  };

  return (
    <>
      <div className="space-y-6">
        {/* Pregled korpe */}
        <div className="bg-zinc-900/50 rounded-xl overflow-hidden">
          <div className="flex items-center gap-3 p-4 border-b border-zinc-800">
            <ShoppingCart className="w-5 h-5 text-[var(--glow-color)]" />
            <h3 className="text-base font-medium text-white">Pregled korpe</h3>
          </div>
          <div className="p-4 space-y-4">
            {cart.map((item, index) => (
              <div key={index} className="flex items-start justify-between gap-4 p-4 bg-zinc-800/50 rounded-lg">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-white">
                      {item.type === 'window' ? 'Prozor' : (item.options.doorType === 'ulazna' ? 'Ulazna Vrata' : 'Sobna Vrata')} - {item.options.material}
                    </span>
                    {item.options.style && (
                      <span className="text-sm text-zinc-400">({item.options.style})</span>
                    )}
                  </div>
                  {item.options.dimensions && (
                    <div className="text-sm text-zinc-400">
                      Dimenzije: {item.options.dimensions.width}cm x {item.options.dimensions.height}cm
                    </div>
                  )}
                  {item.options.hasRoletne && (
                    <div className="text-sm text-zinc-400">+ Roletne</div>
                  )}
                  {item.options.hasKomarnici && (
                    <div className="text-sm text-zinc-400">+ Komarnici</div>
                  )}
                  {item.options.doorType && (
                    <div className="text-sm text-zinc-400">
                      Tip: {item.options.doorType === 'ulazna' ? 'Ulazna vrata' : 'Sobna vrata'}
                    </div>
                  )}
                  {item.options.lock && (
                    <div className="text-sm text-zinc-400">Brava: {item.options.lock}</div>
                  )}
                  {item.options.handle && (
                    <div className="text-sm text-zinc-400">Kvaka: {item.options.handle}</div>
                  )}
                </div>
                <div className="text-sm font-medium text-white">
                  {item.quantity} kom
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kontakt informacije */}
        <div className="bg-zinc-900/50 rounded-xl overflow-hidden">
          <div className="flex items-center gap-3 p-4 border-b border-zinc-800">
            {userType === 'individual' ? (
              <User className="w-5 h-5 text-[var(--glow-color)]" />
            ) : (
              <Building className="w-5 h-5 text-[var(--glow-color)]" />
            )}
            <h3 className="text-base font-medium text-white">
              {userType === 'individual' ? 'Fizičko lice' : 'Pravno lice'}
            </h3>
          </div>
          <div className="p-4 space-y-4">
            {userType === 'individual' ? (
              <>
                <div className="flex items-center gap-3 text-zinc-400">
                  <User className="w-5 h-5" />
                  <span>{name}</span>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center gap-3 text-zinc-400">
                  <Building className="w-5 h-5" />
                  <span>{company}</span>
                </div>
              </>
            )}
            <div className="flex items-center gap-3 text-zinc-400">
              <Mail className="w-5 h-5" />
              <span>{email}</span>
            </div>
            <div className="flex items-center gap-3 text-zinc-400">
              <Phone className="w-5 h-5" />
              <span>{phone}</span>
            </div>
            <div className="flex items-center gap-3 text-zinc-400">
              <MapPin className="w-5 h-5" />
              <span>{address}, {city} {postalCode}</span>
            </div>
            {deliveryTime && (
              <div className="flex items-center gap-3 text-zinc-400">
                <Clock className="w-5 h-5" />
                <span>Vreme isporuke: {DELIVERY_OPTIONS.find((opt: DeliveryOption) => opt.id === deliveryTime)?.label}</span>
              </div>
            )}
            {message && (
              <div className="flex items-start gap-3 text-zinc-400">
                <MessageSquare className="w-5 h-5 mt-1 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <span className="font-medium">Dodatna poruka:</span>
                  <p className="mt-1 whitespace-pre-wrap break-words">{message}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Dugme za slanje upita */}
        <button
          onClick={handleSubmit}
          className="w-full py-3 bg-[var(--glow-color)] text-white rounded-lg font-medium hover:bg-[var(--glow-color)]/90 transition-colors flex items-center justify-center gap-2"
        >
          Pošalji upit
          <Send className="w-5 h-5" />
        </button>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm" 
            onClick={handleCloseSuccessModal}
            aria-hidden="true"
          />
          
          <div className="relative w-full max-w-[480px] bg-[var(--bg-color)] rounded-lg overflow-hidden glass-effect">
            <div className="flex items-center justify-between p-4 border-b border-zinc-800 bg-zinc-900/50">
              <h3 className="text-lg font-medium text-white">Uspešno poslat upit</h3>
              <button
                onClick={handleCloseSuccessModal}
                className="text-zinc-400 hover:text-[var(--glow-color)] transition-colors p-2 rounded-full hover:bg-zinc-800"
                aria-label="Zatvori"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 text-center">
              <p className="text-white mb-4">Vaš upit je uspešno poslat. Kontaktiraćemo vas u najkraćem mogućem roku.</p>
              <button
                onClick={handleCloseSuccessModal}
                className="px-4 py-2 bg-[var(--glow-color)] text-white rounded-lg font-medium hover:bg-[var(--glow-color)]/90 transition-colors"
              >
                Zatvori
              </button>
            </div>
          </div>
        </div>
      )}
    </>
=======
import React from 'react';
import { useWebshop } from '../WebshopContext';
import { Wind, DoorOpen, Sun, Bug, User, Mail, Phone, MapPin, Building2, Send } from 'lucide-react';

export default function Submission() {
  const { cart, contactForm } = useWebshop();

  return (
    <div className="space-y-6">
      {/* Proizvodi */}
      <div className="bg-zinc-900/50 rounded-xl overflow-hidden">
        <div className="flex items-center gap-3 p-4 border-b border-zinc-800">
          <h3 className="text-base font-medium text-white">Proizvodi</h3>
        </div>
        <div className="p-4">
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="bg-zinc-900/50 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-4">
                  {item.type === 'window' ? (
                    <Wind size={20} className="text-[var(--glow-color)]" />
                  ) : (
                    <DoorOpen size={20} className="text-[var(--glow-color)]" />
                  )}
                  <h4 className="text-base font-medium text-white">
                    {item.type === 'window' ? 'Prozor' : 'Vrata'}
                    {item.options.doorType && ` - ${item.options.doorType}`}
                  </h4>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-400">Materijal:</span>
                    <span className="text-white">{item.options.material}</span>
                  </div>
                  {item.options.style && (
                    <div className="flex items-center gap-2">
                      <span className="text-zinc-400">Stil:</span>
                      <span className="text-white">{item.options.style}</span>
                    </div>
                  )}
                  {(item.options.hasRoletne || item.options.hasKomarnici) && (
                    <div className="flex items-center gap-2">
                      <span className="text-zinc-400">Dodatne opcije:</span>
                      <div className="flex items-center gap-3">
                        {item.options.hasRoletne && (
                          <span className="flex items-center gap-2 text-white">
                            <Sun size={16} className="text-[var(--glow-color)]" />
                            Sa roletnama
                          </span>
                        )}
                        {item.options.hasKomarnici && (
                          <span className="flex items-center gap-2 text-white">
                            <Bug size={16} className="text-[var(--glow-color)]" />
                            Sa komarnicima
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-400">Količina:</span>
                    <span className="text-white">{item.quantity}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Kontakt informacije */}
      <div className="bg-zinc-900/50 rounded-xl overflow-hidden">
        <div className="flex items-center gap-3 p-4 border-b border-zinc-800">
          <h3 className="text-base font-medium text-white">Kontakt informacije</h3>
        </div>
        <div className="p-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <User size={20} className="text-[var(--glow-color)]" />
              <div>
                <div className="text-sm text-zinc-400">Ime i prezime</div>
                <div className="text-white">{contactForm.name}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={20} className="text-[var(--glow-color)]" />
              <div>
                <div className="text-sm text-zinc-400">Email</div>
                <div className="text-white">{contactForm.email}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={20} className="text-[var(--glow-color)]" />
              <div>
                <div className="text-sm text-zinc-400">Telefon</div>
                <div className="text-white">{contactForm.phone}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={20} className="text-[var(--glow-color)]" />
              <div>
                <div className="text-sm text-zinc-400">Adresa</div>
                <div className="text-white">{contactForm.address}</div>
              </div>
            </div>
            {contactForm.message && (
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[var(--glow-color)]" />
                </div>
                <div>
                  <div className="text-sm text-zinc-400">Dodatna poruka</div>
                  <div className="text-white">{contactForm.message}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Dugme za slanje */}
      <button
        onClick={() => {/* TODO: Implementirati slanje porudžbine */}}
        className="w-full px-6 py-3 rounded-full text-white bg-[var(--glow-color)] hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2 text-sm font-medium"
      >
        <Send size={16} />
        <span>Pošalji porudžbinu</span>
      </button>
    </div>
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
  );
} 