import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CostumersSayCard(props) {
  const renderStarIconsFromNumber = (number) => {
    const stars = [];
    for (let i = 0; i < number; i++) {
      stars.push(<FontAwesomeIcon icon={faStar} key={i} />);
    }
    return stars;
  };

  return (
    <div className="flex flex-col gap-3 max-w-xs">
      <p className="text-xs text-primary2  text-center">
        {renderStarIconsFromNumber(props.item.review)}
      </p>
      <img
        src={props.item.photo}
        alt={props.item.name}
        className="w-16 h-16 rounded-full mx-auto"
      />
      <h3 className="text-2xl font-markazi font-medium text-black text-center">
        {props.item.name}
      </h3>
      <p className="text-lg text-primary1 font-Karla font-medium  text-center">
        {props.item.quote}
      </p>
    </div>
  );
}
