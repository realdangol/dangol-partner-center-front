'use client';

import { Checkbox } from '@/components/common/checkBox';

export default function Home() {
  // const [isChecked, setIsChecked] = useState(false);
  // const [isCheckedWithLabel, setIsCheckedWithLabel] = useState(true);
  return (
    <div className="typo-h text-brand-500">
      <div className="space-y-4 p-8">
        <div className="space-y-2">
          <h2 className="typo-h2">With Text</h2>
          <div className="flex space-x-4">
            <Checkbox label="Label" checked />
            <Checkbox label="Label" checked={false} />
            <Checkbox label="Label" checked disabled />
            <Checkbox label="Label" checked={false} disabled />
          </div>
        </div>
      </div>
    </div>
  );
}
