import React from 'react';

import { Button, CheckBox, Tabs, TextField } from '@/components';
import preventSubmitByEnter from '@/utils/preventSubmitByEnter';

import { SubTitle } from '../../_components';
import FileUpload from './FileUpload';
import TimeSelect from './TimeSelect';

const StoreDescriptionForm = () => {
  const handleFileSelect = (file: File) => {
    console.log(file);
  };

  return (
    <form className="flex flex-col gap-8" onKeyDown={preventSubmitByEnter}>
      <div className="flex items-center justify-between">
        <SubTitle>매장 소개</SubTitle>
        <Button className="w-[160px]">수정하기</Button>
      </div>
      <TextField label="소개" multiLine placeholder="매장 소개를 작성해주세요. (300자 이내)" />
      <div className="flex flex-col gap-1">
        <label htmlFor="parking" className="typo-body1-medium text-neutral-500">
          영업시간
        </label>
        <div className="flex items-center gap-8">
          <div className="ml-[-16px] flex items-center gap-2">
            <Tabs
              items={[
                { label: '오전', value: 'am' },
                { label: '오후', value: 'pm' },
              ]}
              variant="depth2"
            />
            <TimeSelect />
          </div>
          <div className="ml-[-16px] flex items-center gap-2">
            <Tabs
              items={[
                { label: '오전', value: 'am' },
                { label: '오후', value: 'pm' },
              ]}
              variant="depth2"
            />
            <TimeSelect />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-end gap-2">
          <label htmlFor="parking" className="typo-body1-medium text-neutral-500">
            휴일
          </label>
          <span className="typo-element3 text-error-600">중복선택 가능</span>
        </div>
        <div className="ml-[-16px] flex items-center gap-2">
          <Tabs
            items={[
              { label: '월', value: 'monday' },
              { label: '화', value: 'tuesday' },
              { label: '수', value: 'wednesday' },
              { label: '목', value: 'thursday' },
              { label: '금', value: 'friday' },
              { label: '토', value: 'saturday' },
              { label: '일', value: 'sunday' },
              { label: '공휴일', value: 'holiday' },
              { label: '휴무없음', value: 'none' },
            ]}
            variant="depth2"
          />
        </div>
        <TextField placeholder="직접입력" />
      </div>
      <TextField label="오시는 길" placeholder="예) 강남역 8번 출구에서 200m 우측 건물 3층" />
      <div className="flex flex-col gap-2">
        <label htmlFor="parking" className="typo-body1-medium text-neutral-500">
          주차여부
        </label>
        <div className="flex gap-4">
          <CheckBox label="가능" />
          <CheckBox label="불가능" />
        </div>
        <TextField id="parking" placeholder="예) 건물 앞 주차 가능" />
      </div>
      <FileUpload
        label="매장 사진"
        placeholder="JPG 또는 PDF 형식의 2MB 이내 파일 (최대 5장)"
        maxSizeMB={2}
        accept="image/jpeg,application/pdf"
        onFileSelect={handleFileSelect}
      />
      <TextField label="이벤트 / 행사" multiLine placeholder="이벤트 및 행사 안내 내용" />
    </form>
  );
};

export default StoreDescriptionForm;
