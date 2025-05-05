import { Button, TextField } from '@/components';

import { SubTitle } from '../../_components';
import FileUpload from './FileUpload';

const BusinessInfoForm = () => {
  const handleFileSelect = (file: File) => {
    console.log(file);
  };

  return (
    <form className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <SubTitle>사업자 정보</SubTitle>
        <Button className="w-[160px]">수정하기</Button>
      </div>
      <TextField label="사업자명" placeholder="사업자등록 상 사업자명를 입력해주세요." />
      <TextField type="tel" label="휴대폰 번호" placeholder="010-0000-0000" />
      <FileUpload
        label="사업자 등록증"
        placeholder="JPG 또는 PDF 형식의 2MB 이내 파일"
        maxSizeMB={2}
        accept="image/jpeg,application/pdf"
        onFileSelect={handleFileSelect}
      />
    </form>
  );
};

export default BusinessInfoForm;
