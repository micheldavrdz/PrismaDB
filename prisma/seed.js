const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const commander = await prisma.MissionCommander.upsert({
      where: { id: 1 },
      update: {},
      create: {
        name: 'Carlo',
		username: 'carlogilmar',
        mainStack: 'Erlang',
        currentEnrollment: true,
		hasAzureCertification: true
      },
    });

    const commander1 = await prisma.MissionCommander.upsert({
      where: { id: 2 },
      update: {},
      create: {
        name: 'Rodrigo',
		username: 'romarpla',
        mainStack: 'Javascript',
        currentEnrollment: true,
		hasAzureCertification: true
      },
    });

    const commander2 = await prisma.MissionCommander.upsert({
      where: { id: 3 },
      update: {},
      create: {
        name: 'Fernanda',
		username: 'FernandaOchoa',
        mainStack: 'Python',
        currentEnrollment: true,
		hasAzureCertification: true
      },
    });

    console.log('Create 3 mission commanders');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();