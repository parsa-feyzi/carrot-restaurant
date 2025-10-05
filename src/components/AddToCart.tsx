"use client"

import useCartContext from "@/hooks/useCartContext";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useEffect, useState } from "react";

interface I_AddToCart { id: string; isForCartItem?: boolean }

function AddToCart({ id, isForCartItem }: I_AddToCart) {
  const [itemQrt, setItemQrt] = useState(0);

  const { cartItems, addToCartHandler, removeFromCartHandler } =
    useCartContext();

  useEffect(() => {
    setItemQrt(cartItems.find((item) => item.id === id)?.qrt as number);
  }, [cartItems]);

  return (
    <>
      {itemQrt ? (
        <div className={`${isForCartItem ? "bg-amber-50/100" : "bg-amber-50/100 shadow-md"} h-10 flex items-center gap-2 px-1 rounded-full`}>
          <div
            onClick={() => removeFromCartHandler(id)}
            className="rounded-full text-red-900 size-8 grid place-content-center p-1 cursor-pointer bg-amber-900/5 hover:bg-amber-900/10 active:bg-amber-900/20"
          >
            {itemQrt === 1 ? <DeleteOutlineIcon className="opacity-90" sx={{ fontSize: 17 }} /> : <RemoveRoundedIcon fontSize="small" /> }
          </div>
          <div className={isForCartItem ? "sm:px-4 px-2" : "px-0.5"}>{itemQrt}</div>
          <div
            onClick={() => addToCartHandler(id)}
            className="rounded-full text-green-900 size-8 grid place-content-center p-1 cursor-pointer bg-amber-900/5 hover:bg-amber-900/10 active:bg-amber-900/20"
          >
            <AddRoundedIcon fontSize="small" />
          </div>
        </div>
      ) : (
        <div
          onClick={() => addToCartHandler(id)}
          className="size-10 cursor-pointer active:scale-95 grid place-content-center bg-amber-50 shadow-md rounded-full"
        >
          <AddRoundedIcon />
        </div>
      )}
    </>
  );
}

export default AddToCart;
