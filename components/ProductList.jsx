import { useSelector } from "react-redux";
import { useProducts } from "../hooks/useProducts";
import ProductItem from "./ProductItem";
import { selectSearchTerm } from "../redux/productSlice";

const ProductList = () => {
  const { products, loading, error } = useProducts();
  const searchTerm = useSelector(selectSearchTerm);

  if (loading) return <div className="loader">Loading products...</div>;
  if (error) return <p className="error-text">Error: {error}</p>;

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="banner">
        <img src="/banner.png" alt="Banner" className="banner-image" />
        <div className="banner-content">
          <h1 className="banner-title">Welcome to ShoppyGlobe</h1>
          <p className="banner-sub">Discover great deals and daily offers</p>
        </div>
      </div>
      <section className="container">
        <h1 className="page-title">Products</h1>
        {filtered.length === 0 ? (
          <p className="muted-text">No products found for "{searchTerm}".</p>
        ) : (
          <div className="product-grid">
            {filtered.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default ProductList;
