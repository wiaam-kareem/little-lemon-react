import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import SubmitButton from "./SubmitButton";
import InputFeild from "../../global/widgets/InputField";

export default function RegisterForm() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmitForm = (values, actions) => {
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmitForm}
      className="max-w-sm mx-auto"
    >
      <Form className="flex flex-col gap-2">
        <Field component={InputFeild} name="name" type="text" label="Name" />
        <Field component={InputFeild} name="email" type="text" label="Email" />
        <Field
          component={InputFeild}
          name="password"
          type="password"
          label="Password"
        />
        <Field
          component={InputFeild}
          name="confirmPassword"
          type="password"
          label="Confirm password"
        />
        <SubmitButton text="Register" />
      </Form>
    </Formik>
  );
}
