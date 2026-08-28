import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.upsert({
    where: { username: "you" },
    update: {},
    create: {
      username: "you",
      displayName: "You",
      avatar: "/avatars/user.png",
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
