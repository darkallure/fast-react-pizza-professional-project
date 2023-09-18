import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header
      className="font-pizza flex items-center justify-between
    bg-orange-600 px-4 py-3 uppercase opacity-80 sm:px-6"
    >
      <Link to="/" className="tracking-widest">
        Pizza Shop
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
