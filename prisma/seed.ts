import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.user.upsert({
    where: { username: "violet" },
    update: { 
      displayName: "Violet",
      avatar: "/avatars/user.jpg",
    },
    create: {
      username: "violet",
      displayName: "Violet",
      avatar: "/avatars/user.jpg",
    },
  });

  console.log("Seeded 1 user.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });