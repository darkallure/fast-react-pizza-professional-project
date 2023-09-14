// Test ID: IIDSAT
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import { getOrder } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";
import OrderItem from "./OrderItem";

function Order() {
  const order = useLoaderData();
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="space-y-5 px-5 py-5">
      <div
        className="flex flex-wrap items-center
      justify-between gap-2
      "
      >
        <h2 className="mb-8 text-xl font-semibold">Order #{id} status</h2>

        <div className="space-x-2 text-sm">
          {priority && (
            <span className="rounded-full bg-red-500 px-2 py-1 uppercase tracking-wide text-white">
              Priority
            </span>
          )}
          <span className="rounded-full bg-green-500 px-2 py-1 uppercase tracking-wide text-white">
            {status} order
          </span>
        </div>
      </div>

      <div
        className="flex flex-wrap items-center
      justify-between gap-2 rounded-md bg-stone-200 px-7 py-5
      "
      >
        <p className="text-lg font-semibold">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-xs font-extralight">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>
      <ul
        className="
        divide-y divide-stone-200
        rounded-md border-b border-t
      "
      >
        {cart.map((pizza) => (
          <OrderItem key={pizza.id} item={pizza} />
        ))}
      </ul>

      <div className="space-y-5 rounded-md bg-stone-200 px-5 py-5">
        <p className="text-sm font-medium text-slate-500">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm font-medium text-slate-500">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="text-lg font-semibold text-slate-500">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
    </div>
  );
}
export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
