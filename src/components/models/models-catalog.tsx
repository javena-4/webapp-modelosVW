"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { BodyType, Car } from "@/data/cars";
import { bodyTypes, getSelectableCars } from "@/data/cars";
import { LeadForm } from "@/components/leads/lead-form";

type Props = {
  cars: Car[];
};

export function ModelsCatalog({ cars }: Props) {
  const [filter, setFilter] = useState<BodyType | "Todos">("Todos");
  const selectable = getSelectableCars();
  const [selectedSlug, setSelectedSlug] = useState(
    selectable[0]?.slug ?? "tera",
  );

  const filtered = useMemo(() => {
    if (filter === "Todos") return cars;
    return cars.filter((car) => car.bodyType === filter);
  }, [cars, filter]);

  return (
    <div className="space-y-16 pb-20 pt-6 md:pt-10">
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
          <li className="font-semibold text-[var(--text-primary)]">
            Modelos y configurador
          </li>
        </ol>
      </nav>

      <section className="space-y-5">
        <h1 className="text-[28px] font-semibold leading-tight text-[var(--text-primary)] md:text-[38px]">
          <span className="font-medium">{filtered.length}</span>{" "}
          <span className="font-bold">Modelos</span>
        </h1>

        <label className="block w-full max-w-[280px] text-sm text-[var(--text-secondary)]">
          <span className="sr-only">Body type</span>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as BodyType | "Todos")}
            className="filter-select h-[52px] w-full appearance-none rounded-[10px] border border-[var(--border-strong)] bg-white px-4 text-[15px] text-[var(--text-primary)]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%234d5968' d='M1 1l5 5 5-5'/%3E%3C/svg%3E\")",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 16px center",
            }}
          >
            <option value="Todos">Body type</option>
            {bodyTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
      </section>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {filtered.map((car, index) => {
          const cardClassName =
            "group flex min-h-[320px] w-full flex-col overflow-hidden rounded-[14px] border border-[#e1e5e9] bg-white text-left transition duration-[180ms] ease-out hover:-translate-y-1 hover:border-[#b8c1cb] hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]";

          const inner = (
            <>
              <div className="relative h-[230px] w-full bg-[#f3f4f5] md:h-[260px]">
                <Image
                  src={car.image}
                  alt={`Volkswagen ${car.name}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-6"
                  priority={index < 3}
                />
              </div>
              <div className="mt-auto flex items-end justify-between px-6 pb-6 pt-4">
                <h2 className="text-lg font-semibold text-[var(--text-primary)] md:text-[18px]">
                  {car.name}
                </h2>
                {car.selectable ? (
                  <span className="text-sm text-[var(--accent-blue)] opacity-0 transition group-hover:opacity-100">
                    Ver modelo →
                  </span>
                ) : null}
              </div>
            </>
          );

          return (
            <li key={car.slug}>
              {car.selectable ? (
                <Link href={`/modelos/${car.slug}`} className={cardClassName}>
                  {inner}
                </Link>
              ) : (
                <div
                  className={`${cardClassName} cursor-default hover:translate-y-0 hover:border-[#e1e5e9] hover:shadow-none`}
                >
                  {inner}
                </div>
              )}
            </li>
          );
        })}
      </ul>

      <LeadForm
        cars={selectable}
        selectedSlug={selectedSlug}
        onSelectedSlugChange={setSelectedSlug}
      />
    </div>
  );
}
