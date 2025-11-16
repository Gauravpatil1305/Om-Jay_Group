import React from "react";
import DestinationSlider from "./Helper/DestinationSlide";

const TopDestination = () => {
  return (
    <section id="about" className="mt-[6rem] mb-[4rem] py-20">
      <h1 className="heading">About Us</h1>
      <div className="mt-[4rem] w-[80%] mx-auto">
        {/* Destination Slider */}
        <DestinationSlider />
      </div>
    </section>
  );
};

export default TopDestination;
