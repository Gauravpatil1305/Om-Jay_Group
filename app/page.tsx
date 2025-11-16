'use client';
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import MobileNav from "./Components/MobileNav";
import Navbar from "./Components/Navbar";
import BusinessCarousel from "./Components/BusinessCarousel";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const heroHighlights = [
  { label: "Years of trust", value: "15+" },
  { label: "Live operations", value: "6" },
  { label: "Team strength", value: "250+" },
];

const services = [
  {
    title: "Transport & Logistics",
    detail:
      "Fleet management, compliance-ready trailers, and multi-modal connectivity across the western corridor.",
    imageSrc: "/images/t1.png",
    imageAlt: "Truck on logistics road",
  },
  {
    title: "Manpower Solutions",
    detail:
      "Skilled, semiskilled, and unskilled crews with payroll, compliance, and training to protect every operation.",
    imageSrc: "/images/t2.png",
    imageAlt: "Team of workers ready for deployment",
  },
  {
    title: "Facility Services",
    detail:
      "Security, housekeeping, and landscaping teams keeping campuses, factories, and events running smoothly.",
    imageSrc: "/images/h5.png",
    imageAlt: "Facility services maintenance",
  },
  {
    title: "Packing & Distribution",
    detail:
      "Secure packing, palletised loading, and last-mile drops that treat every parcel like critical cargo.",
    imageSrc: "/images/d6.png",
    imageAlt: "Goods being prepared for distribution",
  },
];

const values = [
  {
    title: "Mission",
    description:
      "Deliver seamless logistics, manpower, and facility experiences that let clients focus on growth.",
    imageSrc: "/images/h7.png",
    imageAlt: "Mission icon illustration",
  },
  {
    title: "Vision",
    description:
      "Be the most trusted integrated operations partner for Western India’s manufacturing and retail engines.",
    imageSrc: "/images/h8.png",
    imageAlt: "Vision icon illustration",
  },
  {
    title: "Service Strengths",
    description:
      "ISO-backed processes, digital tracking, and regional teams that scale on demand.",
    imageSrc: "/images/t1.png",
    imageAlt: "Service strength icon illustration",
  },
];

const galleryImages = [
  "/ClientImg/om_jay_group_table_calendar 2025_page-0004.jpg",
  "/ClientImg/om_jay_group_table_calendar 2025_page-0005.jpg",
  "/ClientImg/om_jay_group_table_calendar 2025_page-0006.jpg",
  "/ClientImg/om_jay_group_table_calendar 2025_page-0007.jpg",
];

const galleryHero = {
  src: "/images/SliderKate.jpg",
  alt: "Logistics partners briefing on site",
  caption:
    "Meaningful on-ground moments—loading docks, coordination tents, and teams keeping every shipment moving.",
};

type TrustedClient = {
  name: string;
  logoSrc: string;
  description: string;
};

const trustedClients: TrustedClient[] = [
  {
    name: "Cummins",
    logoSrc: "/images/cummins.png",
    description: "Powertrain partner shaping high-volume supply deliveries.",
  },
  {
    name: "Tata",
    logoSrc: "/images/tata.png",
    description: "Heavy industry logistics folded into Tata production lines.",
  },
  {
    name: "Ferrero",
    logoSrc: "/images/ferrero.png",
    description: "FMCG refrigerated cargo support for confectionery runs.",
  },
  {
    name: "Schreiber",
    logoSrc: "/images/schreiber.png",
    description: "Fresh dairy distribution and manpower readiness.",
  },
  {
    name: "Bharat Forge",
    logoSrc: "/images/bharat-forge.png",
    description: "Precision forging logistics and plant services.",
  },
  {
    name: "Kalyani",
    logoSrc: "/images/kalyani.png",
    description: "Engineering and manufacturing support across the western corridor.",
  },
  {
    name: "Mahindra Logistics",
    logoSrc: "/images/mahindra-logistics.png",
    description: "Joint logistics planning for pan-India movements.",
  },
  {
    name: "Peppermint",
    logoSrc: "/images/peppermint.png",
    description: "Retail display, warehousing, and event manpower.",
  },
  {
    name: "Cottonking",
    logoSrc: "/images/cottonking.png",
    description: "Textile warehousing and last-mile distribution partner.",
  },
  {
    name: "Bilt",
    logoSrc: "/images/bilt.png",
    description: "Interior and upholstery supply chain coordination.",
  },
  {
    name: "Glenmark",
    logoSrc: "/images/glenmark.png",
    description: "Pharma logistics with temperature-controlled facilities.",
  },
  {
    name: "Baramati Agro",
    logoSrc: "/images/baramati-agro.png",
    description: "Agriculture-to-market corridor management.",
  },
  {
    name: "Mota",
    logoSrc: "/images/mota.png",
    description: "Regional fleet and manpower partner for complex deliveries.",
  },
];

