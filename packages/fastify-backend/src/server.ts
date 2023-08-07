import Fastify from 'fastify';
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify';
import { appRouter } from './router.js';
import cors from '@fastify/cors';
import { createContext } from './context.js';

const HOST = 'RENDER' in process.env ? '0.0.0.0' : 'localhost';
let PORT: number;
if (process.env.PORT) {
	PORT = parseInt(process.env.PORT);
} else {
	PORT = 8000;
}
const server = Fastify({
	maxParamLength: 5000,
	logger: true,
});

server.register(cors, {});

server.register(fastifyTRPCPlugin, {
	prefix: '/trpc',
	trpcOptions: { router: appRouter, createContext },
});

export async function main() {
	try {
		await server.listen({ host: HOST, port: PORT });
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
}
