import FormikErrorMessage from "./FormikErrorMessage";

export default function InputFeild({
  field,
  form: { touched, errors },
  ...props
}) {
  return (
    <div className="mb-4">
      <label
        htmlFor={field.name}
        className="block text-md font-medium text-primary1"
      >
        {props.label}
      </label>
      <input
        {...props}
        {...field}
        className="w-full px-4 py-1  border  rounded-md focus:outline-none focus:ring-primary1 focus:border-primary1"
      />
      <FormikErrorMessage name={field.name} />
    </div>
  );
}
