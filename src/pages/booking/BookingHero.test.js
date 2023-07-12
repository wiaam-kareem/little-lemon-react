import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookingHero from "./BookingHero";

test("Render Booking Hero heading", () => {
  render(
    <MemoryRouter>
      <BookingHero />
    </MemoryRouter>,
  );
  const heading = screen.getByText("You can Order online !!!");
  expect(heading).toBeInTheDocument();
});
