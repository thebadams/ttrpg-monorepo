import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import { prisma } from './prisma.js';
import { Context } from './context.js';

export const t = initTRPC.context<Context>().create();
const publicProcedure = t.procedure;
export const appRouter = t.router({
	hello: publicProcedure.query(() => 'Hello World'),
	allClasses: publicProcedure.query(async ({ ctx }) => {
		try {
			const classes = await ctx.prisma.class.findMany({
				include: { armors: true },
			});
			return classes;
		} catch (error) {
			console.error(error);
			return [];
		}
	}),
});

export type AppRouter = typeof appRouter;
