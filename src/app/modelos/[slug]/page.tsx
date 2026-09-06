import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageContainer } from "@/components/layout/site-chrome";
import { LeadForm } from "@/components/leads/lead-form";
import {
  getAllCarSlugs,
  getCarBySlug,
  getSelectableCars,
} from "@/data/cars";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllCarSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const car = getCarBySlug(slug);
  if (!car) return { title: "Modelo no encontrado" };
  return {
    title: `${car.name} | Volkswagen Argentina`,
    description: car.summary ?? `Conocé el Volkswagen ${car.name}`,
  };
}

export default async function ModeloPage({ params }: PageProps) {
  const { slug } = await params;
  const car = getCarBySlug(slug);
  if (!car) notFound();

  const selectable = getSelectableCars();

  return (
    <PageContainer>
      <div className="space-y-12 pb-20 pt-6 md:pt-10">
        <nav
          aria-label="Breadcrumb"
          className="text-[13px] text-[var(--text-secondary)]"
        >
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="underline-offset-2 hover:underline">
                Home
              </Link>
            </li>
            <li aria-hidden>›</li>
            <li>
              <Link href="/" className="underline-offset-2 hover:underline">
                Modelos
              </Link>
            </li>
            <li aria-hidden>›</li>
            <li className="font-semibold text-[var(--text-primary)]">
              {car.name}
            </li>
          </ol>
        </nav>

        <section className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6">
            <div>
              <p className="text-sm text-[var(--text-secondary)]">
                {car.bodyType}
              </p>
              <h1 className="mt-1 text-[32px] font-bold tracking-tight text-[var(--text-primary)] md:text-[40px]">
                {car.name}
              </h1>
              {car.tagline ? (
                <p className="mt-2 text-lg text-[var(--text-secondary)]">
                  {car.tagline}
                </p>
              ) : null}
            </div>

            {car.summary ? (
              <p className="max-w-xl text-[15px] leading-relaxed text-[var(--text-secondary)]">
                {car.summary}
              </p>
            ) : null}

            {car.highlights && car.highlights.length > 0 ? (
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--text-secondary)]">
                  Destacados
                </h2>
                <ul className="mt-3 space-y-2">
                  {car.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-[15px] text-[var(--text-primary)]"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-blue)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {car.selectable ? (
              <a
                href="#contacto"
                className="inline-flex h-12 items-center rounded-[10px] bg-[var(--accent-blue)] px-6 font-medium text-white transition hover:brightness-110"
              >
                Solicitar cotización
              </a>
            ) : (
              <p className="text-sm text-[var(--text-secondary)]">
                Para esta línea comercial, consultá con un asesor especializado.
              </p>
            )}
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] border border-[#e1e5e9] bg-[#f3f4f5]">
            <Image
              src={car.image}
              alt={`Volkswagen ${car.name}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-8"
            />
          </div>
        </section>

        {car.specs && car.specs.length > 0 ? (
          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)]">
              Datos básicos
            </h2>
            <dl className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {car.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="rounded-[12px] border border-[var(--border)] bg-white px-4 py-3"
                >
                  <dt className="text-xs text-[var(--text-secondary)]">
                    {spec.label}
                  </dt>
                  <dd className="mt-1 font-medium text-[var(--text-primary)]">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        ) : null}

        {car.versions && car.versions.length > 0 ? (
          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)]">
              Versiones
            </h2>
            <ul className="mt-4 grid gap-3 md:grid-cols-2">
              {car.versions.map((version) => (
                <li
                  key={version.name}
                  className="rounded-[12px] border border-[var(--border)] bg-white p-5"
                >
                  <h3 className="font-semibold text-[var(--text-primary)]">
                    {version.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {version.notes}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {car.selectable ? (
          <LeadForm
            cars={selectable}
            selectedSlug={car.slug}
            lockCar
            title={`Cotizá tu ${car.name}`}
            description={`Completá tus datos y un asesor te contacta con disponibilidad, versiones y planes para el ${car.name}.`}
          />
        ) : null}

        <p className="text-sm text-[var(--text-secondary)]">
          <Link href="/" className="text-[var(--accent-blue)] hover:underline">
            ← Volver a todos los modelos
          </Link>
        </p>
      </div>
    </PageContainer>
  );
}
