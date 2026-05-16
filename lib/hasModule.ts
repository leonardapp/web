import { prisma } from "@/lib/prisma";

export async function hasModule(
  organizationId: string,
  moduleKey: string
) {
  const module = await prisma.module.findFirst({
    where: {
      organizationId,
      key: moduleKey,
      enabled: true,
    },
  });

  return !!module;
}