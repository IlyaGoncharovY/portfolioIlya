import React from 'react';
import styled from 'styled-components';

import {UniversalButton} from '../../../assects/components/UniversalButton';

import {navigateTo} from '../../../assects/helpers/navigateTo';

import TelegramLogo from './3dModel/TelegramLogo';
import {CustomCanvas} from './defaultModel/CustomCanvas';

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  bottom: 100px;
  right: 100px;
  position: absolute;
  
  @media only screen and (max-width: 768px) {
    top: -300px;
    bottom: 0;
    //left: 0;
    right: 0;
    margin: auto;
  }
`;

const SocialMedia = React.memo(() => {
  return (
    <>
      <CustomCanvas>
        <TelegramLogo/>
      </CustomCanvas>
      <Desc>
        <UniversalButton title={'Send Me'} onClickNavigate={() => navigateTo('https://t.me/ilyaGoncharov93')}/>
      </Desc>
    </>
  );
});

export default SocialMedia;
