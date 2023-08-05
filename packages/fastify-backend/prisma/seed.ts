import { PrismaClient, Prisma, Abilities, ArmorTypes } from '@prisma/client';
import { readFile } from 'node:fs/promises';
type Armor = {
	type: ArmorTypes;
	baseAC: number;
	atkPenalty: number;
};
type Class = {
	name: string;
	baseHP: number;
	bonuses: Abilities[];
	armors: [Armor, Armor, Armor, Armor];
};
const prisma = new PrismaClient();

//create a type that is a string array

async function seedClasses(): Promise<any> {
	const classesData = await readFile(`${__dirname}/classes.json`, {
		encoding: 'utf-8',
	});
	const json: Class[] = JSON.parse(classesData);
	const createClassesData = json.map((j) => {
		return { name: j.name, baseHP: j.baseHP, bonuses: j.bonuses };
	});
	const created = await prisma.class.createMany({ data: createClassesData });
	console.log(created);
	return json;
}

async function seedArmors() {
	const armorsData = await readFile(`${__dirname}/classes.json`, {
		encoding: 'utf-8',
	});
	const json: Class[] = JSON.parse(armorsData);
	const createArmorsData = json.map((j) => {
		return j.armors.map((armor) => {
			return {
				where: {
					type_baseAC_atkPenalty: {
						type: armor.type,
						baseAC: armor.baseAC,
						atkPenalty: armor.atkPenalty,
					},
					create: {
						type: armor.type,
						baseAC: armor.baseAC,
						atkPenalty: armor.baseAC,
					},
				},
			};
		});
	});
	json.forEach(async (j) => {
		const updated = await prisma.class.update({
			where: { name: j.name },
			data: {
				armors: {
					connectOrCreate: j.armors.map((armor) => {
						return {
							where: { type_baseAC_atkPenalty: armor },
							create: armor,
						};
					}),
				},
			},
		});
		console.log(updated);
	});
}

async function main() {
	const armors: Prisma.ArmorCreateManyInput[] = [
		{ type: ArmorTypes.NONE, baseAC: 10, atkPenalty: 0 },
		{ type: ArmorTypes.LIGHT, baseAC: 10, atkPenalty: 0 },
		{ type: ArmorTypes.HEAVY, baseAC: 11, atkPenalty: -2 },
		{ type: ArmorTypes.SHIELD, baseAC: 1, atkPenalty: -2 },
	];
	try {
		const allClasses = await prisma.class.findMany({
			select: { armors: true, name: true },
		});
		//console.log(allClasses);
		allClasses.forEach((class_) => {
			console.log(class_.name, class_.armors);
		});
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

//main();

//seedClasses().catch((e) => console.error(e));
seedArmors().catch((e) => console.error(e));
