import React from "react";
import Layout from "../../global/components/Layout";
import Container from "../../global/components/Container";
import backgroundImage from "../../assets/images_icons/restaurant.jpg";
import StorySection from "./StorySection";

export default function AboutUsPage() {
  return (
    <Layout
      children={
        <>
          <section className=" w-full h-80 bg-primary1">
            <Container
              children={
                <div className="flex flex-col py-5">
                  <div className="py-5 w-full md:w-3/4">
                    <h1 className="text-4xl text-primary2 font-markazi opacity-75">
                      Little Lemon
                    </h1>
                    <p className="text-lightGrey text-lg font-Karla ">
                      At Little Lemon, we pride ourselves on our innovative and
                      flavorful menu inspired by the refreshing essence of
                      lemons. Our talented team of chefs combines fresh, locally
                      sourced ingredients with a creative touch to craft dishes
                      that showcase the zesty and tangy flavors of lemons in
                      unexpected ways.
                    </p>
                  </div>
                  <img
                    src={backgroundImage}
                    className=" rounded-xl h-80 w-auto"
                  ></img>
                </div>
              }
            />
          </section>
          <div className="h-80"></div>
          <StorySection />
        </>
      }
    />
  );
}
