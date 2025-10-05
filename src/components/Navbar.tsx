import Link from "next/link";
import React from "react";
import NavItems from "./NavItems";
import CartIcon from "./CartIcon";
import HambergerButton from "./HambergerButton";

function Navbar() {
  return (
    <nav className="py-6 flex items-center justify-between">
      <Link href="/">
        <img className="lg:w-30 w-24" src="/icons/icon.png" alt="" />
      </Link>
      <NavItems />
      <div className="flex lg:gap-8 gap-6 items-center">
        <Link href="/menu">
          <img
            src="/icons/search_icon.png"
            className="size-4.5 active:scale-95"
          />
        </Link>
        <CartIcon />
        <div className="md:block hidden py-1.5 px-6 cursor-pointer text-sm rounded-full border border-(--seco) text-(--seco) hover:text-white hover:bg-(--seco) active:scale-95">
          sign in
        </div>
        <HambergerButton />
      </div>
    </nav>
  );
}

export default Navbar;
