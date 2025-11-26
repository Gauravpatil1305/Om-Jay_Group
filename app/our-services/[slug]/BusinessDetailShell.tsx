"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Contact from "../../Components/Contact";
import Footer from "../../Components/Footer";
import MobileNav from "../../Components/MobileNav";
import Navbar from "../../Components/Navbar";
import { Business, businesses } from "../../../data/businesses";

interface BusinessDetailShellProps {
  company: Business;
}

type ServiceCard = {
  title: string;
  description: string;
  images: string[];
};

const servicesByBusiness: Record<string, ServiceCard[]> = {
  "om-jay-facility": [
    {
      title: "Bus Transportation",
      description:
        "Fleet management for schools, corporates, and pilgrimages with trained drivers and GPS monitoring.",
      images: ["/images/BusTransportations.jpg", "/images/bustransportation.jpg"],
    },
    {
      title: "Car Transportation",
      description:
        "Premium car transit services backed by route planning, vehicle tracking, and maintenance support.",
      images: ["/images/car-transportation.jpg", "/images/carTransportation.jpg"],
    },
    {
      title: "Logistics Transportation",
      description:
        "Cargo movement across Maharashtra with loading expertise and on-time delivery guarantees.",
      images: ["/images/logistics-services.jpg", "/images/logistics-service-providers.jpeg"],
    },
    {
      title: "Manpower Services",
      description:
        "On-demand manpower for drivers, helpers, and support staff with compliance and payroll assistance.",
      images: ["/images/manpower-services.jpeg", "/images/manpower-services.png"],
    },
  ],
};

type AutoServiceSlide = {
  src: string;
  label: string;
  description: string;
};

type AutoServiceCard = {
  title: string;
  description: string;
  images?: string[];
  slides?: AutoServiceSlide[];
};

const autoServicesByBusiness: Record<string, AutoServiceCard[]> = {
  "kate-motors": [
    {
      title: "Cars Verities",
      description:
        "Multi-brand Tata commercial and passenger vehicles tailored with finance partners and delivery readiness.",
      slides: [
        {
          src: "/images/Tata Intra V30.png",
          label: "Position 1 · Tata Intra V30",
          description: "Compact 1.5T payload pickup suited for dense urban distribution.",
        },
        {
          src: "/images/Tata Intra V10.avif",
          label: "Position 2 · Tata Intra V10",
          description: "Fuel-efficient micro truck for last-mile cargo up to 1T.",
        },
        {
          src: "/images/Tata Intra V102.jpg",
          label: "Position 3 · Tata Intra V10",
          description: "Dual-tone variant with extended load body for bulky consignments.",
        },
        {
          src: "/images/tata-intra-v30.avif",
          label: "Position 4 · Tata Intra V30",
          description: "Comfort cab with digital cluster and enhanced suspension package.",
        },
        {
          src: "/images/Tata Intra V30-4.jpg",
          label: "Position 5 · Tata Intra V30",
          description: "Covered deck configuration ready for FMCG and parcel networks.",
        },
        {
          src: "/images/Tata Intra V30.png",
          label: "Position 6 · Tata Intra V30",
          description: "Long wheelbase option providing superior stability with payload.",
        },
        {
          src: "/images/tata-intra-v50-gold.avif",
          label: "Position 7 · Tata Intra V50",
          description: "Gold edition with wider load body and strongest chassis in range.",
        },
      ],
    },
    {
      title: "Sales Team",
      description:
        "Dedicated consultants guiding fleet planning, corporate leasing, and aftersales contracts.",
      slides: [
        {
          src: "/images/salesteam.jpg",
          label: "Fleet Consultants",
          description: "Specialists mapping payload mixes, TCO, and route economics.",
        },
        {
          src: "/images/salesteamm.jpg",
          label: "Leasing Desk",
          description: "Corporate leasing desk aligning with finance partners and OEM offers.",
        },
      ],
    },
    {
      title: "Service Team",
      description:
        "Skilled technicians delivering Tata 3S service, scheduled maintenance, and spare parts fulfillment.",
      slides: [
        {
          src: "/images/serviceteam.jpg",
          label: "3S Technicians",
          description: "24-bay workshop with diagnostic tooling and express service lanes.",
        },
        {
          src: "/images/serviceTeamm.jpg",
          label: "Spares Support",
          description: "Dedicated spares hub ensuring fast turnaround for critical parts.",
        },
      ],
    },
  ],
};
const jayTractorsHighlightServices: AutoServiceCard[] = [
  {
    title: "New Holland Tractor Lineup",
    description:
      "Field-ready tractors paired with OEM warranties and tailored attachments for Maharashtra farms.",
    slides: [
      {
        src: "/images/New Holland 3600-2 All Rounder Plus.jpg",
        label: "New Holland 3600-2 All Rounder Plus",
        description:
          "60HP workhorse combining finesse with the durability needed for row-crop, haulage, and tillage work.",
      },
      {
        src: "/images/New Holland 3630 TX (multiple units).webp",
        label: "New Holland 3630 TX",
        description:
          "Fleet-ready tractors staged in multiples, ideal for large-acreage operations and contract harvesting.",
      },
      {
        src: "/images/NEW HOLLAND 3630 TX Plus.jpg",
        label: "New Holland 3630 TX Plus",
        description:
          "Premium TX Plus cabin with added comfort, hydraulics, and service coverage for long field days.",
      },
      {
        src: "/images/New Holland 3630.jpg",
        label: "New Holland 3630",
        description:
          "A rugged 3630 series tractor engineered for both power farming and reliable hauling chores.",
      },
      {
        src: "/images/New Holland 4010.jpg",
        label: "New Holland 4010",
        description:
          "Compact yet sturdy 4010 with nimble handling for small holdings and hilly terrains.",
      },
    ],
  },
  {
    title: "Hydraulic Auger & Service Support",
    description:
      "Attachments and workshop readiness that keep New Holland fleets operational throughout the season.",
    slides: [
      {
        src: "/images/hydraulic auger machine..jpg",
        label: "Hydraulic Auger Machine",
        description:
          "Hydraulic auger attachment built for deep-hole drilling, piling, and plantation duties.",
      },
      {
        src: "/images/jaytrack.jpeg",
        label: "Jay Tractors Service Crew",
        description:
          "Technicians staging New Holland tractors with precision checks before delivery and service.",
      },
    ],
  },
  {
    title: "Sugarcane Solutions",
    description:
      "Sugarcane-ready tractors and attachments that combine extraction efficiency with low fuel burnout.",
    slides: [
      {
        src: "/images/NewSugarcane.jpg",
        label: "New Holland Sugarcane Equipment",
        description:
          "Modern sugarcane suite with optimized harvest heads and traction for dense fields.",
      },
      {
        src: "/images/sugarcane.jpg",
        label: "Sugarcane Field Support",
        description:
          "Field support crews staging New Holland tractors next to freshly cut cane for fast turnaround.",
      },
    ],
  },
];

