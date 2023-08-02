import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import { prisma } from './prisma';

export const t = initTRPC.create();
const publicProcedure = t.procedure;
export const appRouter = t.router({
	hello: publicProcedure.query(() => 'Hello World'),
	allClasses: publicProcedure.query(async () => {
		try {
			const classes = await prisma.class.findMany({});
			return classes;
		} catch (error) {
			console.error(error);
			return [];
		}
	}),
});

export type AppRouter = typeof appRouter;
