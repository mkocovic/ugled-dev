'use client';

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
  );
} 