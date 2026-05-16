import { prisma } from "../lib/prisma";

async function main() {
  const org = await prisma.organization.create({
    data: {
      name: "Demo Restaurant",
      slug: "demo-restaurant",
    },
  });

  await prisma.module.createMany({
    data: [
      { name: "POS System", key: "pos", organizationId: org.id },
      { name: "QR Ordering", key: "qr", organizationId: org.id },
      { name: "Kitchen Display", key: "kitchen", organizationId: org.id },
      { name: "Analytics", key: "analytics", organizationId: org.id },
    ],
  });

  console.log("Seed completed");
}

main();