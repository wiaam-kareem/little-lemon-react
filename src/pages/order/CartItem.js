import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

export default function CartItem({
  item,
  quantity,
  totalPrice,
  onIncrement,
  onDecrement,
  onRemove,
}) {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <FontAwesomeIcon
        icon={faTrash}
        aria-label="On Click"
        onClick={onRemove}
        className="cursor-pointer text-red-800 text-2xl "
      />
      <div className="flex items-center">
        <img
          src={item.menueItem.imagePath}
          alt={item.menueItem.dishName}
          className="w-20 h-20 mr-4 rounded-lg"
        />
        <div>
          <h2 className="text-lg font-medium">{item.menueItem.dishName}</h2>
          <p className="text-gray-500">{item.menueItem.price}$ per item</p>
        </div>
      </div>
      <div className="flex items-center">
        <FontAwesomeIcon
          icon={faMinus}
          aria-label="On Click"
          onClick={onDecrement}
          className="cursor-pointer"
        />
        <span className="mx-4">{quantity}</span>

        <FontAwesomeIcon
          icon={faPlus}
          aria-label="On Click"
          onClick={onIncrement}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}
