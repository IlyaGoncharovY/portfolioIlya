import React from 'react';

import LapTopLogo from './3dModel/LapTopLogo';
import {CustomCanvas} from './defaultModel/CustomCanvas';

export const WebDesign = React.memo(() => {
  return (
    <CustomCanvas>
      <LapTopLogo/>
    </CustomCanvas>
  );
});
