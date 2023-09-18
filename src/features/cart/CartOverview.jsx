import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTotalCartQuantity, getTotalCartPrice } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);
  if (!totalCartQuantity) return null;

  return (
    <div
      className="jus flex items-center justify-between bg-stone-500 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6
    md:text-base
    "
    >
      <p className="font-stone-300 space-x-4 text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">View cart</Link>
    </div>
  );
}

export default CartOverview;
