import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { removeItem, clearCart } from "../utils/cartSlice";

import { useSelector } from "react-redux";
import CartItems from "./CartItems";

const Cart = () => {

    // Subscribing to the store
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }


    return (
        <div className="mt-5">
            <div className="text-2xl font-bold text-center">This is Cart</div>
            <div className="w-[80%] m-auto flex flex-col items-center justify-center">
                <div className="text-center">
                    <button
                        className="bg-black text-white p-2 rounded-lg my-4"
                        onClick={handleClearCart}
                    >Clear Cart</button>
                    {cartItems.length == 0 && <h1 className="font-semibold">Cart is Empty. Go and Add Items..</h1>}
                </div>
                <ItemList items={cartItems} />
            </div>
        </div>)

};

export default Cart;
