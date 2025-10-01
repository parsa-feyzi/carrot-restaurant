import ProductBox from "@/components/ProductBox";
import { I_Food, I_Menu } from "@/types/types";
import axios from "axios";
import { Metadata } from "next";
import MenuCategoryBox from "./components/MenuCategoryBox";

export const metadata: Metadata = {
  title: "menu",
  description: "carrot menu",
};

async function Menu() {
  const { data: foods } = await axios(`http://localhost:8000/foods`);
  const { data: menus } = await axios(`http://localhost:8000/menus`);

  return (
    <div className="mt-6 grid grid-cols-12 gap-6 relative">
      <div className="sticky !h-[calc(100vh-2.5rem)] top-5 col-span-3 bg-amber-950/3 rounded-xl p-4 pe-0">
        <div></div>
        <div className="menu_category h-full overflow-y-auto pe-4">
          {
            menus.map((menu: I_Menu, index: number) => <MenuCategoryBox isLatest={index+1 === menus.length} {...menu} key={menu.menu_name} />)
          }
        </div>
      </div>
      <div className="col-span-9 grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-x-3 gap-y-5">
        {foods.map((food: I_Food) => (
          <ProductBox {...food} isMenu key={food._id} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
