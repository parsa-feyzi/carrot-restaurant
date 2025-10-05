"use client";

import React, { useState } from "react";

interface I_MenuBoxImage {
  image: string;
  isMenuCategory?: boolean;
}

function MenuBoxImage({ image, isMenuCategory }: I_MenuBoxImage) {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <img
      onClick={() => setIsMenuActive(!isMenuActive)}
      className={`${isMenuActive ? "border-4 !border-(--prim)/70" : ""}
      ${isMenuCategory ? "size-14" : "md:size-26 size-22"}
      rounded-full shadow-md cursor-pointer`}
      src={`/foods/${image}.png`}
      alt=""
    />
  );
}

export default MenuBoxImage;
