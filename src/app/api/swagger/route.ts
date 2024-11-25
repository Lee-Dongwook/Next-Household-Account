import { NextResponse } from "next/server";
import { createSwaggerSpec } from "next-swagger-doc";
import swaggerDefinition from "@/swagger";

export async function GET() {
  const spec = createSwaggerSpec({ definition: swaggerDefinition });
  return NextResponse.json(spec);
}
