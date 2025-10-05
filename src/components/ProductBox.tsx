import { I_Food } from "@/types/types";
import React from "react";
import AddToCart from "./AddToCart";
import { Rating } from "@mui/material";

type T_ProductBox = I_Food & { isMenu?: boolean };

function ProductBox({ id, name, price, image, description, score, isMenu }: T_ProductBox) {
  return (
    <div
      className={`${
        isMenu
          ? "rounded-lg shadow shadow-black/10"
          : "rounded-2xl shadow-md hover:-translate-y-1.5"
      } product_box duration-300 overflow-hidden h-fit`}
    >
      <div className="relative bg-black">
        <img
          className={`${
            isMenu ? "max-h-42" : "max-h-54"
          } product_box_img w-full h-full object-cover`}
          src={`/foods/${image}.png`}
        />
        <div className="absolute bottom-3 right-3">
          <AddToCart id={id} />
        </div>
      </div>
      <div className={`${isMenu ? "sm:p-3 p-2" : "px-4 py-5"} drop-shadow-2xl`}>
        <div className="flex justify-between items-center">
          <div className={`${isMenu ? "sm:text-base text-sm" : "text-xl"} font-bold line-clamp-1`}>
            {name}
          </div>
          <div className="ps-4">
            <div
              className={
                isMenu ? "hidden" : "opacity-80 rotate-180 rotate-x-180"
              }
            >
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
            isMenu ? "mt-1 mb-2 sm:text-sm text-xs" : "mt-2 mb-4 text-sm"
          } line-clamp-2 text-gray-600`}
        >
          {description}
        </div>
        <div className="flex justify-between items-end">
          <div
            className={`${
              isMenu ? "sm:text-xl text-lg" : "text-2xl"
            } text-(--prim) font-bold`}
          >
            ${price}
          </div>
          <div
            className={
              !isMenu ? "hidden" : "opacity-80 rotate-180 rotate-x-180"
            }
          >
            <Rating
              name="half-rating-read"
              defaultValue={score}
              precision={0.5}
              readOnly
              sx={{ fontSize: 16 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductBox;
