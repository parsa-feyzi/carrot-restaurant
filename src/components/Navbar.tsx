import Link from "next/link";
import React from "react";
import NavItems from "./NavItems";

function Navbar() {
  return (
    <nav className="py-6 flex items-center justify-between">
      <Link href="/">
        <img className="w-30" src="/icons/icon.png" alt="" />
      </Link>
      <NavItems />
      <div className="flex gap-8 items-center">
        <Link href="/menu">
            <img src="/icons/search_icon.png" className="size-4.5 active:scale-95" />
        </Link>
        <Link href="/cart">
            <img src="/icons/basket_icon.png" className="size-5 active:scale-95" />
        </Link>
        <div className="py-1.5 px-6 cursor-pointer text-sm rounded-full border border-(--seco) text-(--seco) hover:text-white hover:bg-(--seco) active:scale-95">
            sign in
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
