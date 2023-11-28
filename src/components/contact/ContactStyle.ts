import styled from 'styled-components';

import {CommonContainer, CommonLeft, CommonSection} from '../../assects/style/gCommonStyle';

export const Section = styled(CommonSection)`
`;
export const Container = styled(CommonContainer)`
  width: 100%;
  height: 100%;
  gap: 50px
`;
export const Left = styled(CommonLeft)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;
export const Right = styled.div`
  flex: 1;
  //padding: 50px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
