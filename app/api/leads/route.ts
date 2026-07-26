import { NextRequest, NextResponse } from "next/server";
import type { LeadApiResponse, LeadFormData } from "@/types";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+]?[\d\s()-]{7,20}$/;

function validate(payload: Partial<LeadFormData>) {
  const errors: LeadApiResponse["errors"] = {};

  if (!payload.name || payload.name.trim().length < 2) {
    errors.name = "Enter your full name.";
  }

  if (!payload.email || !EMAIL_PATTERN.test(payload.email)) {
    errors.email = "Enter a valid work email.";
  }

  if (!payload.company || payload.company.trim().length < 2) {
    errors.company = "Enter your company name.";
  }

  if (!payload.phone || !PHONE_PATTERN.test(payload.phone)) {
    errors.phone = "Enter a valid phone number.";
  }

  return errors;
}

export async function POST(request: NextRequest) {
  let payload: Partial<LeadFormData>;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json<LeadApiResponse>(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  const errors = validate(payload);

  if (Object.keys(errors).length > 0) {
    return NextResponse.json<LeadApiResponse>(
      { success: false, errors, message: "Please fix the highlighted fields." },
      { status: 422 }
    );
  }

  // No database in this assignment — in production this would persist to a
  // CRM (HubSpot/Salesforce) or a database and trigger a notification.
  console.log("New enterprise lead received:", {
    name: payload.name,
    email: payload.email,
    company: payload.company,
    phone: payload.phone,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json<LeadApiResponse>({ success: true }, { status: 200 });
}
