export async function createOrder(data: any) {
  return {
    success: true,
    message: "Order created successfully",
    orderId: Math.floor(Math.random() * 10000),
  };
}

export async function getTableStatus(table: string) {
  return {
    table,
    status: "occupied",
    orders: 3,
    total: 42.5,
  };
}