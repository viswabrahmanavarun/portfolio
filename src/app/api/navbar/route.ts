import { NextResponse } from "next/server";

export async function GET() {
  // placeholder data; can be sourced from DB or CMS later
  const data = {
    logo: "Varun's Portfolio",
    items: [
      { label: "Home", id: "home" },
      { label: "Skills", id: "skills" },
      { label: "Projects", id: "projects" },
      { label: "Certifications", id: "certifications" },
      { label: "Contact", id: "contact" },
    ],
    mobileHint: "Scroll ↓",
  };

  return NextResponse.json(data);
}
