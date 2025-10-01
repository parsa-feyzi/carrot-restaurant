import MenuBoxImage from "@/components/MenuBoxImage"
import { I_Menu } from "@/types/types"

type T_MenuCategoryBox = I_Menu & { isLatest: boolean }

function MenuCategoryBox({ menu_image, menu_name, isLatest }: T_MenuCategoryBox) {
    return (
      <div className={`${isLatest ? "" : "border-b border-black/10"} flex py-2.5 gap-3 items-center`}>
          <div>
              <MenuBoxImage image={menu_image} isMenuCategory />
          </div>
          <div className="text-lg">
              { menu_name }
          </div>
      </div>
    )
  }
  
  export default MenuCategoryBox