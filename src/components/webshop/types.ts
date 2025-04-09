export type WindowMaterial = 'Drvo' | 'PVC' | 'Alu-drvo' | 'Aluminijum';
export type WindowType = 'Jednokrilni' | 'Dvokrilni';
export type DoorType = 'Ulazna' | 'Sobna';
export type DoorMaterial = 'Drvo' | 'PVC' | 'Aluminijum';
export type DoorStyle = 'Dvokrilna' | 'Jednokrilna';

export interface WindowOptions {
  material: WindowMaterial;
  type: WindowType;
  hasRoletne: boolean;
  hasKomarnici: boolean;
}

export interface DoorOptions {
  type: DoorType;
  style?: DoorStyle;
  material: DoorMaterial;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  address: string;
  message?: string;
}

export interface CartItem {
  id: string;
  type: 'window' | 'door';
  options: WindowOptions | DoorOptions;
  quantity: number;
}

export interface WebshopState {
  cart: CartItem[];
  currentStep: 1 | 2 | 3;
  contactForm: ContactForm;
} 