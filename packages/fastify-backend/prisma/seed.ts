import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	const classes: Prisma.ClassCreateManyInput[] = [
		{ name: 'Barbarian', baseHP: 7 },
		{ name: 'Bard', baseHP: 7 },
		{ name: 'Chaos Mage', baseHP: 6 },
		{ name: 'Cleric', baseHP: 7 },
		{ name: 'Commander', baseHP: 7 },
		{ name: 'Demonologist', baseHP: 6 },
		{ name: 'Druid', baseHP: 6 },
		{ name: 'Fighter', baseHP: 8 },
		{ name: 'Monk', baseHP: 7 },
		{ name: 'Necromancer', baseHP: 6 },
		{ name: 'Occultist', baseHP: 6 },
		{ name: 'Paladin', baseHP: 8 },
		{ name: 'Ranger', baseHP: 7 },
		{ name: 'Rogue', baseHP: 6 },
		{ name: 'Sorcerer', baseHP: 6 },
		{ name: 'Wizard', baseHP: 6 },
	];
	try {
		const createdClasses = await prisma.class.createMany({ data: classes });
		console.log('SUCCESS || \n', createdClasses);
	} catch (e) {
		console.error(e);
	}
}

main();
