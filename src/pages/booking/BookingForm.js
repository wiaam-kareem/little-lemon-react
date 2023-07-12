import { Formik, Form, Field, useFormik } from "formik";
import * as Yup from "yup";
import MainDropDown from "../../global/widgets/MainDropDown";
import SubmitButton from "../auth/SubmitButton";
import { useNavigate } from "react-router-dom";
import BookingInputFeild from "./BookingInputFeild";
import { submitAPI } from "../../services/api";
import { APP_ROUTES } from "../../global/router";

export default function BookingForm({
  availableTimes,
  setAvailableTimes,
  occasions,
}) {
  const navigate = useNavigate();

  const initialValues = {
    date: new Date(),
    guests: 1,
    time: "",
    occasion: "",
  };
  const validationSchema = Yup.object().shape({
    date: Yup.date().required("Date is required"),
    guests: Yup.number()
      .min(1, "Number of guests must be at least 1")
      .max(10, "Number of guests cannot exceed 10")
      .required("Number of guests is required"),
    time: Yup.string().required(" Reservation time is required"),
    occasion: Yup.string().required("Occasion is required"),
  });
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      submitAPI(values);
      resetForm();
      navigate(APP_ROUTES.CONFIRM_BOOKING);
    },
  });
  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    formik.setFieldValue("date", selectedDate);
    setAvailableTimes(selectedDate);
  };
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="grid gap-3 bg-lightGrey p-10 my-10 rounded-lg"
    >
      <h1 className="text-2xl md:text-4xl font-markazi opacity-75 pt-5">
        BOOK a Table
      </h1>

      <BookingInputFeild
        value={formik.values.date}
        error={formik.errors.date}
        name="date"
        label="Reservation date"
        onChange={handleDateChange}
        type="date"
      />
      <BookingInputFeild
        value={formik.values.guests}
        error={formik.errors.guests}
        name="guests"
        label="Number of guests"
        onChange={formik.handleChange}
        type="number"
      />
      <MainDropDown
        error={formik.errors.occasion}
        value={formik.values.occasion}
        name="occasion"
        options={occasions}
        placeholder="Occasion"
        onSelect={(value) => {
          formik.setFieldValue("occasion", value);
        }}
      />
      <MainDropDown
        error={formik.errors.time}
        value={formik.values.time}
        name="time"
        options={availableTimes}
        placeholder="Reservation time"
        onSelect={(value) => {
          formik.setFieldValue("time", value);
        }}
      />
      <SubmitButton text="Make Your reservation" />
    </form>
  );
}
