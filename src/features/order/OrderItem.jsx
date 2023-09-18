import { formatCurrency } from "../../utils/helpers";
function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3">
      <div
        className="flex items-center justify-between
      gap-4
      "
      >
        <p className="font-bold">
          <span>{quantity}&times;</span> {name}
        </p>
        <p className="text-right font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="space-x-3 text-xs font-extralight capitalize text-slate-500">
        {isLoadingIngredients
          ? "Loading ingredients..."
          : ingredients.join(", ")}
      </p>
    </li>
  );
}

export default OrderItem;
