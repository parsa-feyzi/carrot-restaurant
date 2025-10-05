'use client'

import { ComponentProps, CSSProperties, ReactNode } from "react";
import Button from "./Button";

type T_Input = { onSubmit?: () => void; buttonContent?: ReactNode; buttonStyle?: CSSProperties } & ComponentProps<"input">;

function Input({ onSubmit, style, buttonStyle, placeholder, type = "text", buttonContent }: T_Input) {
  return (
    <form onSubmit={onSubmit} style={style} className={`${buttonContent ? "flex justify-between p-1" : "py-3"} border-2 text-sm border-amber-950/10 rounded-lg`}>
      <input
        placeholder={placeholder}
        className="outline-none w-[calc(100%-3rem)] px-2"
        type={type}
      />
      {buttonContent && (
        <button style={buttonStyle} className="rounded-md text-white bg-(--prim) text-sm py-1.5 px-3 cursor-pointer active:scale-95">
          {buttonContent}
        </button>
      )}
      {/* <Button >apply</Button> */}
    </form>
  );
}

export default Input;
