import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBicycle } from "@fortawesome/free-solid-svg-icons";

export default function OrderTextButton(props) {
  return (
    <button
      role="button"
      className="bg-transparent  text-xl font-markazi px-2 py-1 rounded-lg text-black font-semibold w-full mt-auto"
      aria-label="On Click"
      onClick={props.onClick}
    >
      <div className="flex items-center justify-around">
        {props.text}
        <FontAwesomeIcon icon={faBicycle} className="text-lg" />
      </div>
    </button>
  );
}
