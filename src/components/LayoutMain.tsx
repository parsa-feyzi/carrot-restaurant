import { I_Children } from "@/types/types";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Container from "./Container";
import CartContextProvider from "@/context/cartContext";

function LayoutMain({ children }: I_Children) {
  return (
    <CartContextProvider>
      <Container>
        <Navbar />
        {children}
      </Container>
      <Footer />
    </CartContextProvider>
  );
}

export default LayoutMain;
