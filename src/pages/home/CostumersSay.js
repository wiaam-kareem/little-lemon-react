import Container from "../../global/components/Container";
import CostumersSayCard from "./CostumersSayCard";
import { TESTOMONIALS_LIST } from "../../assets/lists";

export default function CostumersSay() {
  const data = TESTOMONIALS_LIST;

  return (
    <section className=" w-full py-10 bg-secondary2 bg-opacity-50">
      <Container
        children={
          <div className="flex flex-col justify-start items-center gap-6">
            <h2 className="text-black text-3xl font-bold">Testomonials</h2>
            <div className="grid grid-flow-row md:grid-cols-3 gap-4 ">
              {data.map((item) => {
                return <CostumersSayCard key={item.id} item={item} />;
              })}
            </div>
          </div>
        }
      />
    </section>
  );
}
