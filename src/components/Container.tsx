import { I_Children } from "@/types/types"

function Container({ children }: I_Children) {
  return (
    <div className="container sm:px-8 px-4 mx-auto">
        {children}
    </div>
  )
}

export default Container