import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	const classes: Prisma.ClassCreateManyInput[] = [
		{ name: 'Barbarian' },
		{ name: 'Bard' },
		{ name: 'Chaos Mage' },
		{ name: 'Cleric' },
		{ name: 'Commander' },
		{ name: 'Demonologist' },
		{ name: 'Druid' },
		{ name: 'Fighter' },
		{ name: 'Monk' },
		{ name: 'Necromancer' },
		{ name: 'Occultist' },
		{ name: 'Paladin' },
		{ name: 'Ranger' },
		{ name: 'Rogue' },
		{ name: 'Sorcerer' },
		{ name: 'Wizard' },
	];
	try {
		const createdClasses = await prisma.class.createMany({ data: classes });
		console.log('SUCCESS || \n', createdClasses);
	} catch (e) {
		console.error(e);
	}
}

main();
