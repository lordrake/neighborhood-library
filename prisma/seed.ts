import { PrismaClient, Prisma } from "../app/generated/prisma/client";

const prisma = new PrismaClient();

const itemData: Prisma.ItemCreateInput[] = [
  { title: "Lawn Mower" },
  { title: "Printer" },
];

export async function main() {
  console.log("Starting seed...");
  for (const item of itemData) {
    await prisma.item.create({ data: item });
  }
  console.log("Seed completed successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
