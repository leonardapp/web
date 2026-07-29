export interface Product {
  id: number;

  slug: string;

  title: string;

  subtitle: string;

  description: string;

  image: string;

  price: number;

  stock: number;

  vat: number;

  availability: "in-stock" | "made-to-order";

  leadTime?: string;
}

export const products: Product[] = [
  {
    id: 1,
    slug: "kiosk-slim",
    title: "Kiosk Slim",
    subtitle: '32" Wall Mounted Self-Service Kiosk',
    description: "Space-saving kiosk fully integrated with HOXXES.",
    image: "https://hoxxes.app/images/kiosk.svg",
    price: 1185,
    stock: 8,
    vat: 18,
    availability: "in-stock",
    leadTime: "3 Months",
  },

  {
    id: 2,
    slug: "pos-terminal",
    title: "POS Terminal",
    subtitle: "Enterprise Dual Screen POS",
    description: "Android POS Terminal",
    image: "https://hoxxes.app/images/POS.png",
    price: 677,
    stock: 4,
    vat: 18,
    availability: "in-stock",
    leadTime: "3 Months",
  },

  {
    id: 3,
    slug: "kds-display",
    title: "Kitchen Display System",
    subtitle: 'ALLNET Touch Display 21" (PoE) Android',
    description:
      "Recommended Android display for HOXXES Kitchen Display System.",
    image: "https://hoxxes.app/images/kds-allnet.png",
    price: 415,
    stock: 0,
    vat: 8,
    availability: "made-to-order",
    leadTime: "2 Weeks",
  },
];