import React from "react";
import heroImage from "../../assets/images_icons/bruchetta.svg";
import PrimaryButton from "../../global/widgets/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../global/router";
import Container from "../../global/components/Container";

export default function BookingHero() {
  const navigate = useNavigate();
  return (
    <section className=" px-2 w-full bg-primary1 py-10">
      <Container
        children={
          <div className="flex justify-between items-center py-10">
            <h1 className=" text-3xl md:text-6xl font-markazi text-lightGrey opacity-75">
              You can Order online !!!
            </h1>
            <PrimaryButton
              text="Order Now"
              onClick={() => {
                navigate(APP_ROUTES.ORDER_ONLINE);
              }}
            />
          </div>
        }
      />
    </section>
  );
}
