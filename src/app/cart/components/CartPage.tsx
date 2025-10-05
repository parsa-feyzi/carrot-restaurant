"use client";

import useCartContext from "@/hooks/useCartContext";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import Link from "next/link";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";
import { I_Food } from "@/types/types";
import axios from "axios";

function CartPage() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [isEmpity, setIsEmpity] = useState(false);
  const [allFoods, setAllFoods] = useState<I_Food[] | null>(null);
  const { cartItems } = useCartContext();

  const getAllFoodsHandler = async () => {
    try {
      const { data } = await axios(`http://localhost:8000/foods`);
      setAllFoods(data);
    } catch (error) {
      throw new Error(`${error}`);
    }
  };

  useEffect(() => {
    {
      allFoods &&
        setTotalPrice(
          cartItems.reduce((total, item) => {
            const targetCartItem = allFoods.find((food) => food.id === item.id);
            return total + (targetCartItem?.price || 0) * item.qrt;
          }, 0)
        );
    }
  }, [cartItems, allFoods]);

  useEffect(() => {
    getAllFoodsHandler();
    setIsEmpity(() => {
      if (localStorage.getItem("cartItems")) {
        return !Boolean(JSON.parse(localStorage.getItem("cartItems") as string).length);
      }
      return false;
    });
  }, [cartItems]);

  return (
    <div className="mt-6">
      {!isEmpity ? (
        <div className="relative lg:grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-9">
            {cartItems.map((item) => (
              <CartItem {...item} key={item.id} />
            ))}
          </div>
          <div className="lg:block hidden col-span-3 sticky h-fit !max-h-[calc(100vh-2.5rem)] top-5">
            <div className="w-full mb-4 border-2 border-amber-950/10 bg-amber-100/5 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <div className="text-lg ">Total Price :</div>
                <div className="text-xl text-(--seco)">${totalPrice}</div>
              </div>
              <div className="p-3 bg-(--prim) text-white text-center rounded-xl cursor-pointer active:scale-95 mt-6">
                sign in and purchase
              </div>
            </div>
            <div className="w-full border-2 border-amber-950/10 bg-amber-100/5 p-4 rounded-lg">
              <div>
                {/* <label className="cursor-pointer text-sm" htmlFor="discount_code">Enter Discount Code</label> */}
                <div className="border-2 mt-1 text-sm border-amber-950/10 flex p-1 rounded-lg">
                  <input
                    id="discount_code"
                    placeholder="discount code..."
                    className="outline-none w-[calc(100%-3rem)] px-2"
                    type="text"
                  />
                  <button className="rounded-md text-white bg-(--prim) text-sm py-1.5 px-3 cursor-pointer active:scale-95">
                    apply
                  </button>
                </div>
                <div className="text-neutral-600 text-xs mt-4">
                  if you have a discount code, enter it in the box above to
                  apply the discount to the food items in your cart.
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid place-content-center relative h-[calc(100vh-10rem)]">
          <div className="flex mb-4 flex-col items-center min-w-[98vw]">
            <img
              className="w-56 mb-2"
              src="/icons/carrot-character.png"
              alt=""
            />
            <div className="text-5xl font-bold top-1/2 text-center text-neutral-800">
              your cart is empty
            </div>
          </div>
          <div className="flex justify-center pt-8">
            <Link
              href="/menu"
              className="px-4 flex gap-2 items-center py-2 bg-(--prim) hover:bg-(--prim)/90 active:scale-95 text-amber-50 rounded-3xl"
            >
              <div>
                <KeyboardBackspaceRoundedIcon />
              </div>
              <div>View Menu</div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
