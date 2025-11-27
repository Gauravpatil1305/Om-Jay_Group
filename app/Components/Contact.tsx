import Image from "next/image";
import React from "react";

const offices = [
  {
    title: "Head Office",
    address:
      "Plot No A-41, MIDC Baramati, Tal-Baramati, Dist. Pune, Maharashtra 413133",
  },
  {
    title: "Pune Office",
    address: "Rutugandh Apartment Flat No 4 Shivne, NDA Road, Pune, Maharashtra 411023",
  },
  {
    title: "Phaltan Office",
    address: "Madhavbag, Shop No 2, Ravivar Peth, Phaltan, Tal-Phaltan, Dist. Satara 415523",
  },
];

const contactMethods = [
  {
    label: "Phone: Dnyaneshwar (Mauli) Kale",
    value: "+919890178717",
  },
  {
    label: "Email",
    value: "mauli.kale@omjaygroup.com",
    detail: "CEO : Om Jay Group",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-linear-to-b from-white to-slate-100">
      <div className="w-4/5 mx-auto space-y-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.6rem] text-slate-500">Contact</p>
            <h2 className="text-3xl font-bold text-slate-900">Reach the Om Jay family</h2>
            <p className="text-slate-600">
              Our teams are ready to support transport, logistics, manpower, and facility service requests.
              Reach out to schedule a call, site visit, or to explore how we can scale with your business.
            </p>
          </div>
          <div className="rounded-4xl overflow-hidden border border-slate-200 bg-white shadow-lg">
            <Image
              src="/ClientImg/contactUs.jpg"
              alt="Om Jay Facility contact"
              width={800}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {contactMethods.map((method) => (
            <div
              key={method.label}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-xs uppercase tracking-[0.4rem] text-slate-500">
                {method.label}
              </p>
              <p className="mt-2 text-xl font-semibold text-slate-900">{method.value}</p>
              {method.detail && (
                <p className="text-sm text-slate-600">{method.detail}</p>
              )}
            </div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {offices.map((office) => (
            <div
              key={office.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">{office.title}</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">{office.address}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
