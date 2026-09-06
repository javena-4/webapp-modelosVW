import { NextResponse } from "next/server";
import { z } from "zod";
import {
  createAdminSession,
  destroyAdminSession,
  validateAdminCredentials,
} from "@/lib/auth";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = loginSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Email o contraseña inválidos" },
        { status: 400 },
      );
    }

    const ok = validateAdminCredentials(
      parsed.data.email,
      parsed.data.password,
    );
    if (!ok) {
      return NextResponse.json(
        { error: "Credenciales incorrectas" },
        { status: 401 },
      );
    }

    await createAdminSession(parsed.data.email.trim().toLowerCase());
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "No se pudo iniciar sesión" },
      { status: 500 },
    );
  }
}

export async function DELETE() {
  await destroyAdminSession();
  return NextResponse.json({ ok: true });
}
