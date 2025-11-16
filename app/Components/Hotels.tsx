import React from "react";
import HotelCard from "./Helper/HotelCard";

const Hotels = () => {
  return (
    <section id="gallery" className="pt-[5rem] bg-gray-200 pb-[4rem]">
      <h1 className="heading">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center w-[80%] mx-auto mt-[4rem]">
        <div data-aos="fade-left">
          <HotelCard
            name="Hotel NextUs"
            city="Jakarta"
            price="$123"
            reviewNum="21"
            image="/images/h1.png"
          />
        </div>
        <div data-aos="zoom-in" data-aos-delay="300">
          <HotelCard
            name="Hotel Reactive"
            city="Kuala Lumpur"
            price="$223"
            reviewNum="31"
            image="/images/h2.png"
          />
        </div>
        <div data-aos="fade-right" data-aos-delay="600">
          <HotelCard
            name="Hotel Typescript"
            city="Japan"
            price="$456"
            reviewNum="57"
            image="/images/h3.png"
          />
        </div>
        <div data-aos="fade-left" data-aos-delay="900">
          <HotelCard
            name="Hotel Mongohouse"
            city="England"
            price="$444"
            reviewNum="85"
            image="/images/h4.png"
          />
        </div>
        <div data-aos="zoom-in" data-aos-delay="1200">
          <HotelCard
            name="Hotel Tailwind"
            city="India"
            price="$324"
            reviewNum="20"
            image="/images/h5.png"
          />
        </div>
        <div data-aos="fade-right" data-aos-delay="1600">
          <HotelCard
            name="Hotel Webdev"
            city="USA"
            price="$723"
            reviewNum="291"
            image="/images/h6.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Hotels;
