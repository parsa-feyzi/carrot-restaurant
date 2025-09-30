import { I_Food } from "@/types/types";
import React from "react";
import AddToCart from "./AddToCart";

function ProductBox({ _id, name, price, image, description, score }: I_Food) {
  return (
    <div className="duration-300 hover:-translate-y-1.5 product_box shadow-md rounded-2xl overflow-hidden">
      <div className="relative bg-black">
          <img
            className="product_box_img max-h-54 w-full object-cover"
            src={`/foods/${image}.png`}
          />
          <AddToCart id={_id} />
      </div>
      <div className="px-4 py-5 drop-shadow-2xl">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold line-clamp-1">{name}</div>
          <div className="ps-4">
            <img className="w-20" src="/icons/rating_starts.png" alt="" />
          </div>
        </div>
        <div className="text-sm pt-2 pb-4 text-gray-600">{description}</div>
        <div className="text-2xl text-(--prim) font-bold">${price}</div>
      </div>
    </div>
  );
}

export default ProductBox;
