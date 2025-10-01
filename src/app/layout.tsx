import type { Metadata } from "next";
import "./globals.css";
import LayoutMain from "@/components/LayoutMain";
import { I_Children } from "@/types/types";

export const metadata: Metadata = {
  title: {
    default: "carrot",
    template: "carrot | %s"
  },
  description: "Carrot Resaurant ",
};

export default function RootLayout({
  children,
}: Readonly< I_Children >) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <LayoutMain>{children}</LayoutMain>
      </body>
    </html>
  );
}
