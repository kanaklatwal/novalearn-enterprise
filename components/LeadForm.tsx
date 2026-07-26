"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { Briefcase, CheckCircle2, Loader2, Mail, Phone, User } from "lucide-react";
import type { LeadApiResponse, LeadFormData } from "@/types";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "loading" | "success" | "error";

const INITIAL_FORM: LeadFormData = {
  name: "",
  email: "",
  company: "",
  phone: "",
};

export function LeadForm() {
  const [form, setForm] = useState<LeadFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof LeadFormData, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function updateField(field: keyof LeadFormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    setErrors({});

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data: LeadApiResponse = await response.json();

      if (!response.ok || !data.success) {
        setErrors(data.errors ?? {});
        setErrorMessage(data.message ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm(INITIAL_FORM);
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-10 text-center"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
        </span>
        <div>
          <p className="font-display text-xl font-semibold text-ink-900">
            Request received
          </p>
          <p className="mt-1.5 text-sm text-slate-600">
            A consultant will reach out within one business day.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-sm font-semibold text-brand-600 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
        >
          Submit another request
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <FormField
        id="name"
        label="Full name"
        icon={User}
        value={form.name}
        onChange={(value) => updateField("name", value)}
        error={errors.name}
        autoComplete="name"
        placeholder="Jordan Lee"
      />

      <FormField
        id="email"
        label="Work email"
        type="email"
        icon={Mail}
        value={form.email}
        onChange={(value) => updateField("email", value)}
        error={errors.email}
        autoComplete="email"
        placeholder="jordan@company.com"
      />

      <FormField
        id="company"
        label="Company"
        icon={Briefcase}
        value={form.company}
        onChange={(value) => updateField("company", value)}
        error={errors.company}
        autoComplete="organization"
        placeholder="Company name"
      />

      <FormField
        id="phone"
        label="Phone number"
        type="tel"
        icon={Phone}
        value={form.phone}
        onChange={(value) => updateField("phone", value)}
        error={errors.phone}
        autoComplete="tel"
        placeholder="+1 (555) 000-0000"
      />

      {status === "error" && errorMessage && (
        <p role="alert" className="text-sm font-medium text-red-600">
          {errorMessage}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={status === "loading"}
        className="mt-1 w-full"
      >
        {status === "loading" ? (
          <span className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending request…
          </span>
        ) : (
          "Request a demo"
        )}
      </Button>

      <p className="text-center text-xs text-slate-400">
        By submitting, you agree to be contacted about NovaLearn Enterprise
        programs.
      </p>
    </form>
  );
}

interface FormFieldProps {
  id: keyof LeadFormData;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
  icon: typeof User;
}

function FormField({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
  placeholder,
  icon: Icon,
}: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-ink-900">
        {label}
      </label>
      <div className="relative">
        <Icon
          className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
          aria-hidden="true"
        />
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          autoComplete={autoComplete}
          placeholder={placeholder}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`w-full rounded-xl border bg-white py-3 pl-10 pr-4 text-sm text-ink-900 placeholder:text-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
            error
              ? "border-red-300 focus-visible:outline-red-500"
              : "border-slate-200 focus-visible:outline-brand-600"
          }`}
        />
      </div>
      {error && (
        <p id={`${id}-error`} className="text-xs font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
