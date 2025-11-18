"use client";

import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { businesses } from "../../data/businesses";

const responsive = {
  desktop: {
    breakpoint: { max: 5000, min: 1280 },
    items: 3,
    slidesToSlide: 1,
  },
  laptop: {
    breakpoint: { max: 1280, min: 1024 },
    items: 2,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const BusinessCarousel = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay
      autoPlaySpeed={4000}
      centerMode={false}
      className="-mb-12!"
      containerClass="business-carousel"
      infinite
      itemClass="px-2"
      responsive={responsive}
      showDots={false}
      sliderClass="pb-8"
    >
      {businesses.map((business, index) => (
        <article
          key={business.slug}
          className="rounded-4xl border border-slate-200 bg-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
        >
          <div className="relative h-48 w-full overflow-hidden rounded-t-4xl">
            <Image
              src={business.featureImage}
              alt={business.name}
              fill
              sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 z-10 pointer-events-none bg-linear-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
          </div>
          <div className="space-y-2 px-5 py-5">
            <p className="text-[12px] uppercase tracking-[0.5rem] text-amber-500">
              Business {index + 1}
            </p>
            <h3 className="text-lg font-semibold text-slate-900">{business.name}</h3>
            <p className="text-sm text-slate-500">{business.nature}</p>
            <p className="text-xs text-slate-400">{business.presence}</p>
          </div>
        </article>
      ))}
    </Carousel>
  );
};

export default BusinessCarousel;

