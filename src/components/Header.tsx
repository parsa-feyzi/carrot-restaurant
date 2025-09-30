import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="mt-6">
      <div className="rounded-2xl relative overflow-hidden w-full">
        <img src="/foods/header_img.png" className="w-full" alt="" />
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 flex flex-col justify-end px-[6vw] py-[8vh] text-white">
          <div className="w-full xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl max-w-130 font-bold xl:leading-20 pb-8 lg:leading-16">Order your favourite food here</div>
          <div className="w-full pb-8 max-w-150 text-gray-50">
            Choose from a diverse menu featuring a delectable array of dishes
            crafted with the finest ingredients and culinary expertise. Our
            mission is to satisfy your cravings and elevate your dining
            experience, one delicouse meal at a time.
          </div>
          <div className="w-full">
              <Link className="py-3.5 px-6 rounded-full bg-gray-300 text-gray-950" href="/menu">View Menu</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
