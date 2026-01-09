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
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={(e) => onQuantityChange(Number(e.target.value))}
        />
        <button className="btn btn-ghost" onClick={onRemove}>
          Remove
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
