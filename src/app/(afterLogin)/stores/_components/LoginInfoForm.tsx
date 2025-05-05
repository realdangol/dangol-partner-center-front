import { Button, TextField } from '@/components';

import { SubTitle } from '../../_components';

const LoginInfoForm = () => {
  return (
    <form className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <SubTitle>로그인 정보</SubTitle>
        <Button className="w-[160px]">수정하기</Button>
      </div>
      <TextField type="email" label="이메일" defaultValue={'example@example.com'} disabled />
      <TextField type="password" label="비밀번호" placeholder="비밀번호를 입력해주세요." />
      <TextField type="password" placeholder="비밀번호를 재입력해주세요." />
    </form>
  );
};

export default LoginInfoForm;
