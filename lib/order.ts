import { Order } from "@/types/order";

const STORAGE_KEY = "orders";

export function getOrders(): Order[] {
  if (typeof window === "undefined") return [];

  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
}

export function createOrder(order: Order) {
  const orders = getOrders();

  orders.push(order);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
}

export function getOrder(id: string) {
  return getOrders().find((o) => o.id === id);
}