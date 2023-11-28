import styled from 'styled-components';

import {CommonTitle} from '../../assects/style/gCommonStyle';

export const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;
export const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;
export const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
export const Title = styled(CommonTitle)`
  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;
export const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;
export const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const Line = styled.img`
  height: 5px;
`;
export const Desc = styled.p`
  font-size: 24px;
  color: #737d81;
  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: #737d81;
    padding: 5px;
  }
`;
