import { describe, expect, it } from "vitest";
import {
  cars,
  getCarBySlug,
  getSelectableCars,
  getAllCarSlugs,
} from "@/data/cars";

describe("cars catalog", () => {
  it("incluye el lineup esperado de Argentina", () => {
    const names = cars.map((c) => c.name);
    expect(names).toEqual(
      expect.arrayContaining([
        "Tera",
        "Polo",
        "Virtus",
        "Nivus",
        "T-Cross",
        "Taos",
        "Vento",
        "Saveiro",
        "Amarok",
        "Tiguan",
        "Camiones y buses",
      ]),
    );
    expect(cars).toHaveLength(11);
  });

  it("getCarBySlug mezcla detalles del modelo", () => {
    const tera = getCarBySlug("tera");
    expect(tera?.name).toBe("Tera");
    expect(tera?.tagline).toBeTruthy();
    expect(tera?.summary).toBeTruthy();
    expect(tera?.highlights?.length).toBeGreaterThan(0);
  });

  it("getSelectableCars excluye camiones", () => {
    const selectable = getSelectableCars();
    expect(selectable.every((c) => c.selectable)).toBe(true);
    expect(selectable.find((c) => c.slug === "camiones-y-buses")).toBeUndefined();
    expect(selectable.length).toBe(10);
  });

  it("getAllCarSlugs lista todos los slugs", () => {
    expect(getAllCarSlugs()).toContain("amarok");
    expect(getAllCarSlugs()).toHaveLength(11);
  });
});
