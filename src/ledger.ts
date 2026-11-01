/** Add integer-cent amounts without accepting imprecise or unsafe results. */
export function addCents(left: number, right: number): number {
  if (!Number.isSafeInteger(left) || !Number.isSafeInteger(right)) {
    throw new RangeError("Ledger inputs must be safe integer cents");
  }
  const result = left + right;
  if (!Number.isSafeInteger(result)) {
    throw new RangeError("Ledger result must be safe integer cents");
  }
  return result;
}

/** Subtract safe integer-cent amounts through the validated ledger operation. */
export function subtractCents(left: number, right: number): number {
  if (!Number.isSafeInteger(right)) {
    throw new RangeError("Ledger inputs must be safe integer cents");
  }
  return addCents(left, -right);
}
