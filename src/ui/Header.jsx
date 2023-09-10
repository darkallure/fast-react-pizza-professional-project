import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">Pizza Shop</Link>
      <SearchOrder />
      <p>Polozov Nikolay</p>
    </header>
  );
}

export default Header;
