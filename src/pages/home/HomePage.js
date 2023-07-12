import Layout from "../../global/components/Layout";
import ChicagoSection from "./ChicagoSection";
import CostumersSay from "./CostumersSay";
import HeroSection from "./HeroSection";
import HighlightsSection from "./HighlightsSection";

export default function Home() {
  return (
    <Layout
      children={
        <>
          <HeroSection />
          <HighlightsSection />
          <CostumersSay />
          <ChicagoSection />
        </>
      }
    />
  );
}
