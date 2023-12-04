import React from 'react';

import Pirat from './3dModel/PiratLogo';
import {CustomCanvas} from './defaultModel/CustomCanvas';

const ProductDesign = React.memo(() => {
  return (
    <CustomCanvas>
      <Pirat/>
    </CustomCanvas>
  );
});

export default ProductDesign;
