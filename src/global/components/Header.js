import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images_icons/Logo .svg";
import HamburgerMenue from "../../assets/images_icons/icon _hamburger menu_.svg";
import { useState } from "react";
import Container from "./Container";
import { APP_ROUTES } from "../router";

export default function Header() {
  const navList = [
    { text: "home", link: APP_ROUTES.HOME },
    { text: "about", link: APP_ROUTES.ABOUT },
    { text: "menue", link: APP_ROUTES.MENUE },
    { text: "reservations", link: APP_ROUTES.RESERVATIONS },
    { text: "order online", link: APP_ROUTES.ORDER_ONLINE },
    { text: "login", link: APP_ROUTES.LOGIN },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <Container
      children={
        <header>
          <div className="flex justify-between items-center py-5">
            <Link to="/">
              <img src={Logo}></img>
            </Link>
            <nav className="hidden md:block">
              <ExpandedMenue navList={navList} />
            </nav>
            <button type="button" className="md:hidden" onClick={toggleMenu}>
              <img src={HamburgerMenue} className="w-5 h-5" />
            </button>
          </div>
          <nav className="md:hidden relative">
            <CollapsedMenu isMenuOpen={isMenuOpen} navList={navList} />
          </nav>
        </header>
      }
    />
  );
}
function ExpandedMenue(props) {
  return (
    <ul className="flex items-center gap-5 ">
      <NavItems navList={props.navList} />
    </ul>
  );
}

function CollapsedMenu(props) {
  return (
    <>
      <ul
        className={`${
          props.isMenuOpen
            ? " flex flex-col absolute top-1 w-full items-center gap-1  bg-lightGrey z-50 "
            : "hidden"
        } `}
      >
        <NavItems navList={props.navList} />
      </ul>
    </>
  );
}

function NavItems({ navList }) {
  return (
    <>
      {navList.map((item, index) => (
        <li
          key={index}
          className="uppercase font-markazi  hover:underline text-xl font font-medium"
        >
          <NavLink
            to={item.link}
            className={({ isActive, isPending }) =>
              isActive ? "text-primary1 underline" : ""
            }
          >
            {item.text}
          </NavLink>
        </li>
      ))}
    </>
  );
}
