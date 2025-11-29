import { Bars3Icon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  openNav: () => void;
}

const Navbar = ({ openNav }: Props) => {
  return (
    <nav
      id="home"
      className="w-full bg-white/80 backdrop-blur border-b border-slate-100 fixed z-9999"
    >
      <div className="flex w-4/5 mx-auto items-center justify-between py-4 h-[8vh] lg:h-[12vh]">
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0 text-ellipsis"
          aria-label="Go to homepage"
        >
            <div className="relative w-28 h-20 lg:w-32 lg:h-24">
              <Image
                src="/images/MainLogo.png"
                alt="Om Jay Group logo"
                fill
                sizes="(max-width: 768px) 40vw, 160px"
                className="object-contain"
                priority
              />
            </div>
        </Link>
        <div className="flex items-center gap-6 lg:gap-12">
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-slate-900 hover:text-amber-500"
            >
              Home
            </Link>
            <Link
              href="/our-services"
              className="text-sm font-medium text-slate-900 hover:text-amber-500"
            >
              Our Services
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-slate-900 hover:text-amber-500"
            >
              About us
            </Link>
            <Link
              href="/#gallery"
              className="text-sm font-medium text-slate-900 hover:text-amber-500"
            >
              Gallery
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-medium text-slate-900 hover:text-amber-500"
            >
              Contact
            </Link>
          </div>
          <button
            onClick={openNav}
            aria-label="Open mobile navigation"
            className="rounded-full border border-slate-200 bg-white p-2 shadow-sm transition hover:bg-slate-100 lg:hidden"
          >
            <Bars3Icon className="h-6 w-6 text-slate-800" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
