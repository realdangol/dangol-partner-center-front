import React from 'react';

import { Select } from '@/components';

type Props = {
  selectedTime?: string;
  onSelect?: (value: string) => void;
  width?: number;
};

const TimeSelect = ({ selectedTime, onSelect, width }: Props) => {
  const timeOptions = Array.from({ length: 24 }, (_, hour) => {
    const timeString = `${hour.toString().padStart(2, '0')}:00`;
    return {
      label: timeString,
      value: timeString,
    };
  });

  return (
    <Select
      options={timeOptions}
      selectedOption={selectedTime}
      placeholder="시간 선택"
      width={width}
      onSelect={onSelect}
    />
  );
};

export default TimeSelect;
