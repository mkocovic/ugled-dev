'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useWebshop } from '../WebshopContext';
import { 
  ShoppingCart, 
  ChevronDown, 
  ChevronUp, 
  Wind, 
  DoorOpen, 
  TreePine, 
  Package, 
  Medal, 
  ChevronRight,
  Sun,
  Bug,
  Plus,
  Minus,
  Lock
} from 'lucide-react';

interface ProductOption {
  id: string;
  label: string;
  icon?: React.ReactNode;
  icons?: React.ReactNode[];
  description?: string;
}

type ProductType = 'window' | 'door';
type DoorType = 'ulazna' | 'sobna';
type DoorStyle = 'Jednokrilna' | 'Dvokrilna' | 'Jednokrilna sa prepustom';
type LockType = 'Sistem sa tri brave' | 'Sigurnosno' | 'Standardno';
type HandleType = 'Kvaka' | 'Okrugla kvaka';

interface Dimensions {
  width: number;
  height: number;
}

interface ProductOptions {
  material: string;
  style?: string;
  hasRoletne?: boolean;
  hasKomarnici?: boolean;
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
}

const isWindow = (type: ProductType): type is 'window' => type === 'window';
const isDoor = (type: ProductType): type is 'door' => type === 'door';

const MATERIAL_OPTIONS = {
  window: [
    {
      id: 'Drvo',
      label: 'Drvo',
      icon: <TreePine className="w-5 h-5 text-[var(--glow-color)]" />
    },
    {
      id: 'PVC',
      label: 'PVC',
      icon: <Package className="w-5 h-5 text-[var(--glow-color)]" />
    },
    {
      id: 'Alu-drvo',
      label: 'Alu-drvo',
      icon: <div className="flex items-center gap-1">
        <TreePine className="w-5 h-5 text-[var(--glow-color)]" />
        <Medal className="w-5 h-5 text-[var(--glow-color)]" />
      </div>
    },
    {
      id: 'Aluminijum',
      label: 'Aluminijum',
      icon: <Medal className="w-5 h-5 text-[var(--glow-color)]" />
    }
  ] as ProductOption[],
  door: {
    ulazna: [
      {
        id: 'PVC',
        label: 'PVC',
        icon: <Package className="w-5 h-5 text-[var(--glow-color)]" />
      },
      {
        id: 'Aluminijum',
        label: 'Aluminijum',
        icon: <Medal className="w-5 h-5 text-[var(--glow-color)]" />
      },
      {
        id: 'Drvo',
        label: 'Drvo',
        icon: <TreePine className="w-5 h-5 text-[var(--glow-color)]" />
      },
      {
        id: 'Alu-drvo',
        label: 'Alu-drvo',
        icon: <div className="flex items-center gap-1">
          <TreePine className="w-5 h-5 text-[var(--glow-color)]" />
          <Medal className="w-5 h-5 text-[var(--glow-color)]" />
        </div>
      }
    ] as ProductOption[],
    sobna: [
      {
        id: 'Drvo',
        label: 'Drvo',
        icon: <TreePine className="w-5 h-5 text-[var(--glow-color)]" />
      },
      {
        id: 'PVC',
        label: 'PVC',
        icon: <Package className="w-5 h-5 text-[var(--glow-color)]" />
      }
    ] as ProductOption[]
  }
} as const;

const DOOR_STYLE_OPTIONS: ProductOption[] = [
  {
    id: 'Jednokrilna',
    label: 'Jednokrilna',
    icon: <DoorOpen className="w-5 h-5 text-[var(--glow-color)]" />
  },
  {
    id: 'Jednokrilna sa fiksom',
    label: 'Jednokrilna sa fiksom',
    icon: <DoorOpen className="w-5 h-5 text-[var(--glow-color)]" />
  },
  {
    id: 'Dvokrilna',
    label: 'Dvokrilna',
    icon: <DoorOpen className="w-5 h-5 text-[var(--glow-color)]" />
  }
];

const LOCK_OPTIONS: ProductOption[] = [
  {
    id: 'Jedna tacka',
    label: 'Jedna tačka',
    icon: <Lock className="w-5 h-5 text-[var(--glow-color)]" />
  },
  {
    id: 'Tri tacke',
    label: 'Tri tačke',
    icon: <Lock className="w-5 h-5 text-[var(--glow-color)]" />
  }
];

