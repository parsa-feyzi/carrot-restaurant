import { Metadata } from "next";
import CartPage from "./components/CartPage";

export const metadata: Metadata = { title: "cart", description: "carrot cart" };

const Cart = () => <CartPage />;

export default Cart;
