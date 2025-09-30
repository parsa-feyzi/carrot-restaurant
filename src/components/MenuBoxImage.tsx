"use client";

import React, { useState } from "react";

interface I_MenuBoxImage {
  image: string;
}

function MenuBoxImage({ image }: I_MenuBoxImage) {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <img
      onClick={() => setIsMenuActive(!isMenuActive)}
      className={`${
        isMenuActive ? "border-4 !border-(--prim)" : ""
      } rounded-full shadow-md cursor-pointer size-26`}
      src={`/foods/${image}.png`}
      alt=""
    />
  );
}

export default MenuBoxImage;
