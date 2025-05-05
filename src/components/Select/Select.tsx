import clsx from 'clsx';
import React from 'react';

import type { Option } from '@/types/common';

import Dropdown from '../Dropdown/Dropdown';
import useDropdown from '../Dropdown/useDropdown';
import { ArrowDown } from '../Icon';

type Props = {
  options: Option[];
  selectedOption?: string;
  placeholder?: string;
  width?: number;
  onSelect?: (value: string) => void;
};

type SelectTriggerProps = {
  placeholder?: string;
  selectedOption?: string;
  width?: number;
};

const SelectTrigger = ({ placeholder, selectedOption, width }: SelectTriggerProps) => {
  const { open } = useDropdown();

  return (
    <div
      className="typo-body1-medium flex h-[54px] min-w-[120px] items-center justify-between gap-1 rounded-lg border border-neutral-300 pl-4 pr-3"
      style={{ width }}
    >
      <span className="text-neutral-800">{selectedOption || placeholder}</span>
      <span
        className={clsx(
          'text-neutral-600 transition-transform duration-100 ease-linear',
          open ? 'rotate-180' : 'rotate-0',
        )}
      >
        <ArrowDown />
      </span>
    </div>
  );
};

const Select = ({ options, placeholder, selectedOption, width, onSelect }: Props) => {
  const selectedLabel = options.find((option) => option.value === selectedOption)?.label;

  const handleSelect = (value: string) => () => {
    onSelect?.(value);
  };

  return (
    <Dropdown closeOnBlur>
      <Dropdown.Trigger>
        <SelectTrigger
          placeholder={placeholder}
          selectedOption={selectedLabel ? selectedLabel : undefined}
          width={width}
        />
      </Dropdown.Trigger>
      <Dropdown.List className="typo-body1-regular absolute left-0 z-[100] max-h-[200px] w-full overflow-y-auto bg-white text-center shadow-[0px_4px_8px_0px_#00000014]">
        {options.map((option) => (
          <Dropdown.Item
            key={option.value}
            className="cursor-pointer p-2.5"
            onClick={handleSelect(option.value)}
          >
            {option.label}
          </Dropdown.Item>
        ))}
      </Dropdown.List>
    </Dropdown>
  );
};

export default Select;
