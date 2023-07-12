import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function MainDropDown({
  error,
  options,
  onSelect,
  placeholder,
  value,
}) {
  const [selectedOption, setSelectedOption] = useState("");
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onSelect(option.value);
    handleToggleOptions();
  };

  const handleToggleOptions = () => {
    // setIsOptionsOpen((prevIsOpen) => !prevIsOpen);
    setIsOptionsOpen(!isOptionsOpen);
  };
  return (
    <>
      <div
        className={`relative bg-lightGray text-black py-2 px-2 rounded-md cursor-pointer placeholder:font-medium ${
          selectedOption
            ? "bg-primary1  text-lightGrey "
            : "placeholder:text-primary1"
        }`}
        onClick={handleToggleOptions}
      >
        <input
          type="select"
          placeholder={placeholder}
          value={value}
          className=" bg-transparent outline-none left-0 placeholder:text-lg placeholder:text-primary1 "
        />
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`absolute right-0  transform  ${
            isOptionsOpen ? "rotate-180" : ""
          } transition-transform duration-300 mx-2 `}
        />
        {isOptionsOpen && (
          <ul className="absolute left-0 right-0 z-10 mt-3 bg-lightGrey shadow-md rounded-lg w-full">
            {options.length > 0 &&
              options.map((option) => (
                <li
                  key={option.value}
                  aria-label="On Click"
                  onClick={() => handleOptionSelect(option)}
                  className=" px-4 py-2  rounded-lg cursor-pointer bg-lightGrey text-black hover:bg-primary1 hover:text-white"
                >
                  {option.label}
                </li>
              ))}
          </ul>
        )}
      </div>
      {error ? (
        <span component="div" className="text-red-700  text-xs">
          {error}
        </span>
      ) : (
        ""
      )}
    </>
  );
}
