import styled from 'styled-components';

import {CommonContainer, CommonLeft, CommonSection} from '../../assects/style/gCommonStyle';

export const Section = styled(CommonSection)`
  display: flex;
  justify-content: center;
  position: relative;
`;
export const Container = styled(CommonContainer)`
  //height: 800px;
  height: 100vh;
  scroll-snap-align: center;
  
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    //height: auto;
    flex-direction: column;
  }
`;
export const Left = styled(CommonLeft)`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;
export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Right = styled.div`
  flex: 1;
`;
