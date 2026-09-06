"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("javena@granville.com.ar");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) {
        setError(data.error ?? "No se pudo ingresar");
        setLoading(false);
        return;
      }
      router.push("/admin/leads");
      router.refresh();
    } catch {
      setError("Error de red");
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md items-center px-4 py-16">
      <form
        onSubmit={onSubmit}
        className="w-full space-y-4 rounded-[14px] border border-[var(--border)] bg-white p-8"
      >
        <div>
          <h1 className="text-3xl font-semibold text-[var(--text-primary)]">
            Admin
          </h1>
          <p className="mt-1 text-sm text-[var(--text-secondary)]">
            Acceso al panel de leads del formulario de contacto.
          </p>
        </div>

        <label className="block space-y-1 text-sm text-[var(--text-secondary)]">
          Email
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 w-full rounded-[10px] border border-[var(--border-strong)] px-3 outline-none focus:border-[var(--accent-blue)]"
            autoComplete="username"
          />
        </label>

        <label className="block space-y-1 text-sm text-[var(--text-secondary)]">
          Contraseña
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-12 w-full rounded-[10px] border border-[var(--border-strong)] px-3 outline-none focus:border-[var(--accent-blue)]"
            autoComplete="current-password"
          />
        </label>

        {error ? (
          <p className="text-sm text-red-700" role="alert">
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={loading}
          className="h-12 w-full rounded-[10px] bg-[var(--accent-blue)] px-4 font-medium text-white disabled:opacity-60"
        >
          {loading ? "Ingresando..." : "Ingresar"}
        </button>
      </form>
    </div>
  );
}
