import { useSelector } from "react-redux";
import CartItems from "./CartItems";

const Cart = () => {
  // Subscribing to the store
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="text-center m-4">
      <h1 className="font-bold text-2xl">Cart</h1>
      <CartItems items={cartItems} />
    </div>
  );
};

export default Cart;
