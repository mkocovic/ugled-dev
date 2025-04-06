'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface CartItem {
  id: string;
  type: 'window' | 'door';
  options: {
    material: string;
    style?: string;
    hasRoletne?: boolean;
    hasKomarnici?: boolean;
    doorType?: 'ulazna' | 'sobna';
  };
  additionalFeatures: string[];
  quantity: number;
}

type UserType = 'individual' | 'company';

interface ContactFormData {
  userType: UserType;
  name: string;
  company?: string;
  email: string;
  phone: string;
  address: string;
  deliveryTime: string;
}

interface WebshopContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'id' | 'quantity'>) => void;
  removeFromCart: (id: string) => void;
  contactForm: ContactFormData;
  updateContactForm: (data: Partial<ContactFormData>) => void;
  resetState: () => void;
  canProceed: boolean;
}

const WebshopContext = createContext<WebshopContextType | undefined>(undefined);

export function WebshopProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [contactForm, setContactForm] = useState<ContactFormData>({
    userType: 'individual',
    name: '',
    email: '',
    phone: '',
    address: '',
    deliveryTime: ''
  });

  // Disable body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    resetState();
  };

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
      deliveryTime: ''
    });
    setCurrentStep(1);
  };

  const canProceed = (() => {
    if (currentStep === 1) return cart.length > 0;
    if (currentStep === 2) {
      const { name, email, phone, address, deliveryTime, userType, company } = contactForm;
      if (userType === 'company') {
        return name && email && phone && address && deliveryTime && company;
      }
      return name && email && phone && address && deliveryTime;
    }
    return true;
  })();

  return (
    <WebshopContext.Provider
      value={{
        isOpen,
        openModal,
        closeModal,
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
        canProceed
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