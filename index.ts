import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

(async () => {
  const file = await prisma.file.findUnique({
    where: {
      id: 5,
    }
  });


  file  //// hover on it and click on type File
  // I view File that is global js object, instead of file from prisma
})()
