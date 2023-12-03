import React from 'react';

import LaptopLogo from './3dModel/LaptopLogo';
import {CustomCanvas} from './defaultModel/CustomCanvas';

export const WebDesign = React.memo(() => {
  return (
    <CustomCanvas>
      <LaptopLogo/>
    </CustomCanvas>
  );
});
