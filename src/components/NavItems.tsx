"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function NavItems() {
  const [navs] = useState([
    { title: "Home", href: "/" },
    { title: "Menu", href: "/menu" },
    { title: "Abute us", href: "/abute-us" },
    { title: "Contact us", href: "/contact-us" },
  ]);

  const route = usePathname()

  return (
    <div className="md:flex hidden items-center justify-center lg:gap-8 gap-5 text-(--seco)">
      {navs.map((nav) => (
        <Link href={nav.href} className={`${ route === nav.href ? "border-b-2 border-(--seco)" :  "hover:border-b-2 duration-50 hover:border-(--seco)"} font-medium`} key={nav.href}>
          {nav.title}
        </Link>
      ))}
    </div>
  );
}

export default NavItems;
