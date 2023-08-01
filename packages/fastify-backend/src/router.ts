import { initTRPC } from '@trpc/server';
import { z } from 'zod';

export const t = initTRPC.create();
const publicProcedure = t.procedure;
export const appRouter = t.router({
	hello: publicProcedure.query(() => 'Hello World'),
});
