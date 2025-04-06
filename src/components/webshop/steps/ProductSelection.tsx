'use client';

import React, { useState, useCallback } from 'react';
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
  Minus
} from 'lucide-react';

interface ProductOption {
  id: string;
  label: string;
  icon?: React.ReactNode;
  icons?: React.ReactNode[];
}

type ProductType = 'window' | 'door';
type DoorType = 'ulazna' | 'sobna';

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
  }
];

export default function ProductSelection() {
  const { addToCart } = useWebshop();
  const [selectedType, setSelectedType] = useState<ProductType | null>(null);
  const [selectedDoorType, setSelectedDoorType] = useState<DoorType | null>(null);
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [hasRoletne, setHasRoletne] = useState(false);
  const [hasKomarnici, setHasKomarnici] = useState(false);

  const handleQuantityChange = useCallback((delta: number) => {
    setQuantity(prev => Math.max(1, prev + delta));
  }, []);

  const handleAddToCart = useCallback(() => {
    if (!selectedType || !selectedMaterial) return;
    
    // Validacija za prozore
    if (isWindow(selectedType) && !selectedStyle) {
      return;
    }
    
    // Validacija za vrata
    if (isDoor(selectedType) && (!selectedDoorType || (selectedDoorType === 'ulazna' && !selectedStyle))) {
      return;
    }
    
    addToCart({
      type: selectedType,
      options: {
        material: selectedMaterial,
        style: selectedStyle || undefined,
        hasRoletne,
        hasKomarnici,
        doorType: selectedDoorType || undefined
      },
      additionalFeatures: []
    });
    
    // Reset form but keep type selection
    setSelectedMaterial(null);
    setSelectedStyle(null);
    setSelectedDoorType(null);
    setQuantity(1);
    setHasRoletne(false);
    setHasKomarnici(false);
  }, [selectedType, selectedMaterial, selectedStyle, hasRoletne, hasKomarnici, selectedDoorType, addToCart]);

  const renderOptionButton = (option: ProductOption, isSelected: boolean, onClick: () => void) => (
    <button
      onClick={onClick}
      className={`w-full p-4 rounded-xl border transition-all duration-200 ${
        isSelected
          ? 'border-[var(--glow-color)] bg-[rgba(182,155,95,0.1)]'
          : 'border-zinc-800 hover:border-[var(--glow-color)] hover:bg-zinc-900/50'
      }`}
      aria-pressed={isSelected}
    >
      <div className="flex flex-col items-center gap-2">
        {option.icon}
        <h5 className="text-sm font-medium text-white">{option.label}</h5>
      </div>
    </button>
  );

  return (
    <div className="space-y-6">
      {/* Prozori sekcija */}
      <div className="bg-zinc-900/50 rounded-xl overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <Wind className="w-5 h-5 text-[var(--glow-color)]" />
            <h3 className="text-base font-medium text-white">Prozori</h3>
          </div>
          <button
            onClick={() => setSelectedType(selectedType === 'window' ? null : 'window')}
            className={`px-3 py-1.5 rounded-full border transition-colors text-sm flex items-center gap-1.5 ${
              selectedType === 'window'
                ? 'border-[var(--glow-color)] bg-[rgba(182,155,95,0.1)] text-white'
                : 'border-zinc-800 hover:border-[var(--glow-color)] text-zinc-400'
            }`}
            aria-expanded={selectedType === 'window'}
          >
            {selectedType === 'window' ? (
              <>
                <span>Zatvori</span>
                <ChevronDown className="w-4 h-4" />
              </>
            ) : (
              <>
                <span>Izaberi</span>
                <ChevronRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>

        {selectedType === 'window' && (
          <div className="p-4 space-y-6">
            {/* Materijal */}
            <div>
              <h4 className="text-sm font-medium mb-3 text-white">Materijal</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {MATERIAL_OPTIONS.window.map(option => (
                  <React.Fragment key={option.id}>
                    {renderOptionButton(
                      option,
                      selectedMaterial === option.id,
                      () => setSelectedMaterial(option.id)
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Stil */}
            <div>
              <h4 className="text-sm font-medium mb-3 text-white">Stil</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {STYLE_OPTIONS.map(option => (
                  <React.Fragment key={option.id}>
                    {renderOptionButton(
                      option,
                      selectedStyle === option.id,
                      () => setSelectedStyle(option.id)
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Dodatne opcije */}
            <div>
              <h4 className="text-sm font-medium mb-3 text-white">Dodatne opcije</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ADDITIONAL_OPTIONS.map(option => (
                  <React.Fragment key={option.id}>
                    {renderOptionButton(
                      option,
                      option.id === 'Roletne' ? hasRoletne : hasKomarnici,
                      () => {
                        if (option.id === 'Roletne') {
                          setHasRoletne(!hasRoletne);
                        } else {
                          setHasKomarnici(!hasKomarnici);
                        }
                      }
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Količina i Dodaj u korpu */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-zinc-800">
              <div className="flex items-center gap-3">
                <label className="text-sm text-white">Količina:</label>
                <div className="relative flex items-center">
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    className="w-24 bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-2 text-white text-sm focus:border-[var(--glow-color)] focus:outline-none"
                    aria-label="Količina"
                  />
                  <div className="absolute right-1 flex items-center gap-1">
                    <button
                      onClick={() => handleQuantityChange(1)}
                      className="w-8 h-8 flex items-center justify-center rounded-full text-white hover:text-[var(--glow-color)] hover:bg-zinc-800 transition-colors"
                      aria-label="Povećaj količinu"
                    >
                      <Plus size={16} />
                    </button>
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="w-8 h-8 flex items-center justify-center rounded-full text-white hover:text-[var(--glow-color)] hover:bg-zinc-800 transition-colors"
                      aria-label="Smanji količinu"
                    >
                      <Minus size={16} />
                    </button>
                  </div>
                </div>
              </div>
              <button
                onClick={handleAddToCart}
                disabled={!selectedType || !selectedMaterial || (isWindow(selectedType) && !selectedStyle) || (isDoor(selectedType) && (!selectedDoorType || (selectedDoorType === 'ulazna' && !selectedStyle)))}
                className={`w-full sm:w-auto px-6 py-3 rounded-full text-white transition-colors flex items-center justify-center gap-2 text-sm font-medium ${
                  !selectedType || !selectedMaterial || (isWindow(selectedType) && !selectedStyle) || (isDoor(selectedType) && (!selectedDoorType || (selectedDoorType === 'ulazna' && !selectedStyle)))
                    ? 'bg-zinc-800 cursor-not-allowed'
                    : 'bg-[var(--glow-color)] hover:bg-white hover:text-black'
                }`}
              >
                <ShoppingCart size={16} />
                <span>Dodaj u korpu</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Vrata sekcija */}
      <div className="bg-zinc-900/50 rounded-xl overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <DoorOpen className="w-5 h-5 text-[var(--glow-color)]" />
            <h3 className="text-base font-medium text-white">Vrata</h3>
          </div>
          <button
            onClick={() => setSelectedType(selectedType === 'door' ? null : 'door')}
            className={`px-3 py-1.5 rounded-full border transition-colors text-sm flex items-center gap-1.5 ${
              selectedType === 'door'
                ? 'border-[var(--glow-color)] bg-[rgba(182,155,95,0.1)] text-white'
                : 'border-zinc-800 hover:border-[var(--glow-color)] text-zinc-400'
            }`}
            aria-expanded={selectedType === 'door'}
          >
            {selectedType === 'door' ? (
              <>
                <span>Zatvori</span>
                <ChevronDown className="w-4 h-4" />
              </>
            ) : (
              <>
                <span>Izaberi</span>
                <ChevronRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>

        {selectedType === 'door' && (
          <div className="p-4 space-y-6">
            {/* Tip vrata */}
            <div>
              <h4 className="text-sm font-medium mb-3 text-white">Tip vrata</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => setSelectedDoorType('ulazna')}
                  className={`p-4 rounded-xl border transition-all duration-200 ${
                    selectedDoorType === 'ulazna'
                      ? 'border-[var(--glow-color)] bg-[rgba(182,155,95,0.1)]'
                      : 'border-zinc-800 hover:border-[var(--glow-color)] hover:bg-zinc-900/50'
                  }`}
                  aria-pressed={selectedDoorType === 'ulazna'}
                >
                  <h5 className="text-sm font-medium text-white">Ulazna</h5>
                </button>
                <button
                  onClick={() => setSelectedDoorType('sobna')}
                  className={`p-4 rounded-xl border transition-all duration-200 ${
                    selectedDoorType === 'sobna'
                      ? 'border-[var(--glow-color)] bg-[rgba(182,155,95,0.1)]'
                      : 'border-zinc-800 hover:border-[var(--glow-color)] hover:bg-zinc-900/50'
                  }`}
                  aria-pressed={selectedDoorType === 'sobna'}
                >
                  <h5 className="text-sm font-medium text-white">Sobna</h5>
                </button>
              </div>
            </div>

            {/* Materijal */}
            {selectedDoorType && (
              <div>
                <h4 className="text-sm font-medium mb-3 text-white">Materijal</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {MATERIAL_OPTIONS.door[selectedDoorType].map(option => (
                    <React.Fragment key={option.id}>
                      {renderOptionButton(
                        option,
                        selectedMaterial === option.id,
                        () => setSelectedMaterial(option.id)
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}

            {/* Stil (samo za ulazna vrata) */}
            {selectedDoorType === 'ulazna' && (
              <div>
                <h4 className="text-sm font-medium mb-3 text-white">Stil</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {STYLE_OPTIONS.slice(0, 2).map(option => (
                    <React.Fragment key={option.id}>
                      {renderOptionButton(
                        option,
                        selectedStyle === option.id,
                        () => setSelectedStyle(option.id)
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}

            {/* Količina i Dodaj u korpu */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-zinc-800">
              <div className="flex items-center gap-3">
                <label className="text-sm text-white">Količina:</label>
                <div className="relative flex items-center">
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    className="w-24 bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-2 text-white text-sm focus:border-[var(--glow-color)] focus:outline-none"
                    aria-label="Količina"
                  />
                  <div className="absolute right-1 flex items-center gap-1">
                    <button
                      onClick={() => handleQuantityChange(1)}
                      className="w-8 h-8 flex items-center justify-center rounded-full text-white hover:text-[var(--glow-color)] hover:bg-zinc-800 transition-colors"
                      aria-label="Povećaj količinu"
                    >
                      <Plus size={16} />
                    </button>
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="w-8 h-8 flex items-center justify-center rounded-full text-white hover:text-[var(--glow-color)] hover:bg-zinc-800 transition-colors"
                      aria-label="Smanji količinu"
                    >
                      <Minus size={16} />
                    </button>
                  </div>
                </div>
              </div>
              <button
                onClick={handleAddToCart}
                disabled={!selectedType || !selectedMaterial || (isWindow(selectedType) && !selectedStyle) || (isDoor(selectedType) && (!selectedDoorType || (selectedDoorType === 'ulazna' && !selectedStyle)))}
                className={`w-full sm:w-auto px-6 py-3 rounded-full text-white transition-colors flex items-center justify-center gap-2 text-sm font-medium ${
                  !selectedType || !selectedMaterial || (isWindow(selectedType) && !selectedStyle) || (isDoor(selectedType) && (!selectedDoorType || (selectedDoorType === 'ulazna' && !selectedStyle)))
                    ? 'bg-zinc-800 cursor-not-allowed'
                    : 'bg-[var(--glow-color)] hover:bg-white hover:text-black'
                }`}
              >
                <ShoppingCart size={16} />
                <span>Dodaj u korpu</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 