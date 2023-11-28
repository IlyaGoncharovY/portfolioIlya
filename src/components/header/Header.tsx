import React from 'react';

import lineImg from '../../assects/img/line.png';
import starShipsImg from '../../assects/img/starShips.png';
import {UniversalButton} from '../../assects/components/UniversalButton';

import {SubTitle} from '../../assects/components/SubTitle';

import {Navbar} from './navbar/Navbar';
import {HeaderCanvas} from './canvas/HeaderCanvas';
import {Container, Desc, Img, Left, Line, Right, Section, Title, WhatWeDo} from './HeaderStyle';

const Header = () => {
  return (
    <Section>
      <Navbar/>
      <Container>
        <Left>
          <Title>Hello</Title>
          <WhatWeDo>
            <Line src={`${lineImg}`}/>
            <SubTitle title={'That\'s what I do'}/>
          </WhatWeDo>
          <Desc>
                        I create interesting applications, I try not to stand still.
          </Desc>
          <UniversalButton title={'Learn more'}/>
        </Left>
        <Right>
          <HeaderCanvas/>
          <Img src={`${starShipsImg}`}/>
        </Right>
      </Container>
    </Section>
  );
};

export default Header;
