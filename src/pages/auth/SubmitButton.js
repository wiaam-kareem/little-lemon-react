export default function SubmitButton(props) {
  return (
    <button
      type="submit"
      className="w-full px-4 py-2 text-primary1 text-2xl font-markazi bg-primary2  rounded-md hover:bg-opacity-90 my-5 focus:outline-none focus:ring-2 focus:ring-primary1 focus:ring-offset-2"
    >
      {props.text}
    </button>
  );
}
