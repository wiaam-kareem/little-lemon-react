import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import InputFeild from "../../global/widgets/InputField";
import SubmitButton from "./SubmitButton";

export default function LoginForm() {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
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
      <Form className="flex flex-col gap-2 pb-5">
        <Field component={InputFeild} name="email" type="text" label="Email" />
        <Field
          component={InputFeild}
          name="password"
          type="password"
          label="Password"
        />
        <SubmitButton text="Login" />
      </Form>
    </Formik>
  );
}
