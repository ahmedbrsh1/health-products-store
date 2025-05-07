export function isEmpty(s: string | undefined) {
  return !s || s.trim().length === 0;
}

export function belowMin(s: string, min: number) {
  return s.trim().length < min;
}
