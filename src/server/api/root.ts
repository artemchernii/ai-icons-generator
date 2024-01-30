import { createTRPCRouter } from "~/server/api/trpc";
import { exampleRouter } from "~/server/api/routers/example";
import { generateRouter } from "./routers/generate";

export const appRouter = createTRPCRouter({
  example: exampleRouter,
  generate: generateRouter,
});

export type AppRouter = typeof appRouter;
