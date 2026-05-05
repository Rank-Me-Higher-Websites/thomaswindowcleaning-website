export type LeadPayload = {
  formType: string;
  name: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
  preferredDate?: string;
  notes?: string;
  metadata?: Record<string, unknown>;
};

export async function logLead(payload: LeadPayload): Promise<void> {
  try {
    await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...payload,
        sourcePage: typeof window !== "undefined" ? window.location.pathname : null,
      }),
    });
  } catch (err) {
    console.warn("Failed to log lead to backend:", err);
  }
}
