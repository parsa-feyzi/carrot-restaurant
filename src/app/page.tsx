import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MenuBox from "@/components/MenuBox";
import ProductBox from "@/components/ProductBox";
import { I_Food, I_Menu } from "@/types/types";
import axios from "axios";

export default async function Home() {

  const { data: foods } = await axios(`http://localhost:8000/foods`)
  const { data: menus } = await axios(`http://localhost:8000/menus`)

  return (
      <div>
        <Header />
        <div className="mt-12">
          <div>
            <div className="mb-12">
              <div className="font-bold text-4xl text-neutral-900 pb-4">Explore our menu</div>
              <div className="text-gray-600">Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your <br /> cravings and elevate your dining experience, one delicious meat at time</div>
            </div>
            <div className="flex justify-between pb-10 mb-6 border-b-2 border-black/5">
              {
                menus.map((menu: I_Menu) => <MenuBox {...menu} key={menu.menu_name} />)
              }
            </div>
          </div>
          <div>
            <div className="font-bold text-4xl text-neutral-900 pb-8">Top dishes near you</div>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-8">
              {
                foods.slice(0, 16).map((food: I_Food) => <ProductBox {...food} key={food._id} />)
              }
            </div>
          </div>
        </div>
      </div>
  );
}
