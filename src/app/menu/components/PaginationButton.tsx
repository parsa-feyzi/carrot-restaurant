"use client";

import { redirect } from "next/navigation";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import React from "react";

interface I_PaginationButton {
  page: number;
  activePage: number;
  isPrevius?: boolean;
  isNext?: boolean;
  pages?: number;
}

function PaginationButton({ page, activePage, isPrevius, isNext, pages }: I_PaginationButton) {
  const handleChangePage = () => {
    if (isNext && activePage === pages) {
    } else if (isPrevius && activePage === 1) {
    } else {
      const targetPage = new URLSearchParams(`page=${page}&per_page=${12}`);
      redirect(`/menu?${targetPage.toString()}`);
    }
  };

  return (
    <div
      onClick={handleChangePage}
      className={`${
        activePage === page
          ? "bg-(--prim) text-white border-(--prim) hover:bg-(--prim)/85"
          : "bg-white hover:bg-(--prim)/5"
      } ${isPrevius || isNext ? "px-4 border-(--prim)/10" : "w-12 border-(--prim)/40 shadow-sm"}
      ${
        (isNext && activePage === pages) || (isPrevius && activePage === 1)
          ? "opacity-50 !cursor-default active:scale-100"
          : ""
      }
      h-12 grid border-2 place-content-center rounded-lg cursor-pointer active:scale-95`}
    >
      {isPrevius && (
        <div className="flex gap-1 items-center">
          <ArrowForwardIosRoundedIcon
            sx={{ fontSize: 16 }}
            className="rotate-180"
          />
          <div>Previus</div>
        </div>
      )}
      {isNext && (
        <div className="flex gap-1 items-center">
          <div>Next</div>
          <ArrowForwardIosRoundedIcon sx={{ fontSize: 16 }} />
        </div>
      )}
      {isPrevius || isNext || page}
    </div>
  );
}

export default PaginationButton;
