import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { CART_ITEMS_ACTIONS } from "./cartHook";
import { useContext } from "react";
import { CartContext } from "../../global/contexts/cartContext";
import EmptyCart from "./EmptyCart";
import OrderSummary from "./OrderSummary";

export default function Cart() {
  const { cartState, dispatch } = useContext(CartContext);
  useEffect(() => {
    dispatch({
      type: CART_ITEMS_ACTIONS.INITIAL,
    });
    return () => {};
  }, []);
  if (cartState.items.length === 0) return <EmptyCart />;
  else
    return (
      <section className="flex pb-40 flex-col md:flex-row gap-8">
        <div className="flex-1">
          {cartState.items.length > 0 &&
            cartState.items.map((item, index) => (
              <CartItem
                key={item.menueItem.id}
                item={item}
                totalPrice={item.total}
                quantity={item.quantity}
                onIncrement={() => {
                  dispatch({
                    type: CART_ITEMS_ACTIONS.INCREMENT,
                    payload: { itemId: item.menueItem.id },
                  });
                }}
                onDecrement={() => {
                  dispatch({
                    type: CART_ITEMS_ACTIONS.DECREMENT,
                    payload: { itemId: item.menueItem.id },
                  });
                }}
                onRemove={() => {
                  dispatch({
                    type: CART_ITEMS_ACTIONS.REMOVE,
                    payload: { itemId: item.menueItem.id },
                  });
                }}
              />
            ))}
        </div>
        <OrderSummary
          cartItems={cartState.items}
          totalPrice={cartState.totalPrice}
          shippingFee={20}
        />
      </section>
    );
}
