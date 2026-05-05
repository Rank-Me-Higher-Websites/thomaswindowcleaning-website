import { pgTable, serial, text, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  formType: text("form_type").notNull(),
  sourcePage: text("source_page"),
  name: text("name").notNull(),
  phone: text("phone"),
  email: text("email"),
  service: text("service"),
  message: text("message"),
  preferredDate: text("preferred_date"),
  notes: text("notes"),
  metadata: jsonb("metadata"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertLeadSchema = createInsertSchema(leads, {
  name: z.string().min(1).max(200),
  phone: z.string().max(50).optional().nullable(),
  email: z.string().email().max(200).optional().nullable(),
  service: z.string().max(100).optional().nullable(),
  message: z.string().max(5000).optional().nullable(),
  preferredDate: z.string().max(50).optional().nullable(),
  notes: z.string().max(5000).optional().nullable(),
  sourcePage: z.string().max(500).optional().nullable(),
  formType: z.string().min(1).max(50),
}).omit({ id: true, createdAt: true });

export type InsertLead = z.infer<typeof insertLeadSchema>;
export type Lead = typeof leads.$inferSelect;
