"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import MobileNav from "../Components/MobileNav";
import Navbar from "../Components/Navbar";
import { businesses } from "../../data/businesses";

export default function OurServicesPage() {
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
    <div className="overflow-x-hidden bg-slate-50 min-h-screen">
      <MobileNav nav={nav} closeNav={closeNavHandler} />
      <Navbar openNav={openNavHandler} />

      <main className="pt-[8vh]">
        <section className="w-4/5 mx-auto text-center py-[6rem] space-y-6">
          <p className="text-sm uppercase tracking-[0.5rem] text-gray-500">
            Group of Businesses
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-blue-900">
            Our Services
          </h1>
          <p className="text-base text-gray-700 max-w-2xl mx-auto">
            Explore every Om Jay Group enterprise. Hover or tap a logo to preview
            the work we do, then open the detail page for a quick summary of the
            capabilities and on-ground presence.
          </p>
        </section>

        <section className="w-4/5 mx-auto pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {businesses.map((company) => (
              <Link
                key={company.slug}
                href={`/our-services/${company.slug}`}
                className="group relative rounded-3xl border border-slate-200 bg-white p-6 flex flex-col items-center text-center shadow-lg shadow-slate-200 transition-transform duration-300 hover:-translate-y-1"
                data-aos="fade-up"
              >
                <div className="flex items-center justify-center w-28 h-28">
                  <Image
                    src={company.logoUrl}
                    alt={`${company.name} logo`}
                    width={112}
                    height={112}
                    className="object-contain"
                  />
                </div>
                <h2 className="mt-6 text-lg font-semibold text-slate-900">
                  {company.name}
                </h2>
                <p className="mt-3 text-sm text-slate-500">{company.nature}</p>
                <span className="mt-6 text-sm font-semibold text-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  View details →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Contact />
      <Footer />
    </div>
  );
}

