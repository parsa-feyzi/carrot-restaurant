import { I_Children } from "@/types/types";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Container from "./Container";

function LayoutMain({ children }: I_Children) {
  return (
    <div>
      <Container>
        <Navbar />
        {children}
      </Container>
      <Footer />
    </div>
  );
}

export default LayoutMain;
