'use client';

<<<<<<< HEAD
import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
=======
import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20

interface CartItem {
  id: string;
  type: 'window' | 'door';
  options: {
    material: string;
    style?: string;
    hasRoletne?: boolean;
    hasKomarnici?: boolean;
<<<<<<< HEAD
    hasSpoljasnjeOkapnice?: boolean;
    hasUnutrasnjeOkapnice?: boolean;
    doorType?: 'ulazna' | 'sobna';
    lock?: string;
    handle?: string;
    woodOption?: string;
    dimensions: {
      width: number;
      height: number;
    };
=======
    doorType?: 'ulazna' | 'sobna';
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
  };
  additionalFeatures: string[];
  quantity: number;
}

type UserType = 'individual' | 'company';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  deliveryTime: string;
<<<<<<< HEAD
  message?: string;
=======
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
  userType: 'individual' | 'company';
  company?: string;
}

interface WebshopContextType {
  isModalOpen: boolean;
<<<<<<< HEAD
  isQuoteModalOpen: boolean;
=======
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
  openCartModal: () => void;
  closeCartModal: () => void;
  openQuoteModal: () => void;
  closeQuoteModal: () => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  cart: CartItem[];
<<<<<<< HEAD
  addToCart: (item: Omit<CartItem, 'id'>) => void;
=======
  addToCart: (item: Omit<CartItem, 'id' | 'quantity'>) => void;
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
  removeFromCart: (id: string) => void;
  contactForm: ContactFormData;
  updateContactForm: (data: Partial<ContactFormData>) => void;
  resetState: () => void;
  canProceed: boolean;
}

const WebshopContext = createContext<WebshopContextType | undefined>(undefined);

export function WebshopProvider({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
<<<<<<< HEAD
  const [currentStep, setCurrentStep] = useState(0);
=======
  const [currentStep, setCurrentStep] = useState(1);
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
  const [cart, setCart] = useState<CartItem[]>([]);
  const [contactForm, setContactForm] = useState<ContactFormData>({
    userType: 'individual',
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    deliveryTime: ''
  });

  // Disable body scroll when modal is open
  useEffect(() => {
    if (isModalOpen || isQuoteModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen, isQuoteModalOpen]);

<<<<<<< HEAD
  const openCartModal = () => {
    setIsModalOpen(true);
    setCurrentStep(0); // Resetujemo korak na 0 kada se modal otvori
  };

=======
  const openCartModal = () => setIsModalOpen(true);
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
  const closeCartModal = () => {
    setIsModalOpen(false);
    resetState();
  };

<<<<<<< HEAD
  const openQuoteModal = () => {
    setIsQuoteModalOpen(true);
    setCurrentStep(0); // Resetujemo korak na 0 kada se modal otvori
  };

=======
  const openQuoteModal = () => setIsQuoteModalOpen(true);
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
    resetState();
  };

<<<<<<< HEAD
  const canProceed = useMemo(() => {
    switch (currentStep) {
      case 0:
        // Na prvom koraku, proveravamo da li su izabrani proizvodi
        return cart.length > 0;
      case 1:
        // Na drugom koraku, proveravamo da li su popunjena sva obavezna polja
        return (
          contactForm.name.trim() !== '' &&
          contactForm.email.trim() !== '' &&
          contactForm.phone.trim() !== '' &&
          contactForm.address.trim() !== '' &&
          contactForm.city.trim() !== '' &&
          contactForm.postalCode.trim() !== '' &&
          contactForm.deliveryTime !== ''
        );
      case 2:
        // Na trećem koraku, proveravamo da li su svi podaci ispravno popunjeni
        return cart.length > 0 && 
          contactForm.name.trim() !== '' &&
          contactForm.email.trim() !== '' &&
          contactForm.phone.trim() !== '' &&
          contactForm.address.trim() !== '' &&
          contactForm.city.trim() !== '' &&
          contactForm.postalCode.trim() !== '' &&
          contactForm.deliveryTime !== '';
      default:
        return false;
    }
  }, [currentStep, cart.length, contactForm]);

  const nextStep = useCallback(() => {
    if (currentStep < 2 && canProceed) {
      setCurrentStep(prev => prev + 1);
    }
  }, [currentStep, canProceed]);

  const prevStep = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  }, [currentStep]);

  const addToCart = (item: Omit<CartItem, 'id'>) => {
    const newItem: CartItem = {
      ...item,
      id: Math.random().toString(36).substr(2, 9)
=======
  const nextStep = () => {
    if (currentStep === 1 && cart.length === 0) return;
    if (currentStep === 2 && !canProceed) return;
    setCurrentStep(prev => Math.min(prev + 1, 3));
  };

  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const addToCart = (item: Omit<CartItem, 'id' | 'quantity'>) => {
    const newItem: CartItem = {
      ...item,
      id: Math.random().toString(36).substr(2, 9),
      quantity: 1
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
    };
    setCart(prev => [...prev, newItem]);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateContactForm = (data: Partial<ContactFormData>) => {
    setContactForm(prev => ({ ...prev, ...data }));
  };

  const resetState = () => {
    setCart([]);
    setContactForm({
      userType: 'individual',
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      postalCode: '',
      deliveryTime: ''
    });
<<<<<<< HEAD
    setCurrentStep(0);
  };

=======
    setCurrentStep(1);
  };

  const canProceed = useMemo(() => {
    if (!cart.length) return false;
    if (!contactForm.name || !contactForm.email || !contactForm.phone) return false;
    if (!contactForm.address || !contactForm.city || !contactForm.postalCode) return false;
    return true;
  }, [cart, contactForm]);

>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
  return (
    <WebshopContext.Provider
      value={{
        isModalOpen,
<<<<<<< HEAD
        isQuoteModalOpen,
=======
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
        openCartModal,
        closeCartModal,
        openQuoteModal,
        closeQuoteModal,
        currentStep,
        setCurrentStep,
        nextStep,
        prevStep,
        cart,
        addToCart,
        removeFromCart,
        contactForm,
        updateContactForm,
        resetState,
        canProceed: Boolean(canProceed)
      }}
    >
      {children}
    </WebshopContext.Provider>
  );
}

export function useWebshop() {
  const context = useContext(WebshopContext);
  if (context === undefined) {
    throw new Error('useWebshop must be used within a WebshopProvider');
  }
  return context;
} 