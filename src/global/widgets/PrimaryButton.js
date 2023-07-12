export default function PrimaryButton(props) {
  return (
    <button
      type={props.type}
      aria-label="On Click"
      className="bg-primary2 text-lg  md:text-lg  py-1 md:px-3 px-3 h-fit rounded-lg text-black font-semibold"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}
