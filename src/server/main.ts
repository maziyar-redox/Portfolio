import type { Express, Request, Response } from "express";

import express from "express";
import ViteExpress from "vite-express";

import dotenv from "@dotenvx/dotenvx";

import { fileURLToPath } from "url";
import fs from 'fs';
import path from "path";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app: Express = express();

const server = app.listen(8000, "localhost");

app.get("/dl", (req: Request, res: Response) => {
    const filePath = path.join(__dirname, './static/example.md');
    res.setHeader('Content-Type', 'text/markdown');
  
    // Create read stream and pipe to response
    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
    
    // Handle errors
    stream.on('error', (error) => {
        console.error('Stream error:', error);
        res.status(500).send('Error streaming file');
    });
})

ViteExpress.bind(app, server);