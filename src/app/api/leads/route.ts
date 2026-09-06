import { NextResponse } from "next/server";
import { z } from "zod";
import { getCarBySlug } from "@/data/cars";
import { prisma } from "@/lib/prisma";

const leadSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Ingresá tu nombre completo")
    .max(120),
  email: z.string().trim().email("Email inválido").max(160),
  carSlug: z.string().trim().min(1),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = leadSchema.safeParse(body);

    if (!parsed.success) {
      const first = parsed.error.issues[0]?.message ?? "Datos inválidos";
      return NextResponse.json({ error: first }, { status: 400 });
    }

    const car = getCarBySlug(parsed.data.carSlug);
    if (!car) {
      return NextResponse.json(
        { error: "El modelo seleccionado no es válido" },
        { status: 400 },
      );
    }

    const lead = await prisma.lead.create({
      data: {
        fullName: parsed.data.fullName,
        email: parsed.data.email.toLowerCase(),
        carSlug: car.slug,
        carName: car.name,
      },
    });

    return NextResponse.json({ id: lead.id }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "No se pudo guardar el lead" },
      { status: 500 },
    );
  }
}
