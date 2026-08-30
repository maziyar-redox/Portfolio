import type { Express } from "express";

import express from "express";
import ViteExpress from "vite-express";

import dotenv from "@dotenvx/dotenvx";

dotenv.config();

const app: Express = express();

const server = app.listen(8000, "localhost");

ViteExpress.bind(app, server);