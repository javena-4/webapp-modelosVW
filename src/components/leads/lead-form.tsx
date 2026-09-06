"use client";

import { FormEvent, useState } from "react";
import type { Car } from "@/data/cars";
import { INCOME_RANGES } from "@/data/income-ranges";

type Props = {
  cars: Car[];
  selectedSlug: string;
  onSelectedSlugChange?: (slug: string) => void;
  /** Si true, el select de auto queda fijo (ficha de modelo). */
  lockCar?: boolean;
  title?: string;
  description?: string;
};

export function LeadForm({
  cars,
  selectedSlug,
  onSelectedSlugChange,
  lockCar = false,
  title = "Contacto",
  description = "Dejanos tus datos, el modelo de interés y tu rango de ingresos. El teléfono es opcional. Un asesor te contacta con disponibilidad y planes.",
}: Props) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneAreaCode, setPhoneAreaCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [incomeRange, setIncomeRange] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  const selectedCar = cars.find((c) => c.slug === selectedSlug);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          phoneAreaCode,
          phoneNumber,
          incomeRange,
          carSlug: selectedSlug,
        }),
      });
      const data = (await res.json()) as { error?: string };

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "No se pudo enviar. Probá de nuevo.");
        return;
      }

      setStatus("ok");
      setMessage("¡Listo! Recibimos tu consulta. Te vamos a contactar.");
      setFullName("");
      setEmail("");
      setPhoneAreaCode("");
      setPhoneNumber("");
      setIncomeRange("");
    } catch {
      setStatus("error");
      setMessage("Error de red. Revisá tu conexión e intentá otra vez.");
    }
  }

  return (
    <section
      id="contacto"
      className="scroll-mt-24 rounded-[14px] border border-[var(--border)] bg-[var(--surface)]"
    >
      <div className="grid gap-0 lg:grid-cols-2">
        <div className="space-y-3 border-b border-[var(--border)] p-8 lg:border-b-0 lg:border-r">
          <h2 className="text-2xl font-semibold text-[var(--text-primary)] md:text-3xl">
            {title}
          </h2>
          <p className="max-w-md text-[var(--text-secondary)]">{description}</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4 p-8">
          <label className="block space-y-1 text-sm text-[var(--text-secondary)]">
            Nombre completo
            <input
              required
              name="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="h-[48px] w-full rounded-[10px] border border-[var(--border-strong)] px-3 text-[var(--text-primary)] outline-none focus:border-[var(--accent-blue)]"
              placeholder="Juan Pérez"
              autoComplete="name"
            />
          </label>

          <label className="block space-y-1 text-sm text-[var(--text-secondary)]">
            Email
            <input
              required
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-[48px] w-full rounded-[10px] border border-[var(--border-strong)] px-3 text-[var(--text-primary)] outline-none focus:border-[var(--accent-blue)]"
              placeholder="tu@email.com"
              autoComplete="email"
            />
          </label>

          <fieldset className="space-y-1">
            <legend className="text-sm text-[var(--text-secondary)]">
              Teléfono <span className="text-[var(--text-secondary)]/80">(opcional)</span>
            </legend>
            <div className="grid grid-cols-[100px_1fr] gap-2">
              <label className="block text-sm text-[var(--text-secondary)]">
                <span className="sr-only">Código de área</span>
                <input
                  name="phoneAreaCode"
                  inputMode="numeric"
                  value={phoneAreaCode}
                  onChange={(e) => setPhoneAreaCode(e.target.value)}
                  className="h-[48px] w-full rounded-[10px] border border-[var(--border-strong)] px-3 text-[var(--text-primary)] outline-none focus:border-[var(--accent-blue)]"
                  placeholder="11"
                  autoComplete="tel-area-code"
                  aria-label="Código de área"
                />
              </label>
              <label className="block text-sm text-[var(--text-secondary)]">
                <span className="sr-only">Número de teléfono</span>
                <input
                  name="phoneNumber"
                  inputMode="numeric"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="h-[48px] w-full rounded-[10px] border border-[var(--border-strong)] px-3 text-[var(--text-primary)] outline-none focus:border-[var(--accent-blue)]"
                  placeholder="4567-8901"
                  autoComplete="tel-national"
                  aria-label="Número de teléfono"
                />
              </label>
            </div>
          </fieldset>

          <label className="block space-y-1 text-sm text-[var(--text-secondary)]">
            Ingresos mensuales
            <select
              required
              name="incomeRange"
              value={incomeRange}
              onChange={(e) => setIncomeRange(e.target.value)}
              className="h-[48px] w-full rounded-[10px] border border-[var(--border-strong)] px-3 text-[var(--text-primary)] outline-none focus:border-[var(--accent-blue)]"
            >
              <option value="" disabled>
                Seleccioná un rango
              </option>
              {INCOME_RANGES.map((range) => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>
          </label>

          <label className="block space-y-1 text-sm text-[var(--text-secondary)]">
            Auto seleccionado
            {lockCar ? (
              <>
                <input type="hidden" name="carSlug" value={selectedSlug} />
                <div className="flex h-[48px] w-full items-center rounded-[10px] border border-[var(--border)] bg-[var(--hover-surface)] px-3 font-medium text-[var(--text-primary)]">
                  {selectedCar?.name ?? selectedSlug}
                </div>
              </>
            ) : (
              <select
                required
                name="carSlug"
                value={selectedSlug}
                onChange={(e) => onSelectedSlugChange?.(e.target.value)}
                className="h-[48px] w-full rounded-[10px] border border-[var(--border-strong)] px-3 text-[var(--text-primary)] outline-none focus:border-[var(--accent-blue)]"
              >
                {cars.map((car) => (
                  <option key={car.slug} value={car.slug}>
                    {car.name}
                  </option>
                ))}
              </select>
            )}
          </label>

          <button
            type="submit"
            disabled={status === "loading"}
            className="h-[48px] w-full rounded-[10px] bg-[var(--accent-blue)] px-4 font-medium text-white transition hover:brightness-110 disabled:opacity-60"
          >
            {status === "loading" ? "Enviando..." : "Quiero que me contacten"}
          </button>

          {message ? (
            <p
              className={`text-sm ${
                status === "ok" ? "text-emerald-700" : "text-red-700"
              }`}
              role="status"
            >
              {message}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
