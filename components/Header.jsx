import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm, selectSearchTerm } from "../redux/productSlice";
import { selectCartCount } from "../redux/cartSlice";

const Header = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);
  const cartCount = useSelector(selectCartCount);

  return (
    <header className="header">
      <div className="header-inner container">
        <Link to="/" className="logo">
          ✨ShoppyGlobe✨
        </Link>

        <nav className="nav-links">
          <NavLink to="/" end className="nav-link">
            Home
          </NavLink>
          <NavLink to="/cart" className="nav-link">
            Cart
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </NavLink>
        </nav>

        <div className="search-wrapper">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
