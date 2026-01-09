import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useProductDetail } from "../hooks/useProductDetail";
import { addToCart } from "../redux/cartSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, loading, error } = useProductDetail(id);

  if (loading) return <div className="loader">Loading product...</div>;
  if (error) return <p className="error-text">Error: {error}</p>;
  if (!product) return <p className="error-text">Product not found.</p>;

  return (
    <section className="container product-detail">
      <div className="product-detail-image">
        <img src={product.thumbnail} alt={product.title} loading="lazy" />
      </div>
      <div className="product-detail-info">
        <h1>{product.title}</h1>
        <p className="product-detail-desc">{product.description}</p>
        <p className="product-detail-price">${product.price}</p>
        <p className="product-detail-meta">
          Brand: <strong>{product.brand}</strong> | Category:{" "}
          <strong>{product.category}</strong>
        </p>
        <button
          className="btn btn-primary"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </button>
      </div>
    </section>
  );
};

export default ProductDetail;
