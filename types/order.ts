export interface Customer {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  city: string;
  address: string;
  businessNumber?: string;
  vatNumber?: string;
  notes?: string;
}

export interface OrderItem {
  productId: number;
  title: string;
  quantity: number;
  price: number;
  vat: number;
}

export interface Order {
  id: string;
  customer: Customer;
  items: OrderItem[];
  paymentMethod: "bank" | "collection";
  subtotal: number;
  vat: number;
  total: number;
  status:
    | "Pending"
    | "Confirmed"
    | "Processing"
    | "Completed"
    | "Cancelled";
  createdAt: string;
}