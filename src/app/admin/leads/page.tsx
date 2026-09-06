import { redirect } from "next/navigation";
import { LogoutButton } from "@/components/logout-button";
import { requireAdminSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminLeadsPage() {
  const session = await requireAdminSession();
  if (!session) {
    redirect("/admin/login");
  }

  const leads = await prisma.lead.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-[family-name:var(--font-display)] text-3xl text-[var(--ink)]">
            Leads de contacto
          </h1>
          <p className="mt-1 text-sm text-[var(--ink-muted)]">
            Sesión: {session.email} · {leads.length} registros
          </p>
        </div>
        <LogoutButton />
      </div>

      <div className="overflow-x-auto rounded-xl border border-black/10 bg-white">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-black/10 bg-[var(--paper)] text-[var(--ink-muted)]">
            <tr>
              <th className="px-4 py-3 font-medium">Fecha</th>
              <th className="px-4 py-3 font-medium">Nombre</th>
              <th className="px-4 py-3 font-medium">Email</th>
              <th className="px-4 py-3 font-medium">Auto</th>
            </tr>
          </thead>
          <tbody>
            {leads.length === 0 ? (
              <tr>
                <td
                  colSpan={4}
                  className="px-4 py-10 text-center text-[var(--ink-muted)]"
                >
                  Todavía no hay leads. Probá el formulario público.
                </td>
              </tr>
            ) : (
              leads.map((lead) => (
                <tr key={lead.id} className="border-b border-black/5 last:border-0">
                  <td className="whitespace-nowrap px-4 py-3 text-[var(--ink-muted)]">
                    {new Intl.DateTimeFormat("es-AR", {
                      dateStyle: "short",
                      timeStyle: "short",
                    }).format(lead.createdAt)}
                  </td>
                  <td className="px-4 py-3 font-medium text-[var(--ink)]">
                    {lead.fullName}
                  </td>
                  <td className="px-4 py-3">
                    <a
                      className="text-[var(--vw-blue)] hover:underline"
                      href={`mailto:${lead.email}`}
                    >
                      {lead.email}
                    </a>
                  </td>
                  <td className="px-4 py-3">{lead.carName}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