const HANDLE_OPTIONS = {
  ulazna: [
    {
      id: 'rukokhvat',
      label: 'Rukohvat',
      icon: <DoorOpen className="w-5 h-5 text-[var(--glow-color)]" />
    },
    {
      id: 'kvaka',
      label: 'Kvaka',
      icon: <DoorOpen className="w-5 h-5 text-[var(--glow-color)]" />
    },
    {
      id: 'kugla',
      label: 'Kugla',
      icon: <DoorOpen className="w-5 h-5 text-[var(--glow-color)]" />
    }
  ],
  sobna: [
    {
      id: 'kvaka',
      label: 'Kvaka',
      icon: <DoorOpen className="w-5 h-5 text-[var(--glow-color)]" />
    },
    {
      id: 'kugla',
      label: 'Kugla',
      icon: <DoorOpen className="w-5 h-5 text-[var(--glow-color)]" />
    }
  ]
};

const STYLE_OPTIONS: ProductOption[] = [
  {
    id: 'Jednokrilni',
    label: 'Jednokrilni',
    icon: <DoorOpen className="w-5 h-5 text-[var(--glow-color)]" />
  },
  {
    id: 'Dvokrilni',
    label: 'Dvokrilni',
    icon: <DoorOpen className="w-5 h-5 text-[var(--glow-color)]" />
  },
  {
    id: 'Trokrilni',
    label: 'Trokrilni',
    icon: <DoorOpen className="w-5 h-5 text-[var(--glow-color)]" />
  },
  {
    id: 'Fiksni',
    label: 'Fiksni',
    icon: <DoorOpen className="w-5 h-5 text-[var(--glow-color)]" />
  }
];

const WOOD_OPTIONS: ProductOption[] = [
  {
    id: 'folija',
    label: 'Folija',
    icon: <TreePine className="w-5 h-5 text-[var(--glow-color)]" />
  },
  {
    id: 'medijapan',
    label: 'Medijapan',
    icon: <TreePine className="w-5 h-5 text-[var(--glow-color)]" />
  },
  {
    id: 'furnir',
    label: 'Furnir',
    icon: <TreePine className="w-5 h-5 text-[var(--glow-color)]" />
  },
  {
    id: 'craftmaster',
    label: 'Craftmaster',
    icon: <TreePine className="w-5 h-5 text-[var(--glow-color)]" />
  },
  {
    id: 'puno-drvo',
    label: 'Puno drvo',
    icon: <TreePine className="w-5 h-5 text-[var(--glow-color)]" />
  }
];

const ADDITIONAL_OPTIONS: ProductOption[] = [
  {
    id: 'Roletne',
    label: 'Roletne',
    icon: <Sun className="w-5 h-5 text-[var(--glow-color)]" />
  },
  {
    id: 'Komarnici',
    label: 'Komarnici',
    icon: <Bug className="w-5 h-5 text-[var(--glow-color)]" />
  },
  {
    id: 'Spoljasnje-okapnice',
    label: 'Spoljašnje okapnice',
    icon: <Sun className="w-5 h-5 text-[var(--glow-color)]" />
  },
  {
    id: 'Unutrasnje-okapnice',
    label: 'Unutrašnje okapnice',
    icon: <Sun className="w-5 h-5 text-[var(--glow-color)]" />
  }
];

