import { notFound } from "next/navigation";
import BusinessDetailShell from "./BusinessDetailShell";
import { Business, businesses, serviceBusinesses } from "../../../data/businesses";

interface Params {
  slug: string;
}

export async function generateStaticParams() {
  return serviceBusinesses.map((business) => ({
    slug: business.slug,
  }));
}

export default async function BusinessDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const company = businesses.find((item) => item.slug === slug);

  if (!company) {
    return notFound();
  }

  return <BusinessDetailShell company={company as Business} />;
}

