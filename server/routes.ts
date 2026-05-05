import type { Express } from "express";
import { storage } from "./storage";
import { insertLeadSchema } from "../shared/schema";

export function registerRoutes(app: Express) {
  app.post("/api/leads", async (req, res) => {
    const parsed = insertLeadSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        status: "error",
        message: "Invalid lead data",
        issues: parsed.error.flatten(),
      });
    }
    try {
      const lead = await storage.createLead(parsed.data);
      res.json({ status: "success", id: lead.id });
    } catch (err) {
      console.error("Failed to create lead:", err);
      res.status(500).json({ status: "error", message: "Failed to save lead" });
    }
  });

  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok" });
  });
}
