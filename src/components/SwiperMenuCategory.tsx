"use client";
import { I_Menu } from "@/types/types";
import MenuBox from "./MenuBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";

interface I_ {
  menus: I_Menu[];
}

function SwiperMenuCategory({ menus }: I_) {
  return (
    <div className="pb-10 md:mb-6 md:border-b-2 md:border-black/5">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        centeredSlides
        slidesPerView={2}
        spaceBetween={15}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
          1500: {
            slidesPerView: 7,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {menus.map((menu) => (
          <SwiperSlide>
            <MenuBox {...menu} key={menu.menu_name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwiperMenuCategory;
