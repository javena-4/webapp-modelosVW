import { describe, expect, it } from "vitest";
import {
  formatPhone,
  getIncomeRangeLabel,
  INCOME_RANGES,
  INCOME_RANGE_VALUES,
} from "@/data/income-ranges";

describe("income-ranges", () => {
  it("expone 4 rangos de ingresos", () => {
    expect(INCOME_RANGES).toHaveLength(4);
    expect(INCOME_RANGE_VALUES).toContain("mas_3500000");
  });

  it("resuelve label por value", () => {
    expect(getIncomeRangeLabel("hasta_1000000")).toBe("Hasta $1.000.000");
  });

  it("formatPhone une área y número o null", () => {
    expect(formatPhone("", "")).toBeNull();
    expect(formatPhone("11", "45678901")).toBe("11 45678901");
    expect(formatPhone("11-", "4567-8901")).toBe("11 45678901");
  });
});
