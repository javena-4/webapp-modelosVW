export const INCOME_RANGES = [
  {
    value: "hasta_1000000",
    label: "Hasta $1.000.000",
  },
  {
    value: "1000000_2000000",
    label: "De $1.000.000 a $2.000.000",
  },
  {
    value: "2000000_3500000",
    label: "De $2.000.000 a $3.500.000",
  },
  {
    value: "mas_3500000",
    label: "Más de $3.500.000",
  },
] as const;

export type IncomeRangeValue = (typeof INCOME_RANGES)[number]["value"];

export const INCOME_RANGE_VALUES = INCOME_RANGES.map((r) => r.value) as [
  IncomeRangeValue,
  ...IncomeRangeValue[],
];

export function getIncomeRangeLabel(value: string): string {
  return INCOME_RANGES.find((r) => r.value === value)?.label ?? value;
}

/** Une código de área + número; vacío si no hay datos. */
export function formatPhone(
  areaCode: string | undefined,
  number: string | undefined,
): string | null {
  const area = (areaCode ?? "").replace(/\D/g, "");
  const num = (number ?? "").replace(/\D/g, "");
  if (!area && !num) return null;
  return `${area} ${num}`.trim();
}