export default function ProductSelection() {
  const { addToCart } = useWebshop();
  const [selectedType, setSelectedType] = useState<ProductType | null>(null);
  const [selectedDoorType, setSelectedDoorType] = useState<DoorType | null>(null);
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [selectedLock, setSelectedLock] = useState<string | null>(null);
  const [selectedHandle, setSelectedHandle] = useState<string | null>(null);
  const [selectedLockType, setSelectedLockType] = useState<string | null>(null);
  const [dimensions, setDimensions] = useState<Dimensions>({ width: 0, height: 0 });
  const [quantity, setQuantity] = useState(1);
  const [hasRoletne, setHasRoletne] = useState(false);
  const [hasKomarnici, setHasKomarnici] = useState(false);
  const [hasSpoljasnjeOkapnice, setHasSpoljasnjeOkapnice] = useState(false);
  const [hasUnutrasnjeOkapnice, setHasUnutrasnjeOkapnice] = useState(false);
  const [selectedWoodOption, setSelectedWoodOption] = useState<string | null>(null);

  // Refs for each section
  const materialRef = useRef<HTMLDivElement>(null);
  const styleRef = useRef<HTMLDivElement>(null);
  const dimensionsRef = useRef<HTMLDivElement>(null);
  const additionalOptionsRef = useRef<HTMLDivElement>(null);
  const doorTypeRef = useRef<HTMLDivElement>(null);
  const doorStyleRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const lockRef = useRef<HTMLDivElement>(null);
  const quantityRef = useRef<HTMLDivElement>(null);

  // Function to smoothly scroll to an element
  const scrollToElement = (element: HTMLElement | null) => {
    if (element) {
      // Find the modal container
      const modal = element.closest('.modal-content');
      if (modal) {
        // Calculate the position relative to modal
        const modalRect = modal.getBoundingClientRect();
        const elementRect = element.getBoundingClientRect();
        const scrollTop = elementRect.top - modalRect.top + modal.scrollTop;
        
        // Smooth scroll within modal
        modal.scrollTo({
          top: scrollTop,
          behavior: 'smooth'
        });
      }
    }
  };

  // Scroll to next visible section
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    if (selectedType === 'window') {
      if (selectedMaterial && !selectedStyle) {
        timeoutId = setTimeout(() => scrollToElement(styleRef.current), 100);
      } else if (selectedStyle && !dimensions.width) {
        timeoutId = setTimeout(() => scrollToElement(dimensionsRef.current), 100);
      } else if (dimensions.width > 0 && dimensions.height > 0 && !hasRoletne) {
        timeoutId = setTimeout(() => scrollToElement(additionalOptionsRef.current), 100);
      } else if (hasRoletne) {
        // Scroll to bottom of modal when last option is selected
        timeoutId = setTimeout(() => {
          const modal = document.querySelector('.modal-content');
          if (modal) {
            modal.scrollTo({
              top: modal.scrollHeight,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    } else if (selectedType === 'door') {
      if (selectedDoorType && !selectedMaterial) {
        timeoutId = setTimeout(() => scrollToElement(materialRef.current), 100);
      } else if (selectedMaterial && selectedDoorType === 'ulazna' && !selectedStyle) {
        timeoutId = setTimeout(() => scrollToElement(doorStyleRef.current), 100);
      } else if ((selectedStyle || selectedMaterial) && !dimensions.width) {
        timeoutId = setTimeout(() => scrollToElement(dimensionsRef.current), 100);
      } else if (dimensions.width > 0 && dimensions.height > 0 && !selectedHandle) {
        timeoutId = setTimeout(() => scrollToElement(handleRef.current), 100);
      } else if (selectedHandle && selectedDoorType === 'ulazna' && !selectedLock) {
        timeoutId = setTimeout(() => scrollToElement(lockRef.current), 100);
      } else if ((selectedDoorType === 'ulazna' && selectedLock) || 
                 (selectedDoorType === 'sobna' && selectedHandle)) {
        // Scroll to bottom of modal when last option is selected
        timeoutId = setTimeout(() => {
          const modal = document.querySelector('.modal-content');
          if (modal) {
            modal.scrollTo({
              top: modal.scrollHeight,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [selectedType, selectedDoorType, selectedMaterial, selectedStyle, dimensions, selectedHandle, selectedLock, hasRoletne]);

  // Reset state when product type changes
  const handleTypeChange = (type: ProductType) => {
    setSelectedType(type);
    setSelectedDoorType(null);
    setSelectedMaterial(null);
    setSelectedStyle(null);
    setSelectedLock(null);
    setSelectedHandle(null);
    setSelectedLockType(null);
    setDimensions({ width: 0, height: 0 });
    setQuantity(1);
    setHasRoletne(false);
    setHasKomarnici(false);
    setHasSpoljasnjeOkapnice(false);
    setHasUnutrasnjeOkapnice(false);
    setSelectedWoodOption(null);
    
    // Scroll to material section after type selection
    setTimeout(() => {
      scrollToElement(materialRef.current);
    }, 100);
  };

  // Handle door type selection
  const handleDoorTypeSelect = (type: DoorType) => {
    setSelectedDoorType(type);
    setSelectedMaterial(null);
    setSelectedStyle(null);
    setSelectedLock(null);
    setSelectedHandle(null);
    setSelectedLockType(null);
    setDimensions({ width: 0, height: 0 });
    setQuantity(1);
    setSelectedWoodOption(null);
  };

  // Handle material selection
  const handleMaterialSelect = (material: string) => {
    setSelectedMaterial(material);
    if (selectedDoorType === 'ulazna') {
      setSelectedStyle(null);
    }
    setSelectedWoodOption(null);
  };

  // Handle style selection
  const handleStyleSelect = (style: string) => {
    setSelectedStyle(style);
  };

  // Handle handle selection
  const handleHandleSelect = (handle: string) => {
    setSelectedHandle(handle);
    if (selectedDoorType === 'ulazna') {
      setSelectedLockType(null);
    }
  };

  // Handle lock selection
  const handleLockSelect = (lock: string) => {
    setSelectedLockType(lock);
  };

  // Handle wood option selection
  const handleWoodOptionSelect = (option: string) => {
    setSelectedWoodOption(option);
  };

  // Handle dimensions input with validation
  const handleDimensionsChange = (dimension: 'width' | 'height', value: string) => {
    const numericValue = value.replace(/[^0-9]/g, '').slice(0, 5);
    const numValue = parseInt(numericValue);
    if (numericValue === '' || numValue >= 0) {
      setDimensions(prev => ({ ...prev, [dimension]: numValue }));
    }
  };

  // Handle quantity input
  const handleQuantityChange = (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, '');
    const numValue = parseInt(numericValue);
    if (numericValue === '') {
      setQuantity(1);
    } else {
      setQuantity(numValue);
    }
  };

  // Handle quantity increment/decrement
  const handleQuantityAdjust = (delta: number) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    if (!selectedType || !selectedMaterial) return;
    
    // Validacija za prozore
    if (isWindow(selectedType) && (!selectedStyle || dimensions.width === 0 || dimensions.height === 0)) {
      return;
    }
    
    // Validacija za vrata
    if (isDoor(selectedType)) {
      if (!selectedDoorType) return;
      
      if (selectedDoorType === 'ulazna') {
        if (!selectedStyle || !selectedLockType || !selectedHandle || dimensions.width === 0 || dimensions.height === 0) {
          return;
        }
      } else if (selectedDoorType === 'sobna') {
        if (!selectedHandle || dimensions.width === 0 || dimensions.height === 0) {
          return;
        }
      }
    }
    
    const doorType = selectedType === 'door' && selectedDoorType ? selectedDoorType as 'ulazna' | 'sobna' : undefined;
    const style = selectedStyle || undefined;
    const lock = selectedLockType || undefined;
    const handle = selectedHandle || undefined;

    addToCart({
      type: selectedType,
      options: {
        material: selectedMaterial,
        style,
        doorType,
        lock,
        handle,
        hasRoletne,
        hasKomarnici,
        hasSpoljasnjeOkapnice,
        hasUnutrasnjeOkapnice,
        woodOption: selectedWoodOption || undefined,
        dimensions
      },
      quantity: quantity,
      additionalFeatures: []
    });
    
    // Reset form after adding to cart
    handleTypeChange(selectedType);
  };

  const renderOptionButton = (option: ProductOption, isSelected: boolean, onClick: () => void) => (
    <div className="flex flex-col items-center gap-2">
      {option.icon}
      <span className="text-sm font-medium">{option.label}</span>
      <span className="text-xs text-zinc-500">{option.description}</span>
    </div>
  );

  const getMaterialOptions = () => {
    if (selectedType === 'window') {
      return MATERIAL_OPTIONS.window;
    } else if (selectedType === 'door' && selectedDoorType) {
      return MATERIAL_OPTIONS.door[selectedDoorType];
    }
    return [];
  };

  return (
    <div className="space-y-6">
      {/* Tip proizvoda */}
      <div className="bg-zinc-900/50 rounded-xl overflow-hidden">
        <div className="flex items-center gap-3 p-4 border-b border-zinc-800">
          <h3 className="text-base font-medium text-white">Tip proizvoda</h3>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => handleTypeChange('window')}
              className={`p-4 rounded-xl border transition-colors ${
                selectedType === 'window'
                  ? 'border-[var(--glow-color)] bg-[rgba(182,155,95,0.1)] text-white'
                  : 'border-zinc-800 hover:border-[var(--glow-color)] text-zinc-400'
              }`}
            >
              <div className="flex flex-col items-center gap-2">
                <Wind size={24} />
                <span className="text-sm font-medium">Prozor</span>
              </div>
            </button>
            <button
              onClick={() => handleTypeChange('door')}
              className={`p-4 rounded-xl border transition-colors ${
                selectedType === 'door'
                  ? 'border-[var(--glow-color)] bg-[rgba(182,155,95,0.1)] text-white'
                  : 'border-zinc-800 hover:border-[var(--glow-color)] text-zinc-400'
              }`}
            >
              <div className="flex flex-col items-center gap-2">
                <DoorOpen size={24} />
                <span className="text-sm font-medium">Vrata</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {selectedType === 'window' && (
        <>
          {/* Materijal za prozore */}
          <div ref={materialRef} className="bg-zinc-900/50 rounded-xl overflow-hidden">
            <div className="flex items-center gap-3 p-4 border-b border-zinc-800">
              <h3 className="text-base font-medium text-white">Materijal</h3>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4">
                {MATERIAL_OPTIONS.window.map(option => (
                  <button
                    key={option.id}
                    onClick={() => handleMaterialSelect(option.id)}
                    className={`p-4 rounded-xl border transition-colors ${
                      selectedMaterial === option.id
                        ? 'border-[var(--glow-color)] bg-[rgba(182,155,95,0.1)] text-white'
                        : 'border-zinc-800 hover:border-[var(--glow-color)] text-zinc-400'
                    }`}
                  >
                    {renderOptionButton(option, selectedMaterial === option.id, () => handleMaterialSelect(option.id))}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Vrste prozora */}
          {selectedMaterial && (
            <div ref={styleRef} className="bg-zinc-900/50 rounded-xl overflow-hidden">
              <div className="flex items-center gap-3 p-4 border-b border-zinc-800">
                <h3 className="text-base font-medium text-white">Vrste prozora</h3>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-2 gap-4">
                  {STYLE_OPTIONS.map(option => (
                    <button
                      key={option.id}
                      onClick={() => handleStyleSelect(option.id)}
                      className={`p-4 rounded-xl border transition-colors ${
                        selectedStyle === option.id
                          ? 'border-[var(--glow-color)] bg-[rgba(182,155,95,0.1)] text-white'
                          : 'border-zinc-800 hover:border-[var(--glow-color)] text-zinc-400'
                      }`}
                    >
                      {renderOptionButton(option, selectedStyle === option.id, () => handleStyleSelect(option.id))}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Dimenzije */}
          {selectedStyle && (
            <div ref={dimensionsRef} className="bg-zinc-900/50 rounded-xl overflow-hidden">
              <div className="flex items-center gap-3 p-4 border-b border-zinc-800">
                <h3 className="text-base font-medium text-white">Dimenzije</h3>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-zinc-400">Širina</label>
                    <div className="relative">
                      <input
                        type="text"
                        value={dimensions.width || ''}
                        onChange={(e) => handleDimensionsChange('width', e.target.value)}
                        className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:border-[var(--glow-color)] focus:outline-none pr-12"
                        placeholder="Unesite širinu"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400">cm</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-zinc-400">Visina</label>
                    <div className="relative">
                      <input
                        type="text"
                        value={dimensions.height || ''}
                        onChange={(e) => handleDimensionsChange('height', e.target.value)}
                        className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:border-[var(--glow-color)] focus:outline-none pr-12"
                        placeholder="Unesite visinu"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400">cm</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Dodatne opcije */}
          {dimensions.width > 0 && dimensions.height > 0 && (
            <div ref={additionalOptionsRef} className="bg-zinc-900/50 rounded-xl overflow-hidden">
              <div className="flex items-center gap-3 p-4 border-b border-zinc-800">
                <h3 className="text-base font-medium text-white">Dodatne opcije</h3>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setHasRoletne(!hasRoletne)}
                    className={`p-4 rounded-xl border transition-colors ${
                      hasRoletne
                        ? 'border-[var(--glow-color)] bg-[rgba(182,155,95,0.1)] text-white'
                        : 'border-zinc-800 hover:border-[var(--glow-color)] text-zinc-400'
                    }`}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <Sun size={24} />
                      <span className="text-sm font-medium">Roletne</span>
                    </div>
                  </button>
                  <button
                    onClick={() => setHasKomarnici(!hasKomarnici)}
                    className={`p-4 rounded-xl border transition-colors ${
                      hasKomarnici
                        ? 'border-[var(--glow-color)] bg-[rgba(182,155,95,0.1)] text-white'
                        : 'border-zinc-800 hover:border-[var(--glow-color)] text-zinc-400'
                    }`}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <Bug size={24} />
                      <span className="text-sm font-medium">Komarnici</span>
                    </div>
                  </button>
                  <button
                    onClick={() => setHasSpoljasnjeOkapnice(!hasSpoljasnjeOkapnice)}
                    className={`p-4 rounded-xl border transition-colors ${
                      hasSpoljasnjeOkapnice
                        ? 'border-[var(--glow-color)] bg-[rgba(182,155,95,0.1)] text-white'
                        : 'border-zinc-800 hover:border-[var(--glow-color)] text-zinc-400'
                    }`}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <Sun size={24} />
                      <span className="text-sm font-medium">Spoljašnje okapnice</span>
                    </div>
                  </button>
                  <button
                    onClick={() => setHasUnutrasnjeOkapnice(!hasUnutrasnjeOkapnice)}
                    className={`p-4 rounded-xl border transition-colors ${
                      hasUnutrasnjeOkapnice
                        ? 'border-[var(--glow-color)] bg-[rgba(182,155,95,0.1)] text-white'
                        : 'border-zinc-800 hover:border-[var(--glow-color)] text-zinc-400'
                    }`}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <Sun size={24} />
                      <span className="text-sm font-medium">Unutrašnje okapnice</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Količina za prozore */}
          {dimensions.width > 0 && dimensions.height > 0 && (
            <div ref={quantityRef} className="bg-zinc-900/50 rounded-xl overflow-hidden">
              <div className="flex items-center gap-3 p-4 border-b border-zinc-800">
                <h3 className="text-base font-medium text-white">Količina</h3>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={() => handleQuantityAdjust(-1)}
                    className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:border-[var(--glow-color)] hover:text-white transition-colors"
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={quantity}
                    onChange={(e) => handleQuantityChange(e.target.value)}
                    className="w-16 text-center bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:border-[var(--glow-color)] focus:outline-none"
                  />
                  <button
                    onClick={() => handleQuantityAdjust(1)}
                    className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:border-[var(--glow-color)] hover:text-white transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Dugme za dodavanje u korpu za prozore */}
          {dimensions.width > 0 && dimensions.height > 0 && (
            <button
              onClick={handleAddToCart}
              className="w-full py-3 bg-[var(--glow-color)] text-white rounded-lg font-medium hover:bg-[var(--glow-color)]/90 transition-colors"
            >
              Dodaj u korpu
            </button>
          )}
        </>
      )}

      {selectedType === 'door' && (
        <>
          {/* Tip vrata */}
          <div ref={doorTypeRef} className="bg-zinc-900/50 rounded-xl overflow-hidden">
            <div className="flex items-center gap-3 p-4 border-b border-zinc-800">
              <h3 className="text-base font-medium text-white">Tip vrata</h3>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => handleDoorTypeSelect('ulazna')}
                  className={`p-4 rounded-xl border transition-colors ${
                    selectedDoorType === 'ulazna'
                      ? 'border-[var(--glow-color)] bg-[rgba(182,155,95,0.1)] text-white'
                      : 'border-zinc-800 hover:border-[var(--glow-color)] text-zinc-400'
                  }`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <DoorOpen size={24} />
                    <span className="text-sm font-medium">Ulazna</span>
                  </div>
                </button>
                <button
                  onClick={() => handleDoorTypeSelect('sobna')}
                  className={`p-4 rounded-xl border transition-colors ${
                    selectedDoorType === 'sobna'
                      ? 'border-[var(--glow-color)] bg-[rgba(182,155,95,0.1)] text-white'
                      : 'border-zinc-800 hover:border-[var(--glow-color)] text-zinc-400'
                  }`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <DoorOpen size={24} />
                    <span className="text-sm font-medium">Sobna</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Materijal za vrata */}
          {selectedDoorType && (
            <div ref={materialRef} className="bg-zinc-900/50 rounded-xl overflow-hidden">
              <div className="flex items-center gap-3 p-4 border-b border-zinc-800">
                <h3 className="text-base font-medium text-white">Materijal</h3>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-2 gap-4">
                  {MATERIAL_OPTIONS.door[selectedDoorType].map(option => (
                    <button
                      key={option.id}
                      onClick={() => handleMaterialSelect(option.id)}
                      className={`p-4 rounded-xl border transition-colors ${
                        selectedMaterial === option.id
                          ? 'border-[var(--glow-color)] bg-[rgba(182,155,95,0.1)] text-white'
                          : 'border-zinc-800 hover:border-[var(--glow-color)] text-zinc-400'
                      }`}
                    >
                      {renderOptionButton(option, selectedMaterial === option.id, () => handleMaterialSelect(option.id))}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Wood options for room doors */}
          {selectedDoorType === 'sobna' && selectedMaterial === 'Drvo' && (
            <div className="bg-zinc-900/50 rounded-xl overflow-hidden">
              <div className="flex items-center gap-3 p-4 border-b border-zinc-800">
                <h3 className="text-base font-medium text-white">Vrsta drveta</h3>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-2 gap-4">
                  {WOOD_OPTIONS.map(option => (
                    <button
                      key={option.id}
                      onClick={() => handleWoodOptionSelect(option.id)}
                      className={`p-4 rounded-xl border transition-colors ${
                        selectedWoodOption === option.id
                          ? 'border-[var(--glow-color)] bg-[rgba(182,155,95,0.1)] text-white'
                          : 'border-zinc-800 hover:border-[var(--glow-color)] text-zinc-400'
                      }`}
                    >
                      {renderOptionButton(option, selectedWoodOption === option.id, () => handleWoodOptionSelect(option.id))}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Sema vrata (samo za ulazna vrata) */}
          {selectedDoorType === 'ulazna' && selectedMaterial && (
            <div ref={doorStyleRef} className="bg-zinc-900/50 rounded-xl overflow-hidden">
              <div className="flex items-center gap-3 p-4 border-b border-zinc-800">
                <h3 className="text-base font-medium text-white">Vrste vrata</h3>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-3 gap-4">
                  {DOOR_STYLE_OPTIONS.map(option => (
                    <button
                      key={option.id}
                      onClick={() => handleStyleSelect(option.id)}
                      className={`p-4 rounded-xl border transition-colors ${
                        selectedStyle === option.id
                          ? 'border-[var(--glow-color)] bg-[rgba(182,155,95,0.1)] text-white'
                          : 'border-zinc-800 hover:border-[var(--glow-color)] text-zinc-400'
                      }`}
                    >
                      {renderOptionButton(option, selectedStyle === option.id, () => handleStyleSelect(option.id))}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Dimenzije */}
          {(selectedDoorType === 'ulazna' ? selectedStyle : selectedMaterial) && (
            <div ref={dimensionsRef} className="bg-zinc-900/50 rounded-xl overflow-hidden">
              <div className="flex items-center gap-3 p-4 border-b border-zinc-800">
                <h3 className="text-base font-medium text-white">Dimenzije</h3>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-zinc-400">Širina</label>
                    <div className="relative">
                      <input
                        type="text"
                        value={dimensions.width || ''}
                        onChange={(e) => handleDimensionsChange('width', e.target.value)}
                        className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:border-[var(--glow-color)] focus:outline-none pr-12"
                        placeholder="Unesite širinu"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400">cm</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-zinc-400">Visina</label>
                    <div className="relative">
                      <input
                        type="text"
                        value={dimensions.height || ''}
                        onChange={(e) => handleDimensionsChange('height', e.target.value)}
                        className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:border-[var(--glow-color)] focus:outline-none pr-12"
                        placeholder="Unesite visinu"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400">cm</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Način otvaranja */}
          {dimensions.width > 0 && dimensions.height > 0 && (
            <div ref={handleRef} className="bg-zinc-900/50 rounded-xl overflow-hidden">
              <div className="flex items-center gap-3 p-4 border-b border-zinc-800">
                <h3 className="text-base font-medium text-white">Način otvaranja</h3>
              </div>
              <div className="p-4">
                <div className={`grid gap-4 ${selectedDoorType === 'ulazna' ? 'grid-cols-3' : 'grid-cols-2'}`}>
                  {HANDLE_OPTIONS[selectedDoorType as 'ulazna' | 'sobna'].map(option => (
                    <button
                      key={option.id}
                      onClick={() => handleHandleSelect(option.id)}
                      className={`p-4 rounded-xl border transition-colors ${
                        selectedHandle === option.id
                          ? 'border-[var(--glow-color)] bg-[rgba(182,155,95,0.1)] text-white'
                          : 'border-zinc-800 hover:border-[var(--glow-color)] text-zinc-400'
                      }`}
                    >
                      {renderOptionButton(option, selectedHandle === option.id, () => handleHandleSelect(option.id))}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Način zaključavanja (samo za ulazna vrata) */}
          {selectedHandle && selectedDoorType === 'ulazna' && (
            <div ref={lockRef} className="bg-zinc-900/50 rounded-xl overflow-hidden">
              <div className="flex items-center gap-3 p-4 border-b border-zinc-800">
                <h3 className="text-base font-medium text-white">Način zaključavanja</h3>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-2 gap-4">
                  {LOCK_OPTIONS.map(option => (
                    <button
                      key={option.id}
                      onClick={() => handleLockSelect(option.id)}
                      className={`p-4 rounded-xl border transition-colors ${
                        selectedLockType === option.id
                          ? 'border-[var(--glow-color)] bg-[rgba(182,155,95,0.1)] text-white'
                          : 'border-zinc-800 hover:border-[var(--glow-color)] text-zinc-400'
                      }`}
                    >
                      {renderOptionButton(option, selectedLockType === option.id, () => handleLockSelect(option.id))}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Količina za ulazna vrata */}
          {selectedDoorType === 'ulazna' && selectedHandle && selectedLockType && dimensions.width > 0 && dimensions.height > 0 && (
            <div className="bg-zinc-900/50 rounded-xl overflow-hidden">
              <div className="flex items-center gap-3 p-4 border-b border-zinc-800">
                <h3 className="text-base font-medium text-white">Količina</h3>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={() => handleQuantityAdjust(-1)}
                    className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:border-[var(--glow-color)] hover:text-white transition-colors"
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={quantity}
                    onChange={(e) => handleQuantityChange(e.target.value)}
                    className="w-16 text-center bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:border-[var(--glow-color)] focus:outline-none"
                  />
                  <button
                    onClick={() => handleQuantityAdjust(1)}
                    className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:border-[var(--glow-color)] hover:text-white transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Dugme za dodavanje u korpu za ulazna vrata */}
          {selectedDoorType === 'ulazna' && selectedHandle && selectedLockType && dimensions.width > 0 && dimensions.height > 0 && (
            <button
              onClick={handleAddToCart}
              className="w-full py-3 bg-[var(--glow-color)] text-white rounded-lg font-medium hover:bg-[var(--glow-color)]/90 transition-colors"
            >
              Dodaj u korpu
            </button>
          )}

          {/* Količina za sobna vrata */}
          {selectedDoorType === 'sobna' && selectedHandle && dimensions.width > 0 && dimensions.height > 0 && (
            <div className="bg-zinc-900/50 rounded-xl overflow-hidden">
              <div className="flex items-center gap-3 p-4 border-b border-zinc-800">
                <h3 className="text-base font-medium text-white">Količina</h3>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={() => handleQuantityAdjust(-1)}
                    className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:border-[var(--glow-color)] hover:text-white transition-colors"
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={quantity}
                    onChange={(e) => handleQuantityChange(e.target.value)}
                    className="w-16 text-center bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:border-[var(--glow-color)] focus:outline-none"
                  />
                  <button
                    onClick={() => handleQuantityAdjust(1)}
                    className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:border-[var(--glow-color)] hover:text-white transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Dugme za dodavanje u korpu za sobna vrata */}
          {selectedDoorType === 'sobna' && selectedHandle && dimensions.width > 0 && dimensions.height > 0 && (
            <button
              onClick={handleAddToCart}
              className="w-full py-3 bg-[var(--glow-color)] text-white rounded-lg font-medium hover:bg-[var(--glow-color)]/90 transition-colors"
            >
              Dodaj u korpu
            </button>
          )}
        </>
      )}
    </div>
  );
} 