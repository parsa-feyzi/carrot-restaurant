import { JSX } from "react"

interface I_MediaLink { href: string, icon: JSX.Element }

function MediaLink({ href, icon }: I_MediaLink) {
  return (
    <a href={href} className='size-12 rounded-full grid place-content-center text-amber-50/50 border-2 border-amber-50/30 duration-200 hover:bg-amber-200 hover:text-gray-800 hover:border-amber-200 active:scale-95' target='_blank'>
        {icon}
    </a>
  )
}

export default MediaLink