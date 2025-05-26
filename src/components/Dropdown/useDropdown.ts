'use client';

import { useContext } from 'react';

import { DropdownContext } from './Dropdown';

const useDropdown = () => {
  const dropdownContext = useContext(DropdownContext);

  if (!dropdownContext) throw Error('Dropdown 안에서 호출해주세요.');

  const { open } = dropdownContext;

  return {
    open,
  };
};

export default useDropdown;
