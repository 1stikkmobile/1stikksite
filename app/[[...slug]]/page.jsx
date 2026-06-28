import FirstStikkSite from "../../components/FirstStikkSite";

export default async function Page({ params }) {
  const resolvedParams = await params;
  return <FirstStikkSite slug={resolvedParams?.slug ?? []} />;
}
