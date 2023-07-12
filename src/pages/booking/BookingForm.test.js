import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm", () => {
  test("renders form elements correctly", () => {
    render(
      <BookingForm
        availableTimes={[]}
        setAvailableTimes={() => {}}
        occasions={[]}
      />,
    );

    expect(screen.getByLabelText("Reservation date")).toBeInTheDocument();
    expect(screen.getByLabelText("Number of guests")).toBeInTheDocument();
    expect(screen.getByLabelText("Occasion")).toBeInTheDocument();
    expect(screen.getByLabelText("Reservation time")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Make Your reservation" }),
    ).toBeInTheDocument();
  });

  test("submits the form correctly", () => {
    render(
      <BookingForm
        availableTimes={[]}
        setAvailableTimes={() => {}}
        occasions={[]}
      />,
    );

    fireEvent.change(screen.getByLabelText("Reservation date"), {
      target: { value: "2023-07-11" },
    });
    fireEvent.change(screen.getByLabelText("Number of guests"), {
      target: { value: "4" },
    });
    fireEvent.change(screen.getByLabelText("Occasion"), {
      target: { value: "Birthday" },
    });
    fireEvent.change(screen.getByLabelText("Reservation time"), {
      target: { value: "18:00" },
    });

    fireEvent.click(
      screen.getByRole("button", { name: "Make Your reservation" }),
    );
  });
});
