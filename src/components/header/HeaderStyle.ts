import styled from 'styled-components';

import {CommonContainer, CommonSection, CommonTitle} from '../../assects/style/gCommonStyle';

export const Section = styled(CommonSection)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

export const Container = styled(CommonContainer)`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

export const Title = styled(CommonTitle)`
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;
export const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  @media only screen and (max-width: 768px) {
    text-align: center;
    padding: 20px;
  }
`;
export const Line = styled.img`
  height: 5px;
`;
export const Desc = styled.p`
  font-size: 24px;
  color: #737d81;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;
export const Right = styled.div`
  flex: 3;
  position: relative;

  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;
export const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;


  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(25px);
    }
  }
`;
