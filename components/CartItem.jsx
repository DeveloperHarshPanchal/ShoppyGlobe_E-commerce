import PropTypes from "prop-types";

const CartItem = ({ item, onQuantityChange, onRemove }) => {
  return (
    <div className="cart-item">
      <div className="cart-item-main">
        <img
          src={item.thumbnail}
          alt={item.title}
          loading="lazy"
          className="cart-item-image"
        />
        <div>
          <h3 className="cart-item-title">{item.title}</h3>
          <p className="cart-item-price">${item.price}</p>
        </div>
      </div>
      <div className="cart-item-actions">
        <div className="quantity-controls">
          <button
            className="btn btn-ghost"
            onClick={() => onQuantityChange(Math.max(1, item.quantity - 1))}
            title="Decrease quantity"
          >
            −
          </button>
          <span className="quantity-display">{item.quantity}</span>
          <button
            className="btn btn-ghost"
            onClick={() => onQuantityChange(item.quantity + 1)}
            title="Increase quantity"
          >
            +
          </button>
        </div>
        <button
          className="btn btn-ghost"
          onClick={onRemove}
          title="Remove item"
        >
          🗑️ Remove
        </button>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    thumbnail: PropTypes.string,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  onQuantityChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default CartItem;
