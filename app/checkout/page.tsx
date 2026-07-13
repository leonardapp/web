import CheckoutContent from "@/components/CheckoutContent";

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: Promise<{
    product?: string;
    qty?: string;
  }>;
}) {
  const params = await searchParams;

  return (
    <CheckoutContent
      productSlug={params.product ?? ""}
      quantity={Number(params.qty ?? "1")}
    />
  );
}