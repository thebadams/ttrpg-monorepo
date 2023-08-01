import fastify from 'fastify';
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify';
import { appRouter } from './router';
const server = fastify({
	maxParamLength: 5000,
	logger: true,
});

server.register(fastifyTRPCPlugin, {
	prefix: '/trpc',
	trpcOptions: { router: appRouter },
});

export async function main() {
	try {
		await server.listen({ port: 8000 });
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
}
