import { describe, expect, it } from "vitest";
import { carDetails } from "@/data/car-details";
import { getSelectableCars } from "@/data/cars";

describe("car details", () => {
  it("tiene ficha básica para cada modelo seleccionable", () => {
    for (const car of getSelectableCars()) {
      const detail = carDetails[car.slug];
      expect(detail, `falta detail para ${car.slug}`).toBeTruthy();
      expect(detail.tagline.length).toBeGreaterThan(5);
      expect(detail.summary.length).toBeGreaterThan(20);
      expect(detail.highlights.length).toBeGreaterThan(0);
      expect(detail.versions.length).toBeGreaterThan(0);
      expect(detail.specs.length).toBeGreaterThan(0);
    }
  });
});
