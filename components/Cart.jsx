import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  selectCartItems,
  selectCartTotal,
  updateQuantity,
  removeFromCart,
} from "../redux/cartSlice";
import CartItem from "./CartItem";

const Cart = () => {
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  if (items.length === 0) {
    return (
      <section className="container cart-page">
        <h1 className="page-title">Your Cart</h1>
        <p className="muted-text">Your cart is empty...</p>
        <Link to="/" className="btn btn-primary">
          Continue Shopping 😀
        </Link>
      </section>
    );
  }

  return (
    <section className="container cart-page">
      <h1 className="page-title">Your Cart</h1>
      <div className="cart-items">
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onQuantityChange={(quantity) =>
              dispatch(updateQuantity({ id: item.id, quantity }))
            }
            onRemove={() => dispatch(removeFromCart(item.id))}
          />
        ))}
      </div>
      <div className="cart-summary">
        <p className="cart-total">
          Total: <span>${total.toFixed(2)}</span>
        </p>
        <Link to="/checkout" className="btn btn-primary">
          Proceed to Checkout
        </Link>
      </div>
    </section>
  );
};

export default Cart;
