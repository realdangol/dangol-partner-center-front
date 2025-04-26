import type { CSSProperties } from 'react';
import React from 'react';

import type { Color } from '@/types/common';

type Props = {
  orientation?: 'horizontal' | 'vertical';
  color?: Color;
  style?: CSSProperties;
};

const Divider = ({ orientation = 'horizontal', color = 'neutral-800', style }: Props) => {
  return (
    <hr
      className={`border-${color} ${orientation === 'horizontal' ? 'w-full' : 'h-auto self-stretch border-l border-t-0'}`}
      style={style}
    />
  );
};

export default Divider;
