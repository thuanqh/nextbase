import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.upsert({
    where: { email: "admin@lungvang.com" },
    update: {},
    create: {
      name: "Admin",
      email: "admin@lungvang.com",
      role: "admin",
    },
  })

  console.log({ user })
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit()
  })
