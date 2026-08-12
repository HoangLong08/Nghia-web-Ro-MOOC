export type SearchParams = Record<string, string | string[] | undefined>;

/** Lấy giá trị đầu tiên của một query param có thể lặp lại. */
export function first(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}
