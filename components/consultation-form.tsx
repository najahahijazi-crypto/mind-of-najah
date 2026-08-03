"use client";

import { FormEvent, useState } from "react";
import { LoaderCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FieldLabel, Input, Select, Textarea } from "@/components/ui/field";

type Status = "idle" | "loading" | "success" | "error";

export function ConsultationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/consultation", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "We could not send your inquiry.");
      form.reset();
      setStatus("success");
      setMessage(result.message || "Thank you. Your inquiry has been received.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "We could not send your inquiry. Please try again.");
    }
  }

  return (
    <form onSubmit={submitForm} className="rounded-3xl bg-warmCream p-6 shadow-soft sm:p-8" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div><FieldLabel htmlFor="name">Name</FieldLabel><Input id="name" name="name" autoComplete="name" required placeholder="Your name" /></div>
        <div><FieldLabel htmlFor="email">Work email</FieldLabel><Input id="email" name="email" type="email" autoComplete="email" required placeholder="you@organization.org" /></div>
      </div>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div><FieldLabel htmlFor="organization">Organization</FieldLabel><Input id="organization" name="organization" required placeholder="School, district, or organization" /></div>
        <div><FieldLabel htmlFor="role">Your role</FieldLabel><Input id="role" name="role" required placeholder="e.g., District leader" /></div>
      </div>
      <div className="mt-5"><FieldLabel htmlFor="service">What can we help with?</FieldLabel><Select id="service" name="service" required defaultValue=""><option value="" disabled>Select a service</option><option>Consulting</option><option>Curriculum Development</option><option>Instructional Design</option><option>Not sure yet</option></Select></div>
      <div className="mt-5"><FieldLabel htmlFor="message">Tell us a little about your project</FieldLabel><Textarea id="message" name="message" required placeholder="What are you hoping to make possible?" /></div>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-5 text-ink/60">We will only use your details to respond to this inquiry.</p>
        <Button type="submit" disabled={status === "loading"}>{status === "loading" ? <><LoaderCircle className="animate-spin" size={17} /> Sending</> : <><Send size={16} /> Send inquiry</>}</Button>
      </div>
      {message && <p className={`mt-5 rounded-xl px-4 py-3 text-sm ${status === "success" ? "bg-sage/35 text-cobalt" : "bg-goldenYellow/20 text-cobalt"}`} role="status">{message}</p>}
    </form>
  );
}
