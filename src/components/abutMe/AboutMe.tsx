import React from 'react';

import {Element} from 'react-scroll';

import lineImg from '../../assects/img/line.png';
import {UniversalButton} from '../../assects/components/UniversalButton';

import {SubTitle} from '../../assects/components/SubTitle';

import {AbutMeCanvas} from './canvas/AbutMeCanvas';
import {Container, Desc, Left, Line, Right, Section, Title, WhatWeDo} from './AdoutMeStyle';

const AboutMe = () => {
  return (
    <Section id={'about'}>
      <Container>
        <Left>
          <AbutMeCanvas/>
        </Left>
        <Right>
          <Title>About Me</Title>
          <WhatWeDo>
            <Line src={`${lineImg}`}/>
            <SubTitle title={'My name is Ilya.'}/>
          </WhatWeDo>
          <Desc>
                        I am well versed in the language,
                        every day I develop my own projects
                        or study new language features.
          </Desc>
          <UniversalButton title={'Sea are works'}/>
        </Right>
      </Container>
    </Section>
  );
};

export default AboutMe;
