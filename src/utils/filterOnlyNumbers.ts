export default function filterOnlyNumbers(value: string) {
  return value.replace(/[^0-9]/g, '');
}
