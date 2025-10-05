import ProductBox from "@/components/ProductBox";
import { I_Food, I_Menu, I_SearchedFoods } from "@/types/types";
import axios from "axios";
import { Metadata } from "next";
import MenuCategoryBox from "./components/MenuCategoryBox";
import PaginationButton from "./components/PaginationButton";

export const metadata: Metadata = {
  title: "menu",
  description: "carrot menu",
};

interface I_MenuProps {
  params: Promise<{}>;
  searchParams: Promise<{ page: string; pre_page: string }>;
}

async function Menu({ searchParams }: I_MenuProps) {
  const page = (await searchParams).page || "1";
  // const pre_page = (await searchParams).pre_page || "12"

  const { data: foods }: { data: I_SearchedFoods } = await axios(
    `http://localhost:8000/foods?_page=${page}&_per_page=${12}`
  );
  const { data: menus } = await axios(`http://localhost:8000/menus`);

  let pagesCounts: number[] = [];
  for (let i = 1; i <= foods.pages; i++) {
    pagesCounts.push(i);
  }

  return (
    <div className="mt-6 lg:grid lg:grid-cols-12 gap-6 relative">
      <div className="lg:block hidden sticky !h-[calc(100vh-2.5rem)] top-5 col-span-3 p-4 pe-0">
        <div></div>
        <div className="menu_category h-full overflow-y-auto pe-4">
          {menus.map((menu: I_Menu, index: number) => (
            <MenuCategoryBox
              isLatest={index + 1 === menus.length}
              {...menu}
              key={menu.menu_name}
            />
          ))}
        </div>
      </div>
      <div className="lg:col-span-9">
        <div className="xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 grid gap-x-3 gap-y-4">
          {foods.data.map((food: I_Food) => (
            <ProductBox {...food} isMenu key={food._id} />
          ))}
        </div>
        <div className="mt-12 gap-1 flex w-full justify-center items-center">
          <PaginationButton pages={foods.pages} isPrevius page={parseInt(page) - 1} activePage={parseInt(page)} />
          {pagesCounts.map((pageCount) => (
            <PaginationButton
              page={pageCount}
              activePage={parseInt(page)}
              key={pageCount}
            />
          ))}
          <PaginationButton pages={foods.pages} isNext page={parseInt(page) + 1} activePage={parseInt(page)} />
        </div>
      </div>
    </div>
  );
}

export default Menu;
