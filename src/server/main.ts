import type { Express } from "express";

import express from "express";
import ViteExpress from "vite-express";

import dotenv from "@dotenvx/dotenvx";

import { logger } from "@/server/utils/loggger";

dotenv.config();

const app: Express = express();

const PORT: number = (process.env.PORT || 8000) as number;

ViteExpress.listen(app, PORT, () => {
    logger.info(`Bootstrapping server on PORT: ${PORT}`);
});