import React, {FC} from 'react';

// @ts-ignore
import cv from '../../assects/cv/CvIlya.pdf';
import lineImg from '../../assects/img/line.png';
import starShipsImg from '../../assects/img/starShips.png';
import {UniversalButton} from '../../assects/components/UniversalButton';

import {SubTitle} from '../../assects/components/SubTitle';

import {Navbar} from './navbar/Navbar';
import {HeaderCanvas} from './canvas/HeaderCanvas';
import {Container, Desc, Img, Left, Line, Right, Section, Title, WhatWeDo} from './HeaderStyle';

interface IHeader {
  searchMode: boolean
  setSearchMode: (value: boolean) => void
}

const Header: FC<IHeader> = ({searchMode, setSearchMode}) => {

  const downloadFile = () => {
    const file = document.createElement('a');
    file.href = cv;
    file.setAttribute('download', 'CvIlya.pdf');
    document.body.append(file);
    file.click();
    file.remove();
  };

  return (
    <Section>
      <Navbar searchMode={searchMode} setSearchMode={setSearchMode}/>
      <Container id={'home'}>
        <Left>
          <Title>Hello</Title>
          <WhatWeDo>
            <Line src={`${lineImg}`}/>
            <SubTitle title={'That\'s what I do'}/>
          </WhatWeDo>
          <Desc>
           I create interesting applications, I try not to stand still.
          </Desc>
          <UniversalButton title={'Learn more'} onClickDownload={downloadFile}/>
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
