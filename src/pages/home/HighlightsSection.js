import Container from "../../global/components/Container";
import PrimaryButton from "../../global/widgets/PrimaryButton";
import MenueCard from "../../global/widgets/MenueCard";
import { HIGHLIGHT_LIST } from "../../assets/lists";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../global/router";

export default function HighlightsSection() {
  const navigate = useNavigate();
  const data = HIGHLIGHT_LIST;
  return (
    <Container
      children={
        <section className="py-28">
          <div className="flex justify-between mb-5">
            <h2 className="text-black text-4xl font-bold">
              This week specials!
            </h2>
            <PrimaryButton
              text="Online menue"
              onClick={() => {
                navigate(APP_ROUTES.ORDER_ONLINE);
              }}
            />
          </div>
          <div className="grid grid-flow-row md:grid-cols-3 gap-4 ">
            {data.map((item) => {
              return <MenueCard key={item.id} item={item} />;
            })}
          </div>
        </section>
      }
    />
  );
}
