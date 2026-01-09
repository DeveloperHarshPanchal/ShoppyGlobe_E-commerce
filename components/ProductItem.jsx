import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { addToCart } from "../redux/cartSlice";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const { id, title, price, thumbnail } = product;

  return (
    <article className="product-card">
      <Link to={`/products/${id}`} className="product-link">
        <div className="product-image-wrapper">
          <img
            src={thumbnail}
            alt={title}
            loading="lazy"
            className="product-image"
          />
        </div>
        <h3 className="product-title">{title}</h3>
      </Link>
      <div className="product-footer">
        <span className="product-price">${price}</span>
        <button
          className="btn btn-primary"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default ProductItem;
