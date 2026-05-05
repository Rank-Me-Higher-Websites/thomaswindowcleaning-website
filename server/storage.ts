import { db } from "./db";
import { leads, type InsertLead, type Lead } from "../shared/schema";
import { desc } from "drizzle-orm";

export interface IStorage {
  createLead(lead: InsertLead): Promise<Lead>;
  getLeads(limit?: number): Promise<Lead[]>;
}

export class DbStorage implements IStorage {
  async createLead(lead: InsertLead): Promise<Lead> {
    const [row] = await db.insert(leads).values(lead).returning();
    return row;
  }

  async getLeads(limit = 500): Promise<Lead[]> {
    return db.select().from(leads).orderBy(desc(leads.createdAt)).limit(limit);
  }
}

export const storage: IStorage = new DbStorage();
