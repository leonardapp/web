export interface CartItem {
  slug: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

export function getCart(): CartItem[] {
  if (typeof window === "undefined") return [];

  return JSON.parse(localStorage.getItem("cart") || "[]");
}

export function saveCart(cart: CartItem[]) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(item: CartItem) {
  const cart = getCart();

  const existing = cart.find((i) => i.slug === item.slug);

  if (existing) {
    existing.quantity += item.quantity;
  } else {
    cart.push(item);
  }

  saveCart(cart);
}

export function updateQuantity(slug: string, quantity: number) {
  const cart = getCart();

  const item = cart.find((i) => i.slug === slug);

  if (!item) return;

  item.quantity = quantity;

  saveCart(cart);
}

export function removeFromCart(slug: string) {
  const cart = getCart().filter((i) => i.slug !== slug);

  saveCart(cart);
}

export function clearCart() {
  localStorage.removeItem("cart");
}