import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="flex py-3 sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center space-x-2 sm:gap-6">
        <p>{formatCurrency(totalPrice)}</p>
        <Button type="small">Remove</Button> {/* TODO: Add onClick handler */}
      </div>
    </li>
  );
}

export default CartItem;
