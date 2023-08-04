import { PrismaClient, Prisma, Abilities, ArmorTypes } from '@prisma/client';
import { readFile } from 'node:fs/promises';

const prisma = new PrismaClient();

async function seedClasses() {
	const classesData = await readFile(`${__dirname}/classes.json`, {
		encoding: 'utf-8',
	});
	const json = JSON.parse(classesData);
	const created = await prisma.class.createMany({ data: json });
	console.log(created);
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
seedClasses().catch((e) => console.error(e));
