export interface Business {
  slug: string;
  name: string;
  logoText?: string;
  logoUrl: string;
  description: string;
  nature: string;
  presence: string;
  year: string;
  address: string;
  owners: string;
  ownerTitle: string;
  detailImage: string;
  featureImage: string;
  galleryImages: string[];
}

export const businesses: Business[] = [
  {
    slug: "kate-motors",
    name: "Kate Motors Pvt. Ltd.",
    logoUrl: "/logos/KM.png",
    description:
      "Authorised Tata Motors 3S dealership offering sales, service, and spares with a dedicated support desk.",
    nature: "Authorized Tata Motors Dealership with 3S Facility",
    presence: "Baramati · Indapur · Daund · Nira",
    year: "2013",
    address:
      "Gat No-483, 2/1, Baramati - Indapur Rd, Moti Bag, Baramati, Maharashtra 413102",
    owners: "Vaibhav Shrikant Kate",
    ownerTitle: "Director",
    detailImage: "/images/kateMOTORS.jpeg",
    featureImage: "/images/katemotors.jpeg",
    galleryImages: ["/images/katemotors.jpeg", "/images/kateMOTORS (2).jpeg"],
  },
  {
    slug: "jay-tractors",
    name: "Jay Tractors",
    logoUrl: "/logos/Jay Tractors.png",
    description:
      "New Holland tractors and CSH Harvester 3S facility supported by expert technicians and finance partners.",
    nature: "New Holland & CSH Harvester 3S Facility",
    presence: "Baramati · Indapur ",
    year: "2017",
    address:
      "Gat No-483, 2/1, Baramati - Indapur Rd, Moti Bag, Baramati, Maharashtra 413102",
    owners: "Vidhyadhar Shrikant Kate",
    ownerTitle: "Proprietor",
    detailImage: "/images/jaytrack.jpeg",
    featureImage: "/images/Jay Tractors.jpg.jpeg",
    galleryImages: ["/images/jaytrack.jpeg", "/images/Jay Tractors.jpeg"],
  },
  {
    slug: "om-jay-facility",
    name: "Om Jay Facility Pvt. Ltd.",
    logoUrl: "/logos/Om Jay Facility Pvt. Ltd..png",
    description:
      "Bus transport services for schools, corporates, and pilgrimages with safety-trained drivers and maintenance crews.",
    nature: "Bus Transport & Fleet Operations",
    presence: "Pune · Baramati · Phaltan · Indapur · Kurkumbh",
    year: "2008",
    address:
      "Gat No-483, 2/1, Baramati - Indapur Rd, Moti Bag, Baramati, Maharashtra 413102",
    owners:
      "Vaibhav Shrikant Kate · Vidhyadhar Shrikant Kate · Anjali Vaibhav Kate · Pratibha Vidhyadhar Kate",
    ownerTitle: "Directors",
    detailImage: "/images/facility-management-1.png",
    featureImage: "/images/Om Jay Facility Pvt. Ltd..jpg",
    galleryImages: ["/images/bustransportation.jpg", "/images/BusTransportations.jpg"],
  },
  {
    slug: "kirti-enterprises",
    name: "Kirti Enterprises",
    logoUrl: "/logos/Kirti Enterprises.png",
    description:
      "Integrated security, housekeeping, gardening, and related facility services for manufacturing, retail, and event sites.",
    nature: "Security, Housekeeping & Gardening Services",
    presence: "Maharashtra State",
    year: "2010",
    address:
      "Plot No. 46/47, CFC Centre, Textile Park, Maharashtra Industrial Development Corporation, Baramati 413133",
    owners: "Pratibha Vidhyadhar Kate",
    ownerTitle: "Proprietor",
    detailImage: "/images/Kirti Enterprises.jpg",
    featureImage: "/images/Kirti Enterprises.jpg",
    galleryImages: ["/images/Kirti Enterprises.jpg", "/images/salesteam.jpg"],
  },
  {
    slug: "om-jay-logistic",
    name: "Om Jay Logistic Pvt. Ltd.",
    logoUrl: "/logos/Om Jay Logistic Pvt. Ltd...png",
    description:
      "Goods transport and logistics services with temperature-controlled and heavy haulage capacity across Maharashtra.",
    nature: "Logistics & Goods Transport",
    presence: "Maharashtra State",
    year: "2018",
    address:
      "Gat No-483, 2/1, Baramati - Indapur Rd, Moti Bag, Baramati, Maharashtra 413102",
    owners: "Vaibhav Shrikant Kate",
    ownerTitle: "Director",
    detailImage: "/images/transport&logistics.jpg",
    featureImage: "/images/Om Jay Logistic Pvt. Ltd..jpg",
    galleryImages: ["/images/transport&logistics.jpg", "/images/logistics-services.jpg"],
  },
  {
    slug: "om-jay-associates",
    name: "Om Jay Associates",
    logoUrl: "/logos/Om Jay Associates.png",
    description:
      "Manpower management specialists providing skilled, semiskilled, and unskilled teams with payroll and compliance support.",
    nature: "Manpower Management & Staffing Services",
    presence: "Baramati · Indapur · Daund",
    year: "2010",
    address:
      "Plot No. 46/47, CFC Centre, Textile Park, Maharashtra Industrial Development Corporation, Baramati 413133",
    owners: "Anjali Vaibhav Kate",
    ownerTitle: "Proprietor",
    detailImage: "/images/association.jpg",
    featureImage: "/images/Om Jay Associates.png",
    galleryImages: ["/images/manpower-services.jpeg", "/images/Manpower.jpg"],
  },
];


