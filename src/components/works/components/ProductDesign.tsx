import React from 'react';

import AtomicLogo from './3dModel/Atomic';
import {CustomCanvas} from './defaultModel/CustomCanvas';

export const ProductDesign = () => {
  return (
    <CustomCanvas>
      <AtomicLogo/>
    </CustomCanvas>
  );
};
