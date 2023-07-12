import Container from "../../global/components/Container";
import HeroImage from "../../assets/images_icons/restauranfood.jpg";
import PrimaryButton from "../../global/widgets/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../global/router";

export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <section className=" w-full h-72 bg-primary1 ">
      <Container
        children={
          <div className="md:flex justify-between relative">
            <div className="py-5 w-full md:w-1/3">
              <h1 className="text-5xl text-primary2 font-markazi opacity-75">
                Little Lemon
              </h1>
              <p className=" text-lightGrey text-xl font-karla font-extralight mb-5 ">
                <span className="block mb-2">Chicago</span>
                We are a family owned Mediteranean restaurant, focused on
                traditional recipes served with a modern twist
              </p>
              <PrimaryButton
                text="Reserve a Table"
                onClick={() => {
                  navigate(APP_ROUTES.RESERVATIONS);
                }}
              />
            </div>
            <img
              src={HeroImage}
              className="hidden md:block absolute end-0 top-1/3 w-72 h-full rounded-lg"
            ></img>
          </div>
        }
      />
    </section>
  );
}
