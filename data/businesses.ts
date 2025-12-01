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
  showInServicesPage?: boolean;
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
 
];

export const serviceBusinesses = businesses.filter(
  (business) => business.showInServicesPage !== false
);


