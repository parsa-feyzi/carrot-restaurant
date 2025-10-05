import React, { ReactNode } from "react";

interface I_ButtonProps { children?: ReactNode; style?: React.CSSProperties }

function Button({ children, style }: I_ButtonProps) {
  return (
    <button
      style={style}
      className="p-3 bg-(--prim) text-white text-center rounded-xl flex items-center justify-center gap-2 cursor-pointer active:scale-95"
    >
      {children}
    </button>
  );
}

export default Button;
