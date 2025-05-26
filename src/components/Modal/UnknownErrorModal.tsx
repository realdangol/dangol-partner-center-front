import React from 'react';

import BaseModal from './BaseModal';

const UnknownErrorModal = () => {
  return (
    <BaseModal
      description={
        <>
          알 수 없는 에러가 발생했어요.
          <br />
          계속 발생할 경우 고객센터로 문의주세요.
        </>
      }
    />
  );
};

export default UnknownErrorModal;
