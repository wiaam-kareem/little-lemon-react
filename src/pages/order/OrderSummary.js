import React from "react";

export default function OrderSummary({ totalPrice, cartItems, shippingFee }) {
  return (
    <div className="bg-lightGrey w-full  h-fit rounded-lg p-5 flex-1">
      <h2 className="text-3xl text-secondary1 font-markazi font-medium">
        Total Price: {totalPrice + shippingFee}$
      </h2>
      <hr className="border-spacing-1  border-black border-[1px] border-solid" />
      <ul>
        {cartItems.map((item, index) => {
          return (
            <>
              <li
                key={item.menueItem.id}
                className="flex justify-between px-2 py-5 text-black"
              >
                <p>{item.menueItem.dishName}</p>
                <span className=" opacity-75">{item.total}$</span>
              </li>
              {index !== cartItems.length - 1 ? <hr /> : null}
            </>
          );
        })}
      </ul>
      <hr className="border-spacing-1  border-black border-[1px] border-solid" />
      <div className="flex justify-between px-2 py-2 text-sm  font-semibold">
        <p>Shipping Fee</p>
        <span className="text-black opacity-75">{shippingFee}$</span>
      </div>
    </div>
  );
}
