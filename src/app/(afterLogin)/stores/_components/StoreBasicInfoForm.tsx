import React from 'react';

import { Button, TextField } from '@/components';
import preventSubmitByEnter from '@/utils/preventSubmitByEnter';

import { SubTitle } from '../../_components';

const StoreBasicInfoForm = () => {
  return (
    <form className="flex flex-col gap-8" onKeyDown={preventSubmitByEnter}>
      <div className="flex items-center justify-between">
        <SubTitle>매장 기본정보</SubTitle>
        <div className="flex gap-4">
          <Button className="w-[160px]" variant="outlineNeutral">
            취소
          </Button>
          <Button className="w-[160px]">수정하기</Button>
        </div>
      </div>
      <div className="flex gap-8">
        <div className="flex-1">
          <TextField label="상호 명" placeholder="상호 명을 입력해주세요." />
        </div>
        <div className="flex-1">
          <TextField label="매장 고유번호" placeholder="매장 고유번호를 입력해주세요." disabled />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-end gap-8">
          <div className="flex-1">
            <TextField label="주소" placeholder="운영 매장 주소를 입력해주세요." />
          </div>
          <Button type="button" variant="outlineNeutral">
            주소 검색
          </Button>
        </div>
        <TextField placeholder="상세주소를 입력해주세요." />
      </div>
      <div className="flex gap-8">
        <div className="flex-1">
          <TextField label="전화번호" placeholder="전화번호를 입력해주세요." />
        </div>
        <div className="flex-1">
          <TextField
            label="매장상태"
            placeholder="매장상태를 입력해주세요."
            defaultValue="매장 운영중"
            disabled
          />
        </div>
      </div>
    </form>
  );
};

export default StoreBasicInfoForm;
