import React from "react";
import { createBrowserRouter } from "react-router-dom";
import BookingPage from "../pages/booking/BookingPage";
import Home from "../pages/home/HomePage";
import LoginPage from "../pages/auth/LoginPage";
import NotFound from "./components/NotFound";
import MenuePage from "../pages/menu/MenuePage";
import AboutUsPage from "../pages/about/AboutUsPage";
import OrderPage from "../pages/order/OrderPage";
import ConfirmBookingPage from "../pages/booking/ConfirmBookingPage";
export const APP_ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  MENUE: "/menue",
  ORDER_ONLINE: "/order_online",
  RESERVATIONS: "/reservations",
  CONFIRM_BOOKING: "/confirm_booking",
  LOGIN: "/login",
  NOT_FOUND: "/*",
};

export const router = createBrowserRouter([
  {
    path: APP_ROUTES.HOME,
    element: <Home />,
  },
  {
    path: APP_ROUTES.ABOUT,
    element: <AboutUsPage />,
  },
  {
    path: APP_ROUTES.MENUE,
    element: <MenuePage />,
  },
  {
    path: APP_ROUTES.ORDER_ONLINE,
    element: <OrderPage />,
  },
  {
    path: APP_ROUTES.RESERVATIONS,
    element: <BookingPage />,
  },
  {
    path: APP_ROUTES.CONFIRM_BOOKING,
    element: <ConfirmBookingPage />,
  },

  {
    path: APP_ROUTES.LOGIN,
    element: <LoginPage />,
  },

  {
    path: APP_ROUTES.NOT_FOUND,
    element: <NotFound />,
  },
]);
