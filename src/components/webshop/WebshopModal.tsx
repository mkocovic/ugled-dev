'use client';

import React, { useState, useCallback } from 'react';
import { X, Trash2, ShoppingCart, ArrowRight, ArrowLeft, Wind, DoorOpen, Sun, Bug } from 'lucide-react';
import { useWebshop } from './WebshopContext';
import ProductSelection from './steps/ProductSelection';
import ContactForm from './steps/ContactForm';
import Submission from './steps/Submission';

export default function WebshopModal() {
  const { isOpen, closeModal, currentStep, cart, removeFromCart, nextStep, prevStep, canProceed } = useWebshop();
  const [showCart, setShowCart] = useState(false);

  const handleClose = useCallback(() => {
    if (currentStep > 1) {
      if (window.confirm('Da li ste sigurni da želite da zatvorite formu? Vaši podaci će biti izgubljeni.')) {
        closeModal();
        setShowCart(false);
      }
    } else {
      closeModal();
      setShowCart(false);
    }
  }, [closeModal, currentStep]);

  const handleCartClose = useCallback(() => {
    setShowCart(false);
  }, []);

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 z-[100] flex items-center justify-center p-0"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm" 
          onClick={handleClose}
          aria-hidden="true"
        />
        
        <div 
          className="relative w-full max-w-[480px] md:max-w-[720px] h-full sm:h-auto sm:max-h-[90vh] bg-[var(--bg-color)] flex flex-col rounded-lg overflow-hidden glass-effect"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-zinc-800 bg-zinc-900/50">
            <div className="flex items-center gap-4">
              {currentStep > 1 && (
                <button
                  onClick={prevStep}
                  className="text-zinc-400 hover:text-[var(--glow-color)] transition-colors p-2 rounded-full hover:bg-zinc-800"
                  aria-label="Nazad"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
              )}
              <h2 id="modal-title" className="text-lg font-medium text-white">
                {currentStep === 1 && 'Izaberite proizvode'}
                {currentStep === 2 && 'Kontakt informacije'}
                {currentStep === 3 && 'Pregled upita'}
              </h2>
            </div>
            <button
              onClick={handleClose}
              className="text-zinc-400 hover:text-[var(--glow-color)] transition-colors p-2 rounded-full hover:bg-zinc-800"
              aria-label="Zatvori"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            <div className="p-4">
              {currentStep === 1 && <ProductSelection />}
              {currentStep === 2 && <ContactForm />}
              {currentStep === 3 && <Submission />}
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-zinc-800 p-4 bg-zinc-900/50">
            <div className="flex justify-between items-center">
              {/* Cart button */}
              {currentStep < 3 && (
                <button
                  onClick={() => setShowCart(!showCart)}
                  className="relative p-2 rounded-full text-white hover:bg-zinc-800 transition-colors"
                  aria-label={`Korpa (${cart.length} proizvoda)`}
                  aria-expanded={showCart}
                  aria-controls="cart-modal"
                >
                  <ShoppingCart className="w-5 h-5" />
                  {cart.length > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-[var(--glow-color)] rounded-full flex items-center justify-center text-xs">
                      {cart.length}
                    </span>
                  )}
                </button>
              )}

              {/* Next step button */}
              {currentStep < 3 && (
                <button
                  onClick={nextStep}
                  disabled={!canProceed}
                  className={`px-6 py-3 rounded-full text-white transition-colors flex items-center gap-2 text-sm font-medium ${
                    !canProceed
                      ? 'bg-zinc-800 cursor-not-allowed'
                      : 'bg-[var(--glow-color)] hover:bg-white hover:text-black'
                  }`}
                  aria-disabled={!canProceed}
                >
                  <span>
                    {currentStep === 1 ? 'Kontakt informacije' : 'Pregled upita'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Cart modal - moved outside main modal */}
      {showCart && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center p-0"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cart-title"
          id="cart-modal"
        >
          <div 
            className="fixed inset-0 bg-black/90 backdrop-blur-md" 
            onClick={handleCartClose}
            aria-hidden="true"
          />
          
          <div 
            className="relative w-full max-w-[480px] h-full sm:h-auto sm:max-h-[80vh] bg-[var(--bg-color)] flex flex-col rounded-lg overflow-hidden glass-effect shadow-2xl"
          >
            {/* Cart header */}
            <div className="flex items-center justify-between p-4 border-b border-zinc-800 bg-zinc-900/50">
              <div className="flex items-center gap-3">
                <ShoppingCart className="w-5 h-5 text-[var(--glow-color)]" />
                <h3 id="cart-title" className="text-lg font-medium text-white">Korpa</h3>
              </div>
              <button
                onClick={handleCartClose}
                className="text-zinc-400 hover:text-[var(--glow-color)] transition-colors p-2 rounded-full hover:bg-zinc-800"
                aria-label="Zatvori korpu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar">
              <div className="p-4">
                {cart.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-12 text-zinc-400">
                    <ShoppingCart className="w-10 h-10 mb-4" />
                    <p className="text-base">Vaša korpa je prazna</p>
                  </div>
                ) : (
                  <ul className="space-y-4" role="list">
                    {cart.map((item) => (
                      <li key={item.id} className="bg-zinc-900/50 rounded-xl p-4 glass-effect" role="listitem">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex items-center gap-3">
                            {item.type === 'window' ? (
                              <Wind className="w-5 h-5 text-[var(--glow-color)]" />
                            ) : (
                              <DoorOpen className="w-5 h-5 text-[var(--glow-color)]" />
                            )}
                            <h4 className="text-base font-medium text-white">
                              {item.type === 'window' ? 'Prozor' : 'Vrata'}
                              {item.options.doorType && ` - ${item.options.doorType}`}
                            </h4>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-zinc-400 hover:text-red-400 transition-colors p-2 rounded-full hover:bg-zinc-800"
                            aria-label="Ukloni iz korpe"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
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
                                    <Sun className="w-4 h-4 text-[var(--glow-color)]" />
                                    Sa roletnama
                                  </span>
                                )}
                                {item.options.hasKomarnici && (
                                  <span className="flex items-center gap-2 text-white">
                                    <Bug className="w-4 h-4 text-[var(--glow-color)]" />
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
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 