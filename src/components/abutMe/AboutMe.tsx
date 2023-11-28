import React from 'react';

import lineImg from '../../assects/img/line.png';
import {UniversalButton} from '../../assects/components/UniversalButton';

import {AbutMeCanvas} from './canvas/AbutMeCanvas';
import {Container, Desc, Left, Line, Right, Section, SubTitle, Title, WhatWeDo} from './AdoutMeStyle';

const AboutMe = () => {
  return (
    <Section>
      <Container>
        <Left>
          <AbutMeCanvas/>
        </Left>
        <Right>
          <Title>About Me</Title>
          <WhatWeDo>
            <Line src={`${lineImg}`}/>
            <SubTitle>My name is Ilya.</SubTitle>
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
