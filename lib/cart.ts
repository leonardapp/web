
export interface CartItem {
  slug: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
  availability: "in-stock" | "made-to-order";
  leadTime?: string;
}

const CART_KEY = "cart";

// Merr produktet nga Cart
export function getCart(): CartItem[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const stored = localStorage.getItem(CART_KEY);

    if (!stored) return [];

    const cart: unknown = JSON.parse(stored);

    if (!Array.isArray(cart)) return [];

    return cart.filter(
      (item): item is CartItem =>
        item !== null &&
        typeof item === "object" &&
        typeof item.slug === "string" &&
        typeof item.title === "string" &&
        typeof item.price === "number" &&
        Number.isFinite(item.price) &&
        item.price >= 0 &&
        Number.isInteger(item.quantity) &&
        item.quantity > 0 &&
        typeof item.image === "string" &&
        (item.availability === "in-stock" ||
          item.availability === "made-to-order")
    );
  } catch {
    return [];
  }
}

// Ruaj Cart
export function saveCart(cart: CartItem[]) {
  if (typeof window === "undefined") return;

  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

// Shto produkt në Cart
export function addToCart(item: CartItem) {
  if (
    !item.slug ||
    !Number.isFinite(item.price) ||
    item.price < 0 ||
    !Number.isInteger(item.quantity) ||
    item.quantity < 1
  ) {
    return;
  }

  const cart = getCart();

  const existing = cart.find(
    (i) => i.slug === item.slug
  );

  if (existing) {
    existing.quantity += item.quantity;

    // Përditëso të dhënat e produktit
    existing.title = item.title;
    existing.price = item.price;
    existing.image = item.image;
    existing.availability = item.availability;
    existing.leadTime = item.leadTime;
  } else {
    cart.push({ ...item });
  }

  saveCart(cart);
}

// Ndrysho sasinë
export function updateQuantity(
  slug: string,
  quantity: number
) {
  const cart = getCart();

  const item = cart.find(
    (i) => i.slug === slug
  );

  if (!item) return;

  if (!Number.isInteger(quantity) || quantity < 1) {
    removeFromCart(slug);
    return;
  }

  item.quantity = quantity;

  saveCart(cart);
}

// Fshije produktin
export function removeFromCart(slug: string) {
  const cart = getCart().filter(
    (item) => item.slug !== slug
  );

  saveCart(cart);
}

// Zbraz Cart
export function clearCart() {
  if (typeof window === "undefined") return;

  localStorage.removeItem(CART_KEY);
}

// Numri total i produkteve
export function getCartCount(): number {
  return getCart().reduce(
    (total, item) => total + item.quantity,
    0
  );
}

// Totali i Cart
export function getCartTotal(): number {
  return getCart().reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );
}
