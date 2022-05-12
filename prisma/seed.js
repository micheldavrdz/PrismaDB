const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer_2.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
		lang: 'Python',
        missionCommander: 'Carlo',
        enrollments: 5,
		hasCertifications: true
      },
    });

    const woopa1 = await prisma.explorer_2.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
		lang: 'Javascript',
        missionCommander: 'Carlo',
        enrollments: 1,
		hasCertifications: true
      },
    });

    const woopa2 = await prisma.explorer_2.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa2',
		lang: 'Javascript',
        missionCommander: 'Carlo',
        enrollments: 3,
		hasCertifications: false
      },
    });

    console.log('Create 3 explorers');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();