import Link from "next/link";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";

function NotFound() {
  return (
    <div className="grid place-content-center relative h-[calc(100vh-8rem)]">
      <div className="flex mb-4 flex-col items-center min-w-[98vw]">
        <img className="w-56 mb-2" src="/icons/carrot-character.png" alt="" />
        <div className="text-5xl font-bold top-1/2 text-center text-neutral-800">
          page not found
        </div>
      </div>
      <div className="flex justify-center pt-8">
        <Link
          href="/"
          className="px-4 flex gap-2 items-center py-2 bg-(--prim) hover:bg-(--prim)/90 active:scale-95 text-amber-50 rounded-3xl"
        >
          <div>
            <KeyboardBackspaceRoundedIcon />
          </div>
          <div>Go To Home</div>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
