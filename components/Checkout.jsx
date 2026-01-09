import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  clearCart,
  selectCartItems,
  selectCartTotal,
} from "../redux/cartSlice";

const Checkout = () => {
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!items.length) {
      setMessage("Your cart is empty.");
      return;
    }
    setMessage("Order placed! Redirecting to home...");
    dispatch(clearCart());
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <section className="container checkout-page">
      <h1 className="page-title">Checkout</h1>
      {message && <p className="success-text">{message}</p>}

      <div className="checkout-grid">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Address
            <textarea
              name="address"
              required
              rows="3"
              value={formData.address}
              onChange={handleChange}
            />
          </label>
          <button type="submit" className="btn btn-primary">
            Place Order
          </button>
        </form>

        <aside className="checkout-summary">
          <h2>Order Summary</h2>
          {items.length === 0 ? (
            <p className="muted-text">No items in cart.</p>
          ) : (
            <>
              <ul>
                {items.map((item) => (
                  <li key={item.id} className="checkout-item">
                    <span>
                      {item.title} × {item.quantity}
                    </span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              <p className="checkout-total">
                Total: <strong>${total.toFixed(2)}</strong>
              </p>
            </>
          )}
        </aside>
      </div>
    </section>
  );
};

export default Checkout;
