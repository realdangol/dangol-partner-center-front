export type Color =
  | `brand-${100 | 200 | 300 | 400 | 500 | 600 | 700}`
  | `neutral-${100 | 200 | 300 | 400 | 500 | 600 | 700 | 800}`
  | `error-${100 | 200 | 300 | 400 | 500 | 600}`
  | `success-${100 | 200 | 300 | 400 | 500 | 600}`;

export type Option = {
  label: string;
  value: string;
};