const trustedCarouselResponsive = {
  desktop: {
    breakpoint: { max: 5000, min: 1280 },
    items: 4,
    slidesToSlide: 1,
  },
  laptop: {
    breakpoint: { max: 1280, min: 1024 },
    items: 3,
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
} as const;

const TrustedClientsCarousel = ({ clients }: { clients: TrustedClient[] }) => (
  <Carousel
    additionalTransfrom={0}
    arrows
    autoPlay
    autoPlaySpeed={3000}
    centerMode={false}
    containerClass="w-full"
    infinite
    itemClass="px-2"
    responsive={trustedCarouselResponsive}
    showDots={false}
    sliderClass="py-10"
  >
    {clients.map((client) => (
      <article
        key={client.name}
        className="mx-auto flex max-w-[320px] flex-col items-center gap-3 rounded-[32px] border border-slate-200 bg-white px-6 py-8 text-center shadow-lg"
      >
        <div className="relative h-16 w-28">
          <Image
            src={client.logoSrc}
            alt={`${client.name} logo`}
            fill
            className="object-contain"
          />
        </div>
        <h4 className="text-lg font-semibold text-slate-900">{client.name}</h4>
        <p className="text-sm text-slate-500">{client.description}</p>
      </article>
    ))}
  </Carousel>
);

export default function Home() {
  const [nav, setNav] = useState(false);
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

  return (
    <div className="overflow-x-hidden bg-slate-50">
      <MobileNav nav={nav} closeNav={closeNavHandler} />
      <Navbar openNav={openNavHandler} />

      <main className="pt-[8vh]">
        <section id="home" className="relative h-[90vh] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/Brochure OM Jay Facility Pvt. Ltd_..._page-0001.jpg"
              alt="Om Jay Facility poster"
              fill
              className="object-cover opacity-70"
              priority
            />
          </div>
          <div className="relative z-10 w-4/5 mx-auto h-full flex flex-col justify-center gap-6 text-white">
            <p className="text-xs uppercase tracking-[0.6rem] text-amber-200">Om Jay Facility</p>
            <h1 className="text-3xl md:text-5xl font-bold">
              Transport, manpower, and facility services powered by trusted teams.
            </h1>
            <p className="max-w-2xl text-base text-amber-100 leading-relaxed">
              Combining ISO-certified processes, local knowledge, and round-the-clock support,
              we power the logistics and manpower services that keep manufacturing, events, and travel moving.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/our-services"
                className="px-6 py-3 rounded-full bg-amber-500 text-slate-900 font-semibold"
              >
                View services
              </Link>
              <Link
                href="/about"
                className="px-6 py-3 rounded-full border border-amber-400 text-white"
              >
                Learn about us
              </Link>
            </div>
            <div className="grid w-full max-w-3xl grid-cols-3 gap-4 text-sm">
              {heroHighlights.map((highlight) => (
                <div key={highlight.label} className="rounded-2xl bg-white/10 px-4 py-3">
                  <p className="text-lg font-semibold">{highlight.value}</p>
                  <p className="text-xs uppercase tracking-[0.4rem] text-amber-200">
                    {highlight.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="businesses"
          data-aos="fade-up"
          className="w-4/5 mx-auto py-20 space-y-10"
        >
          <div className="flex flex-col gap-1">
            <p className="text-xs uppercase tracking-[0.6rem] text-slate-500">
              Our family
            </p>
            <h2 className="text-3xl font-bold text-slate-900">
              Businesses under the Om Jay umbrella
            </h2>
            <p className="text-sm text-slate-500 max-w-3xl">
              Six complementary enterprises delivering transport, logistics, manpower,
              and facilities services across Maharashtra and beyond.
            </p>
          </div>
          <BusinessCarousel />
        </section>

        <section
          id="services"
          data-aos="fade-up"
          className="w-4/5 mx-auto py-20 space-y-10"
        >
          <div className="flex flex-col gap-1">
            <p className="text-xs uppercase tracking-[0.6rem] text-slate-500">What we do</p>
            <h2 className="text-3xl font-bold text-slate-900">Service pillars</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 rounded-2xl border border-amber-100 bg-amber-50 p-3">
                    <Image
                      src={service.imageSrc}
                      alt={service.imageAlt}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                </div>
                <p className="mt-3 text-slate-600">{service.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="values"
          data-aos="fade-up"
          className="w-4/5 mx-auto py-20 space-y-10"
        >
          <div className="flex flex-col gap-1">
            <p className="text-xs uppercase tracking-[0.6rem] text-slate-500">Guiding lights</p>
            <h2 className="text-3xl font-bold text-slate-900">Our values</h2>
            <p className="text-sm text-slate-500 max-w-3xl">
              Principles that drive every fleet movement, campus deployment, and partnership.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.title}
                className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl"
              >
                <div className="relative h-20 w-20">
                  <Image
                    src={value.imageSrc}
                    alt={value.imageAlt}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-slate-900">{value.title}</h3>
                  <p className="text-sm text-slate-600">{value.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="gallery" className="w-4/5 mx-auto py-20 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.6rem] text-slate-500">Gallery</p>
              <h2 className="text-3xl font-bold text-slate-900">Meaningful field snapshots</h2>
            </div>
            <p className="text-sm text-slate-500 max-w-xl">
              On-site moments that prove how Om Jay Facility blends operational discipline, safety, and collaboration.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.45fr,1fr]">
            <div className="rounded-4xl border border-slate-200 bg-white shadow-lg overflow-hidden">
              <Image
                src={galleryHero.src}
                alt={galleryHero.alt}
                width={1200}
                height={720}
                className="object-cover w-full h-80 md:h-[360px]"
              />
              <div className="px-6 py-5">
                <p className="text-sm text-slate-600">{galleryHero.caption}</p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {galleryImages.map((src) => (
                <div
                  key={src}
                  className="rounded-4xl overflow-hidden border border-slate-200 bg-white shadow-lg"
                >
                  <Image
                    src={src}
                    alt="Om Jay gallery"
                    width={600}
                    height={400}
                    className="object-cover w-full h-40 md:h-48"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-4/5 mx-auto pb-20 space-y-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-semibold text-slate-800">Trusted by</h3>
            <p className="text-sm text-slate-500 max-w-3xl">
              Leaders in automotive, FMCG, and manufacturing rely on Om Jay Facility’s logistics, manpower, and support teams.
            </p>
          </div>
          <TrustedClientsCarousel clients={trustedClients} />
        </section>
      </main>

      <Contact />
      <Footer />
    </div>
  );
}

