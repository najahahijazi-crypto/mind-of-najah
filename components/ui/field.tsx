import * as React from "react";
import { cn } from "@/lib/utils";

export function FieldLabel({ className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return <label className={cn("mb-2 block text-sm font-semibold text-ink", className)} {...props} />;
}

const baseField =
  "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink outline-none transition placeholder:text-ink/45 focus:border-clay focus:ring-2 focus:ring-clay/20";

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(baseField, className)} {...props} />;
}

export function Textarea({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn(baseField, "min-h-32 resize-y", className)} {...props} />;
}

export function Select({ className, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select className={cn(baseField, className)} {...props} />;
}
