import Container from "../../global/components/Container";
import Layout from "../../global/components/Layout";
import Cart from "./Cart";

export default function OrderPage() {
  return (
    <Layout
      children={
        <Container
          children={
            <section className=" my-5">
              <Cart />
            </section>
          }
        />
      }
    />
  );
}
