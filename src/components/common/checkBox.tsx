'use client';

import CheckBox_checked from '@assets/svg/checkBox_checked.svg';
import CheckBox_disabledChecked from '@assets/svg/checkBox_disabledChecked.svg';
import CheckBox_disabledUnchecked from '@assets/svg/checkBox_disabledUnchecked.svg';
import CheckBox_unchecked from '@assets/svg/checkBox_unchecked.svg';
import React, { useId } from 'react';

// 체크 아이콘 SVG (컴포넌트 내부에 두거나 별도 파일로 관리)

// Checkbox 컴포넌트 Props 정의
interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode; // 체크박스 옆에 표시될 텍스트 또는 요소
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  disabled,
  id: providedId, // 외부에서 ID를 제공할 수 있도록
  className, // 외부에서 추가적인 스타일링을 위해
  onChange,
  ...props // 나머지 input 속성들 (name, value 등)
}) => {
  // 고유 ID 생성 (useId 훅 사용) 또는 외부 제공 ID 사용
  const generatedId = useId();
  const id = providedId || generatedId;

  const CheckIcon = () => {
    if (checked && !disabled) return <CheckBox_checked />;
    if (!checked && !disabled) return <CheckBox_unchecked />;
    if (checked && disabled) return <CheckBox_disabledChecked />;
    if (!checked && disabled) return <CheckBox_disabledUnchecked />;
  };
  return (
    // label 요소로 감싸 클릭 영역 확장 및 접근성 향상
    <label
      htmlFor={id}
      className={`inline-flex cursor-pointer items-center gap-2 ${
        disabled ? 'cursor-not-allowed' : 'cursor-pointer'
      } ${className}`} // 외부 클래스 적용
    >
      {/* 실제 체크박스 input (화면에는 보이지 않음) */}
      <input
        type="checkbox"
        id={id}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        // 기본 모양 숨기고 peer 클래스 추가하여 형제 요소에서 상태 참조 가능하게 함
        className="appearance-none peer"
        {...props}
      />
      <CheckIcon />
      {/* 레이블 텍스트 */}
      {label && (
        <span
          // global.css의 타이포그래피 클래스 적용
          className={`typo-label select-none ${
            // Disabled 상태일 때 텍스트 색상 변경
            disabled ? 'text-neutral-400' : 'text-neutral-800' // 기본 텍스트 색상 (필요시 조정)
          }`}
        >
          {label}
        </span>
      )}
    </label>
  );
};
