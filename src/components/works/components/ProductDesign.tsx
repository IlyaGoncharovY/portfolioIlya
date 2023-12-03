import React from 'react';

import AtomicLogo from './3dModel/Atomic';
import {CustomCanvas} from './defaultModel/CustomCanvas';

export const ProductDesign = React.memo(() => {
  return (
    <CustomCanvas>
      <AtomicLogo/>
    </CustomCanvas>
  );
});
