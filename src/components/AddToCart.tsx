"use client"

import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";

function AddToCart({ id }: { id: string }) {
  return (
    <div className="absolute bottom-3 right-3">
      {!true ? (
        <div className="size-10 cursor-pointer active:scale-95 grid place-content-center bg-amber-100 shadow-md rounded-full">
          <AddRoundedIcon />
        </div>
      ) : (
        <div className="h-10 flex items-center gap-2 px-1 bg-amber-100 shadow-md rounded-full">
          <div className="rounded-full text-red-900 size-8 grid place-content-center p-1 cursor-pointer bg-amber-900/5 hover:bg-amber-900/10 active:bg-amber-900/20">
            <RemoveRoundedIcon fontSize="small" />
          </div>
          <div>4</div>
          <div className="rounded-full text-green-900 size-8 grid place-content-center p-1 cursor-pointer bg-amber-900/5 hover:bg-amber-900/10 active:bg-amber-900/20">
            <AddRoundedIcon fontSize="small" />
          </div>
        </div>
      )}
    </div>
  );
}

export default AddToCart;
