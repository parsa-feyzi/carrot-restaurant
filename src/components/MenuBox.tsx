import { I_Menu } from "@/types/types"
import MenuBoxImage from "./MenuBoxImage"

function MenuBox({ menu_image, menu_name }: I_Menu) {
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
        <div>
            <MenuBoxImage image={menu_image} />
        </div>
        <div className="text-lg text-gray-500">
            { menu_name }
        </div>
    </div>
  )
}

export default MenuBox