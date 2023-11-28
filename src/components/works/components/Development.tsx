import React from 'react';

import ReactLogo from './3dModel/ReactLogo';
import {CustomCanvas} from './defaultModel/CustomCanvas';

export const Development = () => {
  return (
    <CustomCanvas>
      <ReactLogo/>
    </CustomCanvas>
  );
};
