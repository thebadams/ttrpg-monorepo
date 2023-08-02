import { inferAsyncReturnType } from '@trpc/server';
import { CreateFastifyContextOptions } from '@trpc/server/adapters/fastify';
import { prisma } from './prisma';

export function createContext(opts?: CreateFastifyContextOptions) {
	return { prisma };
}

export type Context = inferAsyncReturnType<typeof createContext>;
