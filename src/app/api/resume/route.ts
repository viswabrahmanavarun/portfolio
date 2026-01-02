import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.resolve(
    process.cwd(),
    "public",
    "files",
    "resume.pdf" // ✅ CORRECT FILE NAME
  );

  if (!fs.existsSync(filePath)) {
    return new NextResponse(
      JSON.stringify({ error: "Resume file not found" }),
      { status: 404 }
    );
  }

  const fileBuffer = fs.readFileSync(filePath);

  return new NextResponse(fileBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition":
        'attachment; filename="Varun_Viswabrahmana_Resume.pdf"',
    },
  });
}
