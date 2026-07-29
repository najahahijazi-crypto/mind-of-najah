import { NextResponse } from "next/server";

const requiredFields = ["name", "email", "organization", "role", "service", "message"] as const;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    for (const field of requiredFields) {
      if (typeof body[field] !== "string" || !body[field].trim()) return NextResponse.json({ error: "Please complete every field before sending your inquiry." }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) return NextResponse.json({ error: "Please enter a valid work email address." }, { status: 400 });

    const inquiry = Object.fromEntries(requiredFields.map((field) => [field, body[field].trim()]));
    const endpoint = process.env.CONTACT_ENDPOINT;
    if (!endpoint) {
      if (process.env.NODE_ENV !== "production") return NextResponse.json({ message: "Thank you—your inquiry was received in development mode. Connect CONTACT_ENDPOINT to deliver inquiries in production." });
      return NextResponse.json({ error: "Inquiry delivery is not configured yet. Please try again later." }, { status: 503 });
    }
    const delivery = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(inquiry) });
    if (!delivery.ok) throw new Error("Delivery endpoint rejected the inquiry");
    return NextResponse.json({ message: "Thank you. Your inquiry has been received—we will be in touch soon." });
  } catch (error) {
    console.error("Consultation inquiry error", error);
    return NextResponse.json({ error: "We could not send your inquiry. Please try again shortly." }, { status: 500 });
  }
}
