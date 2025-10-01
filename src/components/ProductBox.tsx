import { I_Food } from "@/types/types";
import React from "react";
import AddToCart from "./AddToCart";
import { Rating } from "@mui/material";

type T_ProductBox = I_Food & { isMenu?: boolean }

function ProductBox({ _id, name, price, image, description, score, isMenu }: T_ProductBox) {
  return (
    <div
      className={`${
        isMenu ? "rounded-lg shadow shadow-black/10" : "rounded-2xl shadow-md hover:-translate-y-1.5"
      } product_box duration-300 overflow-hidden`}
    >
      <div className="relative bg-black">
        <img
          className={`${
            isMenu ? "max-h-42" : "max-h-54"
          } product_box_img w-full object-cover`}
          src={`/foods/${image}.png`}
        />
        <AddToCart id={_id} />
      </div>
      <div className={`${isMenu ? "p-3" : "px-4 py-5"} drop-shadow-2xl`}>
        <div className="flex justify-between items-center">
          <div className={`${isMenu ? "" : "text-xl"} font-bold line-clamp-1`}>
            {name}
          </div>
          <div className="ps-4">
            <div className={isMenu ? "hidden" : "opacity-80"}>
              <Rating
                name="half-rating-read"
                defaultValue={score}
                precision={0.5}
                readOnly
                size="small"
              />
            </div>
          </div>
        </div>
        <div
          className={`${
            isMenu ? "mt-1 mb-2" : "mt-2 mb-4"
          } text-sm line-clamp-2 text-gray-600`}
        >
          {description}
        </div>
        <div className="flex justify-between items-end">
          <div className="text-2xl text-(--prim) font-bold">${price}</div>
          <div className={!isMenu ? "hidden" : "opacity-80"}>
            <Rating
              name="half-rating-read"
              defaultValue={score}
              precision={0.5}
              readOnly
              size="small"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductBox;
