import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { businesses } from "../../data/businesses";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Services", href: "/our-services" },
  { label: "About us", href: "/about" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/#contact" },
];

const Footer = () => {
  return (
    <footer id="footer" className="bg-slate-900 text-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-3"
            aria-label="Return to home"
          >
            <div className="relative w-14 h-14">
              <Image
                src="/images/Om Jay Facility Pvt. Ltd..png"
                alt="Om Jay Group logo"
                fill
                sizes="56px"
                className="object-contain"
                priority
              />
            </div>
            <span className="text-lg font-semibold tracking-tight">
              Om Jay Group
            </span>
          </Link>
          <p className="text-sm text-slate-300 leading-relaxed">
            Integrated logistics, manpower, and facility services that keep your
            operations steady—24/7.
          </p>
          <div className="flex items-center gap-3 text-lg">
            <a
              href="https://www.facebook.com/"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#0165e1]"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#cd486b]"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#1da1f2]"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.youtube.com/"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#cd201f]"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.4rem] text-slate-400">
            Services
          </h2>
          <div className="mt-5 flex flex-col gap-3">
            {businesses.slice(0, 6).map((business) => (
              <Link
                key={business.slug}
                className="text-sm text-slate-200 hover:text-white transition-colors"
                href={`/our-services/${business.slug}`}
              >
                {business.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.4rem] text-slate-400">
            Navigate
          </h2>
          <nav className="mt-5 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                className="text-sm text-slate-200 hover:text-white transition-colors"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.4rem] text-slate-400">
            Contact
          </h2>
          <div className="mt-5 flex flex-col gap-3">
            <a
              className="flex items-start gap-2 text-sm text-slate-200 hover:text-white transition-colors"
              href="#contact"
            >
              <span className="text-slate-400">•</span>
              Get in Touch
            </a>
            <a
              className="flex items-start gap-2 text-sm text-slate-200 hover:text-white transition-colors"
              href="mailto:vaibhav.kate@omjaygroup.com"
            >
              <span className="text-slate-400">•</span>
              vaibhav.kate@omjaygroup.com
            </a>
            <a
              className="flex items-start gap-2 text-sm text-slate-200 hover:text-white transition-colors"
              href="tel:8806607700"
            >
              <span className="text-slate-400">•</span>
              8806607700
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-6 border-t border-slate-800 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-slate-400">
          &copy; {new Date().getFullYear()} Om Jay Group. All rights reserved.
        </p>
        <Image
          src="/images/pay.svg"
          alt="Accepted payments"
          width={200}
          height={48}
          className="object-contain self-end md:self-auto"
        />
      </div>
    </footer>
  );
};

export default Footer;
