import { PrismaClient, Prisma, Abilities, ArmorTypes } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	const classes: Prisma.ClassCreateManyInput[] = [
		{ name: 'Barbarian', baseHP: 7, bonuses: [Abilities.STR, Abilities.CON] },
		{ name: 'Bard', baseHP: 7, bonuses: [Abilities.DEX, Abilities.CHA] },
		{ name: 'Chaos Mage', baseHP: 6, bonuses: [Abilities.INT, Abilities.CHA] },
		{ name: 'Cleric', baseHP: 7, bonuses: [Abilities.WIS, Abilities.STR] },
		{ name: 'Commander', baseHP: 7, bonuses: [Abilities.STR, Abilities.CHA] },
		{
			name: 'Demonologist',
			baseHP: 6,
			bonuses: [Abilities.CON, Abilities.CHA],
		},
		{
			name: 'Druid',
			baseHP: 6,
			bonuses: [Abilities.STR, Abilities.DEX, Abilities.WIS],
		},
		{ name: 'Fighter', baseHP: 8, bonuses: [Abilities.STR, Abilities.CON] },
		{
			name: 'Monk',
			baseHP: 7,
			bonuses: [Abilities.STR, Abilities.DEX, Abilities.WIS],
		},
		{ name: 'Necromancer', baseHP: 6, bonuses: [Abilities.INT, Abilities.CHA] },
		{ name: 'Occultist', baseHP: 6, bonuses: [Abilities.INT, Abilities.WIS] },
		{ name: 'Paladin', baseHP: 8, bonuses: [Abilities.STR, Abilities.CHA] },
		{ name: 'Ranger', baseHP: 7, bonuses: [Abilities.DEX, Abilities.STR] },
		{ name: 'Rogue', baseHP: 6, bonuses: [Abilities.DEX, Abilities.CHA] },
		{ name: 'Sorcerer', baseHP: 6, bonuses: [Abilities.CHA, Abilities.CON] },
		{ name: 'Wizard', baseHP: 6, bonuses: [Abilities.INT, Abilities.WIS] },
	];
	const armors: Prisma.ArmorCreateManyInput[] = [
		//{ type: ArmorTypes.NONE, baseAC: 11, atkPenalty: 0 },
		//{ type: ArmorTypes.LIGHT, baseAC: 11, atkPenalty: 0 },
		{ type: ArmorTypes.HEAVY, baseAC: 12, atkPenalty: -4 },
		//{ type: ArmorTypes.SHIELD, baseAC: 1, atkPenalty: 0 },
	];
	try {
		// const created = await prisma.armor.createMany({ data: armors });
		// console.log(created);
		const updated = await prisma.class.update({
			where: {
				name: 'Monk',
			},
			data: {
				armors: {
					createMany: {
						data: [
							{ armorID: 5 },
							{ armorID: 12 },
							{ armorID: 13 },
							{ armorID: 4 },
						],
					},
				},
			},
		});
		console.log(updated);

		// const classes = await prisma.class.findUnique({
		// 	where: { name: 'Sorcerer' },
		// 	include: {
		// 		armors: {
		// 			include: {
		// 				armor: true,
		// 			},
		// 		},
		// 	},
		// });
		// console.log(classes?.armors);
	} catch (e) {
		console.error(e);
	}
}

main();
