import { ErrorMessage } from "formik";
export default function FormikErrorMessage(props) {
  return (
    <ErrorMessage
      name={props.name}
      component="div"
      className="text-red-700  text-xs"
    />
  );
}
