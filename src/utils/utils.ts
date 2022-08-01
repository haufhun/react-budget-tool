import { formatValue } from "react-currency-input-field";

export function debounceAsync(func, delayMs: number) {
  let timer: NodeJS.Timeout | null = null;

  return (...args) => {
    if (timer) clearTimeout(timer);

    return new Promise((resolve) => {
      timer = setTimeout(() => resolve(func(...args)), delayMs);
    });
  };
}

export const currency = (value: number) =>
  formatValue({
    value: value.toString(),
    groupSeparator: ",",
    decimalScale: 2,
    decimalSeparator: ".",
    prefix: "$",
  });
