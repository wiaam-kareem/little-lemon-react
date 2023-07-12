import React from "react";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../global/router";

export default function EmptyCart() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-max py-32 text-lg font-Karla font-medium text-primary1 text-center ">
      <p>Your Cart is empty :)</p>
      <button
        className="underline text-2xl text-black hover:text-primary1 font-markazi font-medium"
        onClick={() => {
          navigate(APP_ROUTES.MENUE);
        }}
      >
        Go to Menue
      </button>
    </div>
  );
}
