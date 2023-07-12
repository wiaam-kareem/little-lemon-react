import MenueCard from "../../global/widgets/MenueCard";

export default function MenueGrid({ data }) {
  return (
    <section className="grid  grid-1 md:grid-cols-3 gap-4 my-5">
      {data.map((item) => (
        <MenueCard key={item.id} item={item} />
      ))}
    </section>
  );
}
