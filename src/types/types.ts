import { Dispatch, SetStateAction } from "react";

export interface I_Children {
  children: React.ReactNode;
}

export interface I_Food {
  _id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  category: string;
  score: 0 | 1 | 2 | 3 | 4 | 5;
  id: string;
}

export interface I_SearchedFoods {
  first: number;
  prev: number | null;
  next: number | null;
  last: number;
  pages: number;
  items: number | null;
  data: I_Food[];
}

export interface I_Menu {
  menu_name: string;
  menu_image: string;
}

export interface I_CartItem {
  id: string;
  qrt: number;
}

export interface I_CartContext {
  cartItems: I_CartItem[];
  totalQrt: number;
  addToCartHandler: (id: string) => void;
  removeFromCartHandler: (id: string) => void;
  deleteItemFromCartHandler: (id: string) => void;
}
