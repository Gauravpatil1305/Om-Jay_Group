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
import { Business } from "../../../data/businesses";

interface BusinessDetailShellProps {
  company: Business;
}

export default function BusinessDetailShell({ company }: BusinessDetailShellProps) {
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
        <section className="w-4/5 mx-auto py-20">
          <div className="flex flex-col gap-4">
            <Link
              href="/our-services"
              className="text-sm text-blue-600 font-semibold hover:underline"
            >
              ← Back to Our Services
            </Link>
            <p className="text-sm uppercase tracking-[0.5rem] text-gray-500">
              {company.presence}
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-blue-900">
              {company.name}
            </h1>
            <p className="text-base text-gray-700 max-w-2xl">
              {company.description}
            </p>
          </div>
        </section>

        <section className="w-4/5 mx-auto grid gap-10 lg:grid-cols-[1.3fr_1fr] pb-20">
          <div className="bg-white rounded-4xl shadow-lg p-6 border border-slate-100">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-slate-200">
              <Image
                src={company.detailImage}
                alt={company.name}
                fill
                sizes="(min-width: 1024px) 50vw, 90vw"
                className="object-cover"
              />
            </div>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <p className="text-xs uppercase text-gray-500">Established</p>
                <p className="text-lg font-semibold text-slate-900">
                  {company.year}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase text-gray-500">Owner(s)</p>
                <p className="text-lg font-semibold text-slate-900">
                  {company.owners}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-900 to-cyan-500 p-6 rounded-4xl text-white shadow-lg">
              <h2 className="text-xl font-semibold">What we deliver</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-100">
                {company.nature}
              </p>
            </div>

            <div className="bg-white rounded-4xl border border-slate-100 p-6 shadow-lg space-y-4">
              <h3 className="text-lg font-semibold text-slate-900">Details</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {company.address}
              </p>
              <p className="text-sm text-slate-600">
                Status: <span className="font-semibold">{company.ownerTitle}</span>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Contact />
      <Footer />
    </div>
  );
}

