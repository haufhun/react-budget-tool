export function debounceAsync(func, delayMs: number) {
  let timer: NodeJS.Timeout | null = null;

  return (...args) => {
    if (timer) clearTimeout(timer);

    return new Promise((resolve) => {
      timer = setTimeout(() => resolve(func(...args)), delayMs);
    });
  };
}
