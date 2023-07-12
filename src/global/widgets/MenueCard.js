import { useNavigate } from "react-router-dom";
import { CART_ITEMS_ACTIONS } from "../../pages/order/cartHook";
import OrderTextButton from "./OrderTextButton";
import { APP_ROUTES } from "../router";
import { CartContext } from "../contexts/cartContext";
import { useContext } from "react";
export default function MenueCard(props) {
  const navigate = useNavigate();
  const { cartState, dispatch } = useContext(CartContext);
  const handleOnClick = () => {
    dispatch({
      type: CART_ITEMS_ACTIONS.ADD_ITEM,
      payload: { item: props.item },
    });
    navigate(APP_ROUTES.ORDER_ONLINE);
  };
  return (
    <div className="bg-lightGrey rounded-lg">
      <img
        src={props.item.imagePath}
        className="rounded-t-lg md:h-3/5 w-full object-cover"
      />
      <div className="px-3 py-5 gap-3">
        <div className="flex justify-between ">
          <h3 className="">{props.item.dishName}</h3>
          <p className="text-sm text-secondary1 font-semibold">
            $ {props.item.price}
          </p>
        </div>
        <p className="text-md text-overflow overflow-maxLine-3 font-Karla font-normal text-primary1">
          {props.item.describtion}
        </p>
        <OrderTextButton text="ADD To Cart" onClick={handleOnClick} />
      </div>
    </div>
  );
}