const getServiceSlides = (service: AutoServiceCard): AutoServiceSlide[] => {
  if (service.slides?.length) {
    return service.slides.filter((slide) => Boolean(slide?.src));
  }

  if (service.images?.length) {
    return service.images
      .filter(Boolean)
      .map((src, index) => ({
        src,
        label: `${service.title} · Image ${index + 1}`,
        description: service.description,
      }));
  }

  return [];
};

export default function BusinessDetailShell({ company }: BusinessDetailShellProps) {
  const [nav, setNav] = useState(false);
  const [slideIndex, setSlideIndex] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    servicesByBusiness["om-jay-facility"]?.forEach((service) => {
      initial[service.title] = 0;
    });
    return initial;
  });
  const [autoSlideIndex, setAutoSlideIndex] = useState<Record<string, number>>({});
  const [authorizedSlideIndex, setAuthorizedSlideIndex] = useState<Record<string, number>>({});
  const kateMotorsDealership = businesses.find((item) => item.slug === "kate-motors");

  const openNavHandler = () => setNav(true);
  const closeNavHandler = () => setNav(false);

  useEffect(() => {
    AOS.init({
      startEvent: "DOMContentLoaded",
      offset: 120,
      duration: 900,
      once: true,
      easing: "ease-out-quart",
    });
  }, []);

  useEffect(() => {
    if (autoServicesByBusiness[company.slug]) {
      const initial: Record<string, number> = {};
      autoServicesByBusiness[company.slug].forEach((service) => {
        initial[service.title] = 0;
      });
      setAutoSlideIndex(initial);
    }
  }, [company.slug]);

  useEffect(() => {
    if (company.slug === "jay-tractors") {
      const initial: Record<string, number> = {};
      jayTractorsHighlightServices.forEach((service) => {
        initial[service.title] = 0;
      });
      setAuthorizedSlideIndex(initial);
    } else {
      setAuthorizedSlideIndex({});
    }
  }, [company.slug]);

  const presenceText =
    company.slug === "om-jay-facility"
      ? "Baramati, Indapur, Faltan"
      : company.presence;
  const showContact = company.slug !== "om-jay-facility";

  const nextSlide = (title: string, count: number) => {
    setSlideIndex((prev) => ({
      ...prev,
      [title]: (prev[title] + 1) % count,
    }));
  };

  const prevSlide = (title: string, count: number) => {
    setSlideIndex((prev) => ({
      ...prev,
      [title]: (prev[title] - 1 + count) % count,
    }));
  };

  const nextAutoSlide = (title: string, count: number) => {
    setAutoSlideIndex((prev) => ({
      ...prev,
      [title]: (prev[title] + 1) % count,
    }));
  };

  const prevAutoSlide = (title: string, count: number) => {
    setAutoSlideIndex((prev) => ({
      ...prev,
      [title]: (prev[title] - 1 + count) % count,
    }));
  };

  const nextAuthorizedSlide = (title: string, count: number) => {
    setAuthorizedSlideIndex((prev) => ({
      ...prev,
      [title]: (prev[title] + 1) % count,
    }));
  };

  const prevAuthorizedSlide = (title: string, count: number) => {
    setAuthorizedSlideIndex((prev) => ({
      ...prev,
      [title]: (prev[title] - 1 + count) % count,
    }));
  };

  return (
    <div className="overflow-x-hidden bg-slate-50 min-h-screen">
      <MobileNav nav={nav} closeNav={closeNavHandler} />
      <Navbar openNav={openNavHandler} />

      <main className="pt-[8vh]">
        <section className="w-4/5 mx-auto py-20">
          <div className="flex flex-col gap-4">
            <Link
              href="/our-services"
              className="text-sm text-blue-600 font-semibold hover:underline"
            >
              ← Back to Our Services
            </Link>
            <p className="text-sm uppercase tracking-[0.5rem] text-gray-500">
              {presenceText}
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-blue-900">
              {company.name}
            </h1>
            <p className="text-base text-gray-700 max-w-2xl">
              {company.description}
            </p>
          </div>
        </section>

        {company.slug === "jay-tractors" && kateMotorsDealership && (
          <section className="w-4/5 mx-auto pb-20">
            <div className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-lg space-y-10">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <Image
                    src="/images/logo.png"
                    alt="Om Jay Group"
                    width={64}
                    height={64}
                    className="rounded-full border border-slate-200 bg-white p-2"
                  />
                  <div>
                    <p className="text-xs uppercase tracking-[0.5rem] text-slate-500">
                      Authorized Dealership
                    </p>
                    <h2 className="text-3xl font-semibold text-slate-900">
                      NEW HOLLAND
                    </h2>
                  </div>
                </div>
              </div>
              <p className="mt-4 max-w-3xl text-sm text-slate-600">
                Jay Tractors is our authorized New Holland dealership delivering premium sales, service,
                and attachments through dedicated technicians and OEM-grade parts.
              </p>

              <div className="rounded-4xl border border-slate-200 bg-linear-to-br from-blue-900 to-cyan-500 p-8 text-white shadow-xl space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.5rem] text-white/80">
                    Automobile Services
                  </p>
                <h3 className="text-2xl font-semibold">New Holland Experience</h3>
                <p className="text-sm text-white/80 max-w-2xl">
                  Jay Tractors curates a dedicated New Holland ecosystem with sales, spares, and service
                  support that matches the heritage of the brand.
                </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {jayTractorsHighlightServices.map((service) => {
                    const slides = getServiceSlides(service);
                    if (!slides.length) {
                      return null;
                    }
                    const activeIndex = authorizedSlideIndex[service.title] ?? 0;
                    const activeSlide = slides[activeIndex % slides.length];
                    if (!activeSlide) {
                      return null;
                    }
                    return (
                      <div
                        key={service.title}
                        className="rounded-3xl border border-white/30 bg-white/10 p-6 backdrop-blur"
                      >
                        <div className="relative h-48 w-full overflow-hidden rounded-2xl border border-white/40 bg-white">
                          <Image
                            src={activeSlide.src}
                            alt={activeSlide.label || `${service.title} image`}
                            fill
                            sizes="(min-width: 768px) 30vw, 90vw"
                            className="object-contain"
                          />
                          {slides.length > 1 && (
                            <div className="absolute inset-0 flex items-center justify-between px-3">
                              <button
                                type="button"
                                onClick={() =>
                                  prevAuthorizedSlide(service.title, slides.length)
                                }
                                className="rounded-full bg-white/70 p-2 text-xs font-semibold text-slate-700"
                              >
                                ‹
                              </button>
                              <button
                                type="button"
                                onClick={() =>
                                  nextAuthorizedSlide(service.title, slides.length)
                                }
                                className="rounded-full bg-white/70 p-2 text-xs font-semibold text-slate-700"
                              >
                                ›
                              </button>
                            </div>
                          )}
                        </div>
                        <h4 className="mt-4 text-lg font-semibold">{service.title}</h4>
                        <div className="mt-1 space-y-1">
                          <p className="text-sm font-semibold text-white">
                            {activeSlide.label}
                          </p>
                          <p className="text-xs text-white/80">{activeSlide.description}</p>
                        </div>
                        <p className="mt-2 text-sm text-white/90">{service.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        )}

        {servicesByBusiness[company.slug] && (
          <section className="w-4/5 mx-auto pb-20">
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-3xl font-semibold text-blue-900">
                  Services We Deliver
                </h2>
                <p className="text-sm text-gray-600 max-w-2xl mx-auto">
                  A snapshot of the transportation, logistics, and manpower solutions we can deploy at scale.
                </p>
                <p className="text-xs uppercase tracking-[0.3rem] text-blue-700">
                  Serving Baramati · Indapur · Faltan
                </p>
              </div>
              <div className="relative h-56 w-full overflow-hidden rounded-3xl border border-slate-200 shadow-inner">
                <Image
                  src="/images/transport&logistics.jpg"
                  alt="Facility transport and logistics"
                  fill
                  sizes="(min-width: 768px) 50vw, 90vw"
                  className="object-cover"
                />
              </div>
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                {servicesByBusiness[company.slug].map((service) => {
                  const slides = service.images.filter(Boolean);
                  const activeIndex = slideIndex[service.title] ?? 0;
                  return (
                    <div
                      key={service.title}
                      className="bg-white border border-slate-100 rounded-4xl shadow-lg overflow-hidden"
                    >
                      <div className="relative h-48 w-full">
                        <Image
                          src={slides[activeIndex]}
                          alt={service.title}
                          fill
                          sizes="(min-width: 768px) 50vw, 90vw"
                          className="object-cover"
                        />
                        {slides.length > 1 && (
                          <div className="absolute inset-0 flex items-center justify-between px-4">
                            <button
                              type="button"
                              onClick={() => prevSlide(service.title, slides.length)}
                              className="rounded-full bg-white/70 p-2 text-sm font-semibold text-slate-700 shadow"
                            >
                              ‹
                            </button>
                            <button
                              type="button"
                              onClick={() => nextSlide(service.title, slides.length)}
                              className="rounded-full bg-white/70 p-2 text-sm font-semibold text-slate-700 shadow"
                            >
                              ›
                            </button>
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-slate-900">
                            {service.title}
                          </h3>
                        </div>
                        <p className="mt-3 text-sm text-slate-600">{service.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {autoServicesByBusiness[company.slug] && (
          <section className="w-4/5 mx-auto pb-20 space-y-12">
            <div className="rounded-[2.5rem] border border-slate-200 bg-linear-to-br from-blue-900 to-cyan-500 p-8 text-white shadow-xl space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.5rem] text-white/80">
                  Automobile Services
                </p>
                <h3 className="text-2xl font-semibold">Service Kate Motors</h3>
                <p className="text-sm text-white/80 max-w-2xl">
                  A dedicated sales and service ecosystem for Tata vehicles across Maharashtra, presented with the dual-image carousel inspired by the reference design.
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.4rem] text-white/70">
                  Serving Baramati · Indapur · Chauphulla · Nira
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {autoServicesByBusiness[company.slug].map((service) => {
                  const slides = getServiceSlides(service);
                  if (!slides.length) {
                    return null;
                  }
                  const activeIndex = autoSlideIndex[service.title] ?? 0;
                  const activeSlide = slides[activeIndex % slides.length];
                  return (
                    <div
                      key={service.title}
                      className="rounded-3xl border border-white/30 bg-white/10 p-6 backdrop-blur"
                    >
                      <div className="relative h-48 w-full overflow-hidden rounded-2xl border border-white/40 bg-white">
                        <Image
                          src={activeSlide.src}
                          alt={activeSlide.label || `${service.title} image`}
                          fill
                          sizes="(min-width: 768px) 30vw, 90vw"
                          className="object-contain"
                        />
                        {slides.length > 1 && (
                          <div className="absolute inset-0 flex items-center justify-between px-3">
                            <button
                              type="button"
                              onClick={() => prevAutoSlide(service.title, slides.length)}
                              className="rounded-full bg-white/70 p-2 text-xs font-semibold text-slate-700"
                            >
                              ‹
                            </button>
                            <button
                              type="button"
                              onClick={() => nextAutoSlide(service.title, slides.length)}
                              className="rounded-full bg-white/70 p-2 text-xs font-semibold text-slate-700"
                            >
                              ›
                            </button>
                          </div>
                        )}
                      </div>
                      <h4 className="mt-4 text-lg font-semibold">{service.title}</h4>
                      <div className="mt-1 space-y-1">
                        <p className="text-sm font-semibold text-white">
                          {activeSlide.label}
                        </p>
                        <p className="text-xs text-white/80">
                          {activeSlide.description}
                        </p>
                      </div>
                      <p className="mt-2 text-sm text-white/90">{service.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
              <div className="bg-white rounded-4xl shadow-lg p-6 border border-slate-100">
                <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl border border-slate-200">
                  <Image
                    src={company.detailImage}
                    alt={company.name}
                    fill
                    sizes="(min-width: 1024px) 50vw, 90vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-linear-to-r from-blue-900 to-cyan-500 p-6 rounded-4xl text-white shadow-lg">
                  <h2 className="text-xl font-semibold">What we deliver</h2>
                  {company.slug !== "om-jay-facility" && (
                    <p className="mt-4 text-sm leading-relaxed text-slate-100">
                      {company.nature}
                    </p>
                  )}
                  {servicesByBusiness[company.slug] && (
                    <ul className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.4rem] text-slate-200">
                      {servicesByBusiness[company.slug].map((service) => (
                        <li
                          key={service.title}
                          className="rounded-full border border-white/40 px-3 py-1"
                        >
                          {service.title}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="bg-white rounded-4xl border border-slate-100 p-6 shadow-lg space-y-4">
                  <h3 className="text-lg font-semibold text-slate-900">Details</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {company.address}
                  </p>
                  {company.slug === "om-jay-facility" && (
                    <p className="text-sm text-slate-600">
                      Service locations: Baramati, Indapur, Faltan
                    </p>
                  )}
                  {company.slug === "kate-motors" && (
                    <p className="text-sm text-slate-600">
                      Service locations: Baramati, Indapur, Chauphulla, Nira
                    </p>
                  )}
                  <p className="text-sm text-slate-600">
                    Status: <span className="font-semibold">{company.ownerTitle}</span>
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {!autoServicesByBusiness[company.slug] && (
          <section className="w-4/5 mx-auto grid gap-10 lg:grid-cols-[1.3fr_1fr] pb-20">
            <div className="bg-white rounded-4xl shadow-lg p-6 border border-slate-100">
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl border border-slate-200">
                <Image
                  src={company.detailImage}
                  alt={company.name}
                  fill
                  sizes="(min-width: 1024px) 50vw, 90vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-linear-to-r from-blue-900 to-cyan-500 p-6 rounded-4xl text-white shadow-lg">
                <h2 className="text-xl font-semibold">What we deliver</h2>
                {company.slug !== "om-jay-facility" && (
                  <p className="mt-4 text-sm leading-relaxed text-slate-100">
                    {company.nature}
                  </p>
                )}
                {servicesByBusiness[company.slug] && (
                  <ul className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.4rem] text-slate-200">
                    {servicesByBusiness[company.slug].map((service) => (
                      <li
                        key={service.title}
                        className="rounded-full border border-white/40 px-3 py-1"
                      >
                        {service.title}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="bg-white rounded-4xl border border-slate-100 p-6 shadow-lg space-y-4">
                <h3 className="text-lg font-semibold text-slate-900">Details</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {company.address}
                </p>
                {company.slug === "om-jay-facility" && (
                  <p className="text-sm text-slate-600">
                    Service locations: Baramati, Indapur, Faltan
                  </p>
                )}
                <p className="text-sm text-slate-600">
                  Status: <span className="font-semibold">{company.ownerTitle}</span>
                </p>
              </div>
            </div>
          </section>
        )}
      </main>

      {showContact && <Contact />}
      <Footer />
    </div>
  );
}

