import { NextResponse } from "next/server";
import { z } from "zod";
import { getCarBySlug } from "@/data/cars";
import {
  formatPhone,
  INCOME_RANGE_VALUES,
} from "@/data/income-ranges";
import { prisma } from "@/lib/prisma";

const leadSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(2, "Ingresá tu nombre completo")
      .max(120),
    email: z.string().trim().email("Email inválido").max(160),
    carSlug: z.string().trim().min(1),
    phoneAreaCode: z.string().trim().optional().default(""),
    phoneNumber: z.string().trim().optional().default(""),
    incomeRange: z.enum(INCOME_RANGE_VALUES, {
      message: "Seleccioná tu rango de ingresos",
    }),
  })
  .superRefine((data, ctx) => {
    const areaDigits = data.phoneAreaCode.replace(/\D/g, "");
    const numberDigits = data.phoneNumber.replace(/\D/g, "");
    const hasArea = areaDigits.length > 0;
    const hasNumber = numberDigits.length > 0;

    if (hasArea !== hasNumber) {
      ctx.addIssue({
        code: "custom",
        message: "Completá código de área y teléfono, o dejá ambos vacíos",
        path: hasArea ? ["phoneNumber"] : ["phoneAreaCode"],
      });
      return;
    }

    if (hasArea && hasNumber) {
      if (areaDigits.length < 2 || areaDigits.length > 4) {
        ctx.addIssue({
          code: "custom",
          message: "Código de área inválido",
          path: ["phoneAreaCode"],
        });
      }
      if (numberDigits.length < 6 || numberDigits.length > 10) {
        ctx.addIssue({
          code: "custom",
          message: "Teléfono inválido",
          path: ["phoneNumber"],
        });
      }
    }
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

    const phone = formatPhone(
      parsed.data.phoneAreaCode,
      parsed.data.phoneNumber,
    );

    const lead = await prisma.lead.create({
      data: {
        fullName: parsed.data.fullName,
        email: parsed.data.email.toLowerCase(),
        phone,
        incomeRange: parsed.data.incomeRange,
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
