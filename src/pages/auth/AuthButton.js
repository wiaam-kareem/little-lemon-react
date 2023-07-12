export default function AuthButton(props) {
  const hrClasses = `border-t-2 rounded-lg mt-1 ${
    props.isActive ? "border-primary2" : "border-gray-300"
  }`;
  return (
    <button className="w-full  py-1 text-center rounded-lg my-4 focus:outline-none focus:ring-0">
      <p
        className="text-sm text-primary1 font-semibold"
        aria-label="On Click"
        onClick={props.onClick}
      >
        {props.text}
      </p>
      <hr className={hrClasses}></hr>
    </button>
  );
}
