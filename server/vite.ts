import type { Express } from "express";
import type { Server } from "http";
import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function setupVite(app: Express, httpServer: Server) {
  const { createServer: createViteServer } = await import("vite");
  const vite = await createViteServer({
    server: {
      middlewareMode: true,
      hmr: { server: httpServer },
      allowedHosts: true as const,
    },
    appType: "spa",
    root: path.resolve(__dirname, ".."),
  });
  app.use(vite.middlewares);
  return vite;
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "..", "..", "dist");
  if (!fs.existsSync(distPath)) {
    throw new Error(`Build directory not found: ${distPath}. Run 'npm run build' first.`);
  }
  app.use(express.static(distPath));
  app.use((_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
