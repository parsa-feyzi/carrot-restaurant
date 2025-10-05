import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="md:mt-6 mt-3">
      <div className="rounded-2xl relative overflow-hidden w-full min-h-60">
        <img src="/foods/header_img.png" className="size-full min-h-60 object-cover" alt="" />
        <div className="absolute top-0 left-0 w-full h-full bg-black/45 flex flex-col md:justify-end justify-evenly px-[6vw] md:py-[8vh] py-8 text-white">
          <div className="md:text-left text-center w-full xl:text-6xl lg:text-5xl md:text-4xl text-3xl max-w-130 font-bold xl:leading-20 md:pb-8 pb-6 lg:leading-16">Order your favourite food here</div>
          <div className="md:block hidden w-full pb-8 max-w-150 text-gray-50">
            Choose from a diverse menu featuring a delectable array of dishes
            crafted with the finest ingredients and culinary expertise. Our
            mission is to satisfy your cravings and elevate your dining
            experience, one delicouse meal at a time.
          </div>
          <div className="w-full flex md:justify-start justify-center">
              <Link className="md:py-3.5 py-2.5 px-6 rounded-full bg-gray-300 text-gray-950" href="/menu">View Menu</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
