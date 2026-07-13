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
}

export const products:Product[]=[

{
  id: 1,
  slug: "kiosk-slim",
  title: "Kiosk Slim",
  subtitle: '32" Wall Mounted Self-Service Kiosk',
  description: "Space-saving kiosk fully integrated with HOXXES.",
  image: "https://hoxxes.app/images/kiosk.svg",
  price: 1185,
  stock: 10,
  vat: 18,
},

{
  id: 2,
  slug: "pos-terminal",
  title: "POS Terminal",
  subtitle: "Enterprise Dual Screen POS",
  description: "Android POS Terminal",
  image: "https://hoxxes.app/images/POS.png",
  price: 677,
  stock: 5,
  vat: 18, // Ndërroje nëse fatura e furnitorit tregon ndryshe
},

{
  id: 3,
  slug: "kds-display",
  title: "Kitchen Display System",
  subtitle: 'ALLNET Touch Display 21" (PoE)',
  description: "Android Kitchen Display",
  image: "https://hoxxes.app/images/kds-allnet.png",
  price: 415,
  stock: 1,
  vat: 8,
}

];