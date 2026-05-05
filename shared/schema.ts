import { pgTable, serial, text, timestamp, jsonb } from "drizzle-orm/pg-core";
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

const optionalText = (max: number) =>
  z.preprocess(
    (v) => (v === "" || v === undefined ? null : v),
    z.string().max(max).nullable().optional(),
  );

export const insertLeadSchema = z.object({
  formType: z.string().min(1).max(50),
  sourcePage: optionalText(500),
  name: z.string().min(1).max(200),
  phone: optionalText(50),
  email: optionalText(200),
  service: optionalText(100),
  message: optionalText(5000),
  preferredDate: optionalText(50),
  notes: optionalText(5000),
  metadata: z.record(z.any()).nullable().optional(),
});

export type InsertLead = z.infer<typeof insertLeadSchema>;
export type Lead = typeof leads.$inferSelect;
