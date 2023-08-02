import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from 'fastify-backend';
export const trpc = createTRPCReact<AppRouter>();
