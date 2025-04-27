import type { KeyboardEventHandler } from 'react';

const preventSubmitByEnter: KeyboardEventHandler<HTMLFormElement> = (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
  }
};

export default preventSubmitByEnter;
