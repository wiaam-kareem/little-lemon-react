import storyImage from "../../assets/images_icons/restaurant chef B.jpg";
import Container from "../../global/components/Container";

export default function StorySection() {
  return (
    <section>
      <Container
        children={
          <div className="grid grid-cols-2 gap-20 py-16">
            <div className="flex flex-col  col-span-2 md:col-span-1">
              <h2 className="text-black text-4xl font-bold">Our Story</h2>
              <p className="mt-4 text-lg text-primary1 font-Karla font-medium">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet. Amet minim
                mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit.
              </p>
            </div>
            <StoryStack image={storyImage} />
          </div>
        }
      />
    </section>
  );
}

function StoryStack({ image }) {
  return (
    <>
      <div className=" relative h-64 w-full mx-auto">
        <div className="absolute bg-black w-11/12 h-60 rounded-lg bottom-0 left-0"></div>
        <img
          src={image}
          className="absolute w-11/12 h-60 rounded-lg right-0 top-0"
        />
      </div>
    </>
  );
}
