"use client";

import useCartContext from "@/hooks/useCartContext";
import Link from "next/link";

function CartIcon() {
  const { totalQrt } = useCartContext();

  return (
    <Link className="relative" href="/cart">
      {totalQrt !== 0 && <div className="absolute text-[10px] pt-0.5 h-4 min-w-4 px-1 grid place-content-center rounded-full bg-(--prim)/90 -top-2 -right-2.5 text-amber-50">{totalQrt}</div>}
      <img src="/icons/basket_icon.png" className="size-5 active:scale-95" />
    </Link>
  );
}

export default CartIcon;
