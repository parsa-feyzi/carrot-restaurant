import { cartContext } from "@/context/cartContext";
import { useContext } from "react";

const useCartContext = () => useContext(cartContext);

export default useCartContext;
