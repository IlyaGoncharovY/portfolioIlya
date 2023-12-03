import styled from 'styled-components';

import {CommonContainer} from '../../../assects/style/gCommonStyle';

export const Section = styled.div`
  display: flex;
  justify-content: center;
  
  @media only screen and (max-width: 768px){
    width: 100%;
  }
`;
export const Container = styled(CommonContainer)`
  width: 1400px;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px){
    width: 100%;
    padding: 10px;
  }
`;
export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
export const Logo = styled.img`
  height: 50px;
`;
export const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
`;
export const ListNavigation = styled.ul`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: stretch;
  padding-left: 20px;
  list-style: none;
  position: absolute;
  top: 100%; 
  left: -80%;

  @media only screen and (min-width: 770px) {
    display: none;
  }
`;
export const Icon = styled.img`
  width: 30px;
  cursor: pointer;
  
  @media only screen and (min-width: 770px) {
    display: none;
  }
`;
export const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #9bc2c2;
  color: #4a4d5d;
  border-radius: 5px;
  cursor: pointer;
`;
