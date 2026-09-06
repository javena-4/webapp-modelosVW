"use client";

import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  async function logout() {
    await fetch("/api/admin/login", { method: "DELETE" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={logout}
      className="rounded-md border border-black/15 px-4 py-2 text-sm text-[var(--ink)] hover:bg-black/5"
    >
      Cerrar sesión
    </button>
  );
}
