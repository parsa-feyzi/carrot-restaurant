import Header from "@/components/Header";
import ProductBox from "@/components/ProductBox";
import SwiperMenuCategory from "@/components/SwiperMenuCategory";
import { I_Food } from "@/types/types";
import axios from "axios";

export default async function Home() {

  const { data: foods } = await axios(`http://localhost:8000/foods`)
  const { data: menus } = await axios(`http://localhost:8000/menus`)

  return (
      <div>
        <Header />
        <div className="mt-12">
          <div className="overflow-hidden">
            <div className="mb-12">
              <div className="font-bold md:text-4xl md:text-left text-center text-2xl text-neutral-900 pb-4">Explore our menu</div>
              <div className="md:text-base text-sm md:text-left text-center text-gray-600">Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your <br /> cravings and elevate your dining experience, one delicious meat at time</div>
            </div>
            <SwiperMenuCategory menus={menus} />
          </div>
          <div>
            <div className="md:block hidden font-bold text-4xl text-neutral-900 pb-8">Top dishes near you</div>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-8">
              {
                foods.slice(0, 12).map((food: I_Food) => <ProductBox {...food} key={food._id} />)
              }
            </div>
          </div>
        </div>
      </div>
  );
}
