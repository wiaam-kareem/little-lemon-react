import Container from "../../global/components/Container";
import Layout from "../../global/components/Layout";
import { HIGHLIGHT_LIST, MENUE_LIST } from "../../assets/lists";
import MenueGrid from "./MenueGrid";
import MenueHero from "./MenueHero";
export default function MenuePage() {
  const data = MENUE_LIST;
  return (
    <Layout
      children={
        <Container
          children={
            <>
              <MenueHero item={HIGHLIGHT_LIST[0]} />
              <MenueGrid data={data} />
            </>
          }
        />
      }
    />
  );
}
