"use client";

import { I_CartContext, I_CartItem } from "@/types/types";
import { createContext, ReactNode, useEffect, useState } from "react";

export const cartContext = createContext({} as I_CartContext);

function CartContextProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<I_CartItem[]>([]);
  const [totalQrt, setTotalQrt] = useState(0);

  // add to cart handler
  const addToCartHandler = (id: string) => {
    setCartItems((prev) => {
      const targetCartItem = prev.find((item) => item.id === id);
      if (targetCartItem) {
        return prev.map((item) => {
          if (item.id === id) {
            return { ...item, qrt: item.qrt + 1 };
          } else {
            return item;
          }
        });
      }
      return [{ id: id, qrt: 1 }, ...prev];
    });
  };

  // delete item from cart handler
  const deleteItemFromCartHandler = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // remove from cart handler
  const removeFromCartHandler = (id: string) => {
    setCartItems((prev) => {
      const targetCartItem = prev.find((item) => item.id === id);
      if ((targetCartItem?.qrt as number) !== 1) {
        return prev.map((item) => {
          if (item.id === id) {
            return { ...item, qrt: item.qrt - 1 };
          } else {
            return item;
          }
        });
      }
      return prev.filter((item) => item.id !== id);
    });
  };

  useEffect(() => {
    const storagedItems = localStorage.getItem("cartItems");
    storagedItems && setCartItems(JSON.parse(storagedItems));
  }, []);

  useEffect(() => {
    setTotalQrt(cartItems.reduce((total, item) => total + item.qrt, 0));
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <cartContext.Provider
      value={{
        cartItems,
        totalQrt,
        addToCartHandler,
        removeFromCartHandler,
        deleteItemFromCartHandler,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export default CartContextProvider;
