import React from 'react';

import ReactLogo from './3dModel/ReactLogo';
import {CustomCanvas} from './defaultModel/CustomCanvas';

const Development = React.memo(() => {
  return (
    <CustomCanvas>
      <ReactLogo/>
    </CustomCanvas>
  );
});

export default Development;
