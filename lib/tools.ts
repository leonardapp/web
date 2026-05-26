export function detectTool(message: string) {
  const text = message.toLowerCase();

  if (text.includes("order")) return "CREATE_ORDER";
  if (text.includes("table")) return "TABLE_STATUS";
  if (text.includes("bill")) return "GET_BILL";
  if (text.includes("printer")) return "CHECK_PRINTER";

  return "CHAT";
}