"use client";

import Image from "next/image";
import MobileNav from "../Components/MobileNav";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const valueCards = [
  {
    title: "Mission",
    description:
      "Deliver seamless logistics, manpower, and facility experiences that let clients focus on growth.",
    imageSrc: "/images/missions.jpg",
    imageAlt: "Mission icon illustration",
  },
  {
    title: "Vision",
    description:
      "Be the most trusted integrated operations partner for Western India’s manufacturing and retail engines.",
    imageSrc: "/images/vission.png",
    imageAlt: "Vision icon illustration",
  },
  {
    title: "Service Strengths",
    description:
      "ISO-backed processes, digital tracking, and regional teams that scale on demand.",
    imageSrc: "/images/strength.png",
    imageAlt: "Service strength icon illustration",
  },
];

const valueStatements = [
  "Entrepreneurial Soul – innovation focused on operational excellence.",
  "Portfolio – a full logistics and facility-services stack for every client.",
  "Responsive – acting quickly so partners can perform at their best.",
  "Passion – committed at heart and mind to each engagement.",
  "Diversity – inclusive of every brand we support.",
  "Quality – what we do, we do exceptionally well.",
  "Innovation – balancing social responsibility with economic growth.",
];

const serviceStrengths = [
  "We go beyond expectations while staying client-centric and value-focused.",
  "Teams respond whenever and wherever, fulfilling every need.",
  "Customer feedback drives innovation and continuous improvement.",
  "We never make false commitments—only reliable delivery.",
  "We aim to leave the Om Jay Facility footprint as a source of joy for every customer.",
];

const leadershipProfiles = [
  {
    name: "Vaibhav Shrikant Kate",
    title: "Director · Om Jay Group",
    description:
      "Guides the group’s strategic investments and partnerships with a focus on operational excellence and long-term growth.",
    image: "/images/Vaibhav Shrikant Kate Director of Om Jay Group.jpg",
  },
  {
    name: "Vidhyadhar Shrikant Kate",
    title: "Director · Om Jay Group",
    description:
      "Leads the facility and mobility services, ensuring every team delivers reliability and safety.",
    image: "/images/Vidhyadhar Shrikant Kate Director of Om Jay Group.jpg",
  },
  {
    name: "Dnyaneshwar (Mauli) Kale",
    title: "CEO · Om Jay Group",
    description:
      "Champions customer-centric thinking and digital modernization across logistics, manpower, and dealership arms.",
    image: "/images/Dnyaneshwar (Mauli) Kale CEO of Om Jay Group.jpg",
  },
];

export default function AboutPage() {
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
        {/* Hero Section */}
        <section className="relative bg-slate-900 text-white">
          <div className="absolute inset-0">
            <Image
              src="/ClientImg/aboutUs.jpg"
              alt="Om Jay team meeting"
              fill
              className="object-cover opacity-80"
            />
          </div>

          <div className="relative z-10 w-4/5 mx-auto py-24 flex flex-col gap-8">
            <p className="text-xs uppercase tracking-[0.6rem] text-amber-200">
              About us
            </p>

            <h1 className="text-4xl md:text-5xl font-bold">
              A values-driven group delivering logistics, manpower, and facility
              services.
            </h1>

            <p className="max-w-3xl text-lg text-amber-100 leading-relaxed">
              The Om Jay Group was created to be the trusted partner for
              industrial operations, travel, and manpower. We combine
              compliance, experience, and agile teams to deliver on time while
              keeping our people and partners safe.
            </p>
          </div>
        </section>

        {/* Leadership */}
        <section className="w-4/5 mx-auto py-16 space-y-6">
          <div data-aos="fade-up" className="space-y-2 text-center">
            <p className="text-xs uppercase tracking-[0.6rem] text-amber-400">
              Leadership
            </p>
            <h2 className="text-3xl font-bold">
              People powering Om Jay Group
            </h2>
            <p className="text-slate-600">
              Our leadership team is anchored in trust, long-term thinking, and
              a commitment to the partners we serve.
            </p>
          </div>

          <div data-aos="fade-up" className="grid gap-6 md:grid-cols-3">
            {leadershipProfiles.map((leader) => (
              <article
                key={leader.name}
                className="flex flex-col gap-4 rounded-4xl border border-slate-200 bg-white p-6 shadow-xl"
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-slate-200">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {leader.name}
                  </h3>
                  <p className="text-sm font-semibold text-amber-600">
                    {leader.title}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {leader.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="w-4/5 mx-auto py-20 space-y-8">
          <div data-aos="fade-up" className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">Our values</h2>
            <p className="text-slate-600">
              Every decision we make is guided by a clear mission, an ambitious
              vision, and service strengths that never compromise on
              reliability.
            </p>
          </div>

          <div data-aos="fade-up" className="grid gap-6 md:grid-cols-3">
            {valueCards.map((card) => (
              <article
                key={card.title}
                className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl"
              >
                <div className="relative h-20 w-20">
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {card.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Principles */}
        <section className="w-4/5 mx-auto py-20 space-y-6">
          <div data-aos="fade-up" className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">
              Principles that guide us
            </h2>
            <p className="text-slate-600">
              These statements capture the culture, grit, and innovation that
              keep Om Jay running for our partners.
            </p>
          </div>

          <div data-aos="fade-up" className="grid gap-4 md:grid-cols-2">
            {valueStatements.map((value) => (
              <p
                key={value}
                className="rounded-3xl border border-slate-200 bg-white px-6 py-5 text-slate-600"
              >
                {value}
              </p>
            ))}
          </div>
        </section>

        {/* Service Strengths */}
        <section className="w-4/5 mx-auto py-20 space-y-10">
          <div
            data-aos="fade-up"
            className="grid gap-6 lg:grid-cols-2 items-center"
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-slate-900">
                Service strengths
              </h2>

              <p className="text-slate-600">
                Every assignment is handled by teams who understand strategy,
                regulatory rigor, and what it means to act as a partner.
              </p>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
                <p className="text-sm text-slate-500">
                  A combination of ISO-backed processes, digital tracking, and
                  regional teams that scale on demand.
                </p>
              </div>
            </div>

            <div className="rounded-4xl overflow-hidden border border-slate-200 bg-white shadow-lg">
              <Image
                src="/ClientImg/principalguide.avif"
                alt="Om Jay facilities"
                width={800}
                height={600}
                className="object-cover w-full h-[360px]"
              />
            </div>
          </div>

          <div data-aos="fade-up" className="grid gap-3">
            {serviceStrengths.map((strength) => (
              <p
                key={strength}
                className="rounded-3xl border border-amber-100 bg-linear-to-r from-amber-50/80 to-white px-5 py-4 text-slate-600 shadow-sm"
              >
                {strength}
              </p>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
