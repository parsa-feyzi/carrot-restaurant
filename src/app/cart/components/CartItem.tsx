"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { I_CartItem, I_Food } from "@/types/types";
import AddToCart from "@/components/AddToCart";
import { Rating } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import useCartContext from "@/hooks/useCartContext";

function CartItem({ id }: I_CartItem) {
  const [item, setItem] = useState<I_Food | null>(null);

  const { deleteItemFromCartHandler } = useCartContext();

  const getThisItem = async () => {
    const { data } = await axios(`http://localhost:8000/foods/${id}`);
    setItem(data);
  };

  useEffect(() => {
    getThisItem();
  }, []);

  return (
    <div className="grid grid-cols-12 shadow-sm mb-6 rounded-lg overflow-hidden">
      <div className="relative sm:col-span-3 col-span-4 sm:h-40 h-36">
        <img
          className="object-cover object-center w-full h-full"
          src={`/foods/${item?.image}.png`}
        />
        <div className="flex justify-center p-2 pt-10 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 z-10">
          {item && (
            <Rating
              name="half-rating-read"
              defaultValue={item.score}
              precision={0.5}
              readOnly
              size="small"
            />
          )}
        </div>
      </div>
      <div className="sm:col-span-9 col-span-8 sm:p-4 p-3 flex justify-between gap-6 bg-amber-100/5">
        <div className="flex flex-col justify-between">
          <div>
            <div className="text-xl line-clamp-1 font-bold">{item?.name}</div>
            <div className="sm:text-sm text-xs line-clamp-2 text-neutral-600 mt-2">
              {item?.description}
            </div>
          </div>
          <div className="flex sm:items-end items-center sm:pe-6">
            <AddToCart id={id} isForCartItem />
          </div>
        </div>
        <div className="flex flex-col justify-between items-end">
          <div
            onClick={() => deleteItemFromCartHandler(id)}
            className="cursor-pointer text-black/40 hover:text-black/80 active:scale-95"
          >
            <CloseRoundedIcon />
          </div>
          <div className="text-amber-600 sm:text-2xl text-xl font-bold">
            ${item?.price}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
