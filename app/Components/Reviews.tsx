import React from "react";
import ReviewSlider from "./Helper/ReviewSlider";

const Reviews = () => {
  return (
    <section id="review" className="pt-[6rem] pb-[3rem]">
      <h1 className="heading">Client Review</h1>
      <div className="mt-[4rem] w-[80%] mx-auto">
        <ReviewSlider />
      </div>
    </section>
  );
};

export default Reviews;
