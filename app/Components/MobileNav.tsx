import { XMarkIcon } from "@heroicons/react/16/solid";
import React from "react";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";

  const handleLinkClick = (event: any, target: string) => {
    event.preventDefault(); // Mencegah tindakan default dari link
    closeNav(); // Menutup navigasi
    window.location.href = target; // Mengubah URL sesuai target
  };

  return (
    <nav
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[99999] bg-[#200f31] lg:hidden`}
    >
      <div className="h-[100vh] w-[100vw] flex flex-col items-center justify-center gap-6 px-8 text-white">
        {[
          { label: "Home", href: "/" },
          { label: "Our Services", href: "/our-services" },
          { label: "About us", href: "/about" },
          { label: "Gallery", href: "/#gallery" },
          { label: "Contact", href: "/#contact" },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => handleLinkClick(e, link.href)}
            className="w-full rounded-3xl border border-white/30 bg-white/5 px-6 py-3 text-center text-2xl font-semibold uppercase tracking-[0.4rem] transition hover:bg-white/30"
          >
            {link.label}
          </a>
        ))}
      </div>
      <div
        onClick={closeNav}
        className="absolute cursor-pointer top-[2rem] z-[1000000] right-[2rem] w-[2rem] h-[2rem] text-white"
      >
        <XMarkIcon />
      </div>
    </nav>
  );
};

export default MobileNav;
