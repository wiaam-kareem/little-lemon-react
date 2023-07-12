import { useState } from "react";
import Container from "../../global/components/Container";
import Layout from "../../global/components/Layout";
import Image from "../../assets/images_icons/restaurant.jpg";
import AuthButton from "./AuthButton";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  const [isLogin, setLogin] = useState(true);

  const handleSwitch = () => {
    setLogin((prevState) => !prevState);
  };
  return (
    <Layout
      children={
        <Container
          children={
            <div className=" flex bg-primary1 rounded-lg mt-10 mb-24">
              <img
                src={Image}
                className=" hidden md:block md:w-1/2 rounded-tl-lg rounded-bl-lg opacity-60 "
              />
              <div className=" w-full md:w-1/2 bg-lightGrey rounded-tr-lg rounded-br-lg p-5 ">
                <FormSwitcher isLogin={isLogin} onClick={handleSwitch} />
                {isLogin ? <LoginForm /> : <RegisterForm />}
              </div>
            </div>
          }
        />
      }
    />
  );
}
function FormSwitcher(props) {
  return (
    <div className="flex justify-center gap-3">
      <AuthButton
        text="Login"
        isActive={props.isLogin}
        onClick={props.onClick}
      />
      <AuthButton
        text="Register"
        isActive={!props.isLogin}
        onClick={props.onClick}
      />
    </div>
  );
}
