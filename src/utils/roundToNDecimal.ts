export default function roundToNDecimal(value: number, n: number) {
  const factor = Math.pow(10, n);

  return Math.round(value * factor) / factor;
}
