import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktopXXL: {
    breakpoint: { max: 5000, min: 1536 },
    items: 5,
    slidesToSlide: 1,
  },
  superLargeDesktopXL: {
    breakpoint: { max: 1536, min: 1280 },
    items: 4,
    slidesToSlide: 1,
  },
  desktopLG: {
    breakpoint: { max: 1280, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tabletMD: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 1,
  },
  mobileSM: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const DestinationSlider = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
    >
      {/* Destination 1 */}
      <div>
        <Image
          src="/images/d1.png"
          alt="destination"
          width={200}
          height={200}
          className="rounded-full mx-auto"
        />
        <h1 className="destination__h1">New York</h1>
        <p className="destination__p">7 Hotels</p>
      </div>
      {/* Destination 2 */}
      <div>
        <Image
          src="/images/d2.png"
          alt="destination"
          width={200}
          height={200}
          className="rounded-full mx-auto"
        />
        <h1 className="destination__h1">Japan</h1>
        <p className="destination__p">17 Hotels</p>
      </div>
      {/* Destination 3 */}
      <div>
        <Image
          src="/images/d3.png"
          alt="destination"
          width={200}
          height={200}
          className="rounded-full mx-auto"
        />
        <h1 className="destination__h1">Bangladesh</h1>
        <p className="destination__p">3 Hotels</p>
      </div>
      {/* Destination 4 */}
      <div>
        <Image
          src="/images/d4.png"
          alt="destination"
          width={200}
          height={200}
          className="rounded-full mx-auto"
        />
        <h1 className="destination__h1">India</h1>
        <p className="destination__p">27 Hotels</p>
      </div>
      {/* Destination 5 */}
      <div>
        <Image
          src="/images/d5.png"
          alt="destination"
          width={200}
          height={200}
          className="rounded-full mx-auto"
        />
        <h1 className="destination__h1">England</h1>
        <p className="destination__p">37 Hotels</p>
      </div>
      {/* Destination 6 */}
      <div>
        <Image
          src="/images/d6.png"
          alt="destination"
          width={200}
          height={200}
          className="rounded-full mx-auto"
        />
        <h1 className="destination__h1">Australia</h1>
        <p className="destination__p">23 Hotels</p>
      </div>
    </Carousel>
  );
};

export default DestinationSlider;
