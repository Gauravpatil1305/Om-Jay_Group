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

const normalizeSlideLabel = (label: string) => label.replace(/^Position\s*\d+\s*·\s*/i, "").trim();

const jayTractorsDetails = {
  nature: "New Holland & CSH Harvester 3S Facility",
  address: "Gat No-483, 2/1, Baramati - Indapur Rd, Moti Bag, Baramati, Maharashtra 413102",
  ownerTitle: "Proprietor",
};

export default function BusinessDetailShell({ company }: BusinessDetailShellProps) {
  const [nav, setNav] = useState(false);
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

  const presenceText =
    company.slug === "om-jay-facility"
      ? "Baramati, Indapur, Faltan"
      : company.presence;
  const showContact = company.slug !== "om-jay-facility";

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
            <div className="space-y-10">
              {servicesByBusiness[company.slug].map((service) => {
                const images = service.images.filter(Boolean);
                if (!images.length) {
                  return null;
                }
                return (
                  <div
                    key={`${service.title}-gallery`}
                    className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-lg space-y-6"
                  >
                    <div className="flex flex-col gap-2">
                      <h3 className="text-2xl font-semibold text-slate-900">{service.title}</h3>
                      <p className="text-sm text-slate-600">{service.description}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {images.map((src, index) => (
                        <article
                          key={`${service.title}-${index}-${src}`}
                          className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm space-y-3"
                        >
                          <div className="relative h-40 w-full overflow-hidden rounded-xl border border-slate-200">
                            <Image
                              src={src}
                              alt={`${service.title} image ${index + 1}`}
                              fill
                              sizes="(min-width: 768px) 20vw, 90vw"
                              className="object-cover"
                            />
                          </div>
                          <p className="text-base font-semibold text-slate-900">{`Image ${index + 1}`}</p>
                          <p className="text-sm text-slate-600">{service.description}</p>
                        </article>
                      ))}
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
              <div className="space-y-10">
                {autoServicesByBusiness[company.slug].map((service) => {
                  const slides = getServiceSlides(service);
                  if (!slides.length) {
                    return null;
                  }
                  return (
                    <div
                      key={`${service.title}-details`}
                      className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-lg space-y-6"
                    >
                      <div className="flex flex-col gap-2">
                        <h4 className="text-2xl font-semibold text-slate-900">{service.title}</h4>
                        <p className="text-sm text-slate-600">{service.description}</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {slides.map((slide, index) => {
                          const displayLabel = normalizeSlideLabel(slide.label);
                          return (
                            <article
                              key={`${service.title}-${index}-${slide.src}`}
                              className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm space-y-3"
                            >
                              <div className="relative h-40 w-full overflow-hidden rounded-xl border border-slate-200">
                                <Image
                                  src={slide.src}
                                  alt={displayLabel || `${service.title} image`}
                                  fill
                                  sizes="(min-width: 768px) 20vw, 90vw"
                                  className="object-cover"
                                />
                              </div>
                              <p className="text-base font-semibold text-slate-900">{displayLabel}</p>
                              <p className="text-sm text-slate-600">{slide.description}</p>
                            </article>
                          );
                        })}
                      </div>
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

            <div className="rounded-[2.5rem] border border-slate-200 bg-linear-to-br from-blue-900 to-cyan-500 p-8 text-white shadow-xl space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.5rem] text-white/80">Baramati · Indapur</p>
                <h3 className="text-3xl font-semibold">Jay Tractors</h3>
                <p className="text-sm text-white/80">
                  New Holland tractors and CSH Harvester 3S facility backed by expert technicians and finance partners.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/40 bg-white/10 p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.4rem] text-white/80">What we deliver</p>
                  <p className="text-lg font-semibold text-white">{jayTractorsDetails.nature}</p>
                </div>
                <div className="rounded-2xl border border-white/40 bg-white/10 p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.4rem] text-white/80">Details</p>
                  <p className="text-sm text-white/80 leading-relaxed">{jayTractorsDetails.address}</p>
                  <p className="text-sm text-white">
                    Status: <span className="font-semibold text-white">{jayTractorsDetails.ownerTitle}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-10">
              {jayTractorsHighlightServices.map((service) => {
                const slides = getServiceSlides(service);
                if (!slides.length) {
                  return null;
                }
                return (
                  <div
                    key={`${service.title}-gallery`}
                    className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-lg space-y-6"
                  >
                    <div className="flex flex-col gap-2">
                      <h4 className="text-2xl font-semibold text-slate-900">{service.title}</h4>
                      <p className="text-sm text-slate-600">{service.description}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {slides.map((slide, index) => {
                        const displayLabel = normalizeSlideLabel(slide.label);
                        return (
                          <article
                            key={`${service.title}-${index}-${slide.src}`}
                            className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm space-y-3"
                          >
                            <div className="relative h-40 w-full overflow-hidden rounded-xl border border-slate-200">
                              <Image
                                src={slide.src}
                                alt={displayLabel || `${service.title} image`}
                                fill
                                sizes="(min-width: 768px) 20vw, 90vw"
                                className="object-cover"
                              />
                            </div>
                            <p className="text-base font-semibold text-slate-900">{displayLabel}</p>
                            <p className="text-sm text-slate-600">{slide.description}</p>
                          </article>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
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

