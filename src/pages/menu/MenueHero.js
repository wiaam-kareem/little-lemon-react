import React from "react";
import heroImage from "../../assets/images_icons/bruchetta.svg";
import PrimaryButton from "../../global/widgets/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../global/router";
import { useContext } from "react";
import { CartContext } from "../../global/contexts/cartContext";
import { CART_ITEMS_ACTIONS } from "../order/cartHook";

export default function MenueHero({ item }) {
  const navigate = useNavigate();
  const { cartState, dispatch } = useContext(CartContext);
  const handleOnClick = () => {
    dispatch({
      type: CART_ITEMS_ACTIONS.ADD_ITEM,
      payload: { item: item },
    });
    navigate(APP_ROUTES.ORDER_ONLINE);
  };
  return (
    <section className=" px-2 w-full">
      <div className="flex justify-between items-center py-10">
        <div className="py-5">
          <h1 className=" text-3xl md:text-6xl font-markazi opacity-75">
            Dish Of The Day
          </h1>
          <p className=" text-primary1  text-lg md:text-2xl font-karla font-extralight mb-5 ">
            {item.dishName} !!!
          </p>
          <PrimaryButton text="Order Now" onClick={handleOnClick} />
        </div>
        <img
          src={item.imagePath}
          className="rounded-lg w-1/3 md:w-80 h-full  "
        />
      </div>
    </section>
  );
}
