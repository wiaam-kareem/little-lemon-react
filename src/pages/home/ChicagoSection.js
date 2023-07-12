import Container from "../../global/components/Container";
import MarioAndAnderian1 from "../../assets/images_icons/Mario and Adrian A.jpg";
import MarioAndAnderian2 from "../../assets/images_icons/Mario and Adrian b.jpg";

export default function ChicagoSection() {
  return (
    <Container
      children={
        <div className="grid grid-cols-2 gap-20 py-16">
          <div className="flex flex-col  col-span-2 md:col-span-1">
            <h1 className="text-5xl text-black font-markazi">Little Lemon</h1>
            <p className="text-2xl font-medium">Chicago</p>
            <p className="mt-4 text-lg font-Karla text-primary1 font-medium">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit.
            </p>
          </div>
          <StackedTwoImages
            imageI={MarioAndAnderian2}
            image2={MarioAndAnderian1}
          />
        </div>
      }
    />
  );
}
function StackedTwoImages(props) {
  return (
    <div className=" relative h-56 w-full mx-auto">
      <div className="absolute bg-black w-3/4 h-36 rounded-lg bottom-0 left-0">
        <img
          src={props.imageI}
          className="w-full h-full rounded-lg opacity-40 object-left-bottom"
        />
      </div>
      <img
        src={props.image2}
        className="absolute w-3/4 h-36 rounded-lg right-0 top-0"
      />
    </div>
  );
}
