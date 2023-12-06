import React from 'react';

import LapTopLogo from './3dModel/Laptop';
import {CustomCanvas} from './defaultModel/CustomCanvas';

const WebDesign = React.memo(() => {
  return (
    <CustomCanvas>
      <LapTopLogo/>
    </CustomCanvas>
  );
});

export default WebDesign;
