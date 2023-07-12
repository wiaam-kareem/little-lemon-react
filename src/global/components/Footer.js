import Container from "./Container";
import Logo from "../../assets/images_icons/Logo2.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
const COL1 = {
  title: "doormat",
  items: [
    { id: 1, text: "home", link: "" },
    { id: 2, text: "about", link: "" },
    { id: 3, text: "reservation", link: "" },
    { id: 4, text: "order online", link: "" },
    { id: 5, text: "Login", link: "" },
  ],
};
const COL2 = {
  title: "contacts",
  items: [
    { id: 6, title: "adress", text: "US-california-14sdd", link: "" },
    { id: 7, title: "email", text: "info@littlelemon.com", link: "" },
    { id: 8, title: "phone", text: "+1-543-543", link: "" },
  ],
};
const COL3 = {
  title: "socials",
  items: [
    { id: 9, icon: faFacebookF, link: "" },
    { id: 10, icon: faInstagram, link: "" },
    { id: 11, icon: faLinkedinIn, link: "" },
    { id: 12, icon: faTwitter, link: "" },
  ],
};

export default function Footer() {
  const titleClass =
    "text-lightGrey  font-markazi capitalize text-3xl font-semibold pb-3";
  const linkClass =
    "text-lg font-light font-Karla text-lightGrey hover:underline capitalize";
  return (
    <footer className="w-full py-10 bg-primary1 ">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-8 gap-6 ">
          <img
            src={Logo}
            className=" hidden md:block col-span-1 p-1 opacity-80"
            alt="Logo"
          />

          <div className=" grid col-span-2 ">
            <h4 className={titleClass}>{COL1.title}</h4>
            {COL1.items.map((item) => (
              <Link key={item.id} to={item.link}>
                <p className={linkClass}> {item.text}</p>
              </Link>
            ))}
          </div>
          <div className=" grid col-span-3">
            <h4 className={titleClass}>{COL2.title}</h4>
            {COL2.items.map((item) => (
              <Link key={item.id} to={item.link}>
                <span className={linkClass}>
                  {item.title} : {item.text}{" "}
                </span>
              </Link>
            ))}
          </div>
          <div className="grid col-span-2">
            <h4 className={titleClass}>{COL3.title}</h4>
            {COL3.items.map((item) => (
              <Link to={item.link} key={item.id}>
                <FontAwesomeIcon icon={item.icon} className={linkClass} />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
