import React from 'react';

interface AgreementAllCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const AgreementAllCheckbox = ({ checked, onChange }: AgreementAllCheckboxProps) => {
  return (
    <div className="w-[550px] h-[56px] rounded-[4px] border border-neutral-200 p-[16px] gap-[8px] flex">
      <div className="flex items-center space-x-2">
        {/* 체크박스 컴포넌트로 대체 예정 */}
        <input
          type="checkbox"
          id="all"
          className="h-4 w-4 rounded border-neutral-300"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <label htmlFor="all" className="typo-body1-regular">
          전체동의
        </label>
      </div>
    </div>
  );
};

export default AgreementAllCheckbox;
