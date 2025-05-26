import type { ButtonHTMLAttributes } from 'react';
import React from 'react';

import { Button } from '@/components';

const AuthSubmitButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <Button className="h-14 rounded disabled:bg-neutral-300" {...props} />;
};

export default AuthSubmitButton;
