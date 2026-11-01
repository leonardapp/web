
import CheckoutContent from "@/components/CheckoutContent";

type CheckoutPageProps = {
  searchParams: Promise<{
    product?: string;
    qty?: string;
    cart?: string;
  }>;
};

export default async function CheckoutPage({
  searchParams,
}: CheckoutPageProps) {
  const params = await searchParams;

  const parsedQuantity = Number(params.qty ?? "1");

  const quantity =
    Number.isSafeInteger(parsedQuantity) && parsedQuantity > 0
      ? parsedQuantity
      : 1;

  return (
    <CheckoutContent
      productSlug={params.product ?? ""}
      quantity={quantity}
      cartMode={params.cart === "1"}
    />
  );
}
