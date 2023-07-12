import React from "react";
import Layout from "../../global/components/Layout";
import Container from "../../global/components/Container";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { APP_ROUTES } from "../../global/router";
import { useNavigate } from "react-router-dom";

export default function ConfirmBookingPage() {
  const navigate = useNavigate();
  return (
    <Layout
      children={
        <Container
          children={
            <div className="h-96 flex flex-col justify-center">
              <div className=" flex gap-5 m-10 py-10 px-5 rounded-lg bg-secondary2 text-2xl text-primary1">
                <FontAwesomeIcon icon={faCheck} className="text-4xl" />
                <p> Table booked seccessfully</p>
              </div>
              <button
                className="underline text-2xl text-black hover:text-primary1 font-markazi font-medium"
                onClick={() => {
                  navigate(APP_ROUTES.RESERVATIONS);
                }}
              >
                Back to Reservations
              </button>
            </div>
          }
        />
      }
    />
  );
}
