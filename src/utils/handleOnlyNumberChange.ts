import type { ChangeEvent } from 'react';

import filterOnlyNumbers from './filterOnlyNumbers';

export default function handleOnlyNumberChange(event: ChangeEvent<HTMLInputElement>) {
  event.target.value = filterOnlyNumbers(event.target.value);
}
