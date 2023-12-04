import styled, {css} from 'styled-components';

import {ReactNode} from 'react';

import dgImage from '../assects/img/dg.jpeg';

interface ContainerProps {
    searchMode: boolean;
    children: ReactNode;
}

export const Container = styled.div<ContainerProps>`
  font-family: 'Lilita One', sans-serif;
  height: ${({searchMode}) => (searchMode ? 'auto' : '100vh')};
  scroll-snap-type: both mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url(${dgImage});
  position: relative;

  @media only screen and (max-width: 768px) {
    height: auto;
  }

  ${({searchMode}) =>
    searchMode &&
    css`
      color: white;
      background: url(${dgImage});
    `};

  &::-webkit-scrollbar {
    display: none;
  }
`;
