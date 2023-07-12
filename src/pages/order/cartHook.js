import { useReducer } from "react";
export const CART_ITEMS_ACTIONS = {
  INITIAL: "initial",
  INCREMENT: "increment",
  DECREMENT: "decrement",
  REMOVE: "remove",
  ADD_ITEM: "addItem",
};
export default function useCart() {
  function calculateTotalPrice(items) {
    return items.reduce((total, item) => {
      let currentTotal = item.menueItem.price * item.quantity;
      item.total = currentTotal;
      return total + currentTotal;
    }, 0);
  }
  function updateQuantity(updateType, itemId, items) {
    const updatedItems = items.map((item) => {
      if (item.menueItem.id === itemId) {
        switch (updateType) {
          case CART_ITEMS_ACTIONS.INCREMENT:
            return { ...item, quantity: item.quantity + 1 };
          case CART_ITEMS_ACTIONS.DECREMENT:
            if (item.quantity > 0) {
              return { ...item, quantity: item.quantity - 1 };
            }
            break;
          default:
            break;
        }
      }
      return item;
    });
    return updatedItems;
  }
  function addItem(item, cartItems) {
    const updatedItems = [
      ...cartItems,
      {
        menueItem: item,
        quantity: 1,
        total: 0,
      },
    ];
    return updatedItems;
  }
  function removeItem(itemId, cartItems) {
    const updatedItems = cartItems.filter((item) => {
      if (item && item.menueItem && item.menueItem.id === itemId) {
        return false;
      }
      return true;
    });
    return updatedItems;
  }
  const cartReducer = (state, action) => {
    let updatedItems;
    switch (action.type) {
      case CART_ITEMS_ACTIONS.ADD_ITEM:
        updatedItems = addItem(action.payload.item, state.items);
        break;
      case CART_ITEMS_ACTIONS.REMOVE:
        updatedItems = removeItem(action.payload.itemId, state.items);
        break;
      case CART_ITEMS_ACTIONS.INCREMENT:
        updatedItems = updateQuantity(
          CART_ITEMS_ACTIONS.INCREMENT,
          action.payload.itemId,
          state.items,
        );
        break;
      case CART_ITEMS_ACTIONS.DECREMENT:
        updatedItems = updateQuantity(
          CART_ITEMS_ACTIONS.DECREMENT,
          action.payload.itemId,
          state.items,
        );
        break;
      default:
        updatedItems = state.items;
        break;
    }

    return {
      items: updatedItems,
      totalPrice: calculateTotalPrice(updatedItems),
    };
  };
  const [cartState, dispatch] = useReducer(cartReducer, {
    items: [],
    totalPrice: 0,
  });

  return [cartState, dispatch];
}
