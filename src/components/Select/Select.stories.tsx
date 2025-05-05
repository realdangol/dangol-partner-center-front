import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import Select from './Select';

const meta: Meta<typeof Select> = {
  title: 'common/Select',
  component: Select,
};

export default meta;

export const Basic: StoryObj<typeof Select> = {
  args: {
    options: [
      {
        label: 'Label 1',
        value: 'Value 1',
      },
      {
        label: 'Label 2',
        value: 'Value 2',
      },
      {
        label: 'Label 3',
        value: 'Value 3',
      },
      {
        label: 'Label 4',
        value: 'Value 4',
      },
      {
        label: 'Label 5',
        value: 'Value 5',
      },
    ],
    placeholder: 'Select an option',
    selectedOption: 'Value 1',
  },
  render: (args) => {
    const [selectedOption, setSelectedOption] = useState(args.selectedOption);

    const handleSelect = (value: string) => {
      setSelectedOption(value);
      console.log(value);
    };

    return (
      <div className="flex justify-center">
        <Select {...args} selectedOption={selectedOption} onSelect={handleSelect} />
      </div>
    );
  },
};
