import styled, {css} from 'styled-components';

import {ReactNode} from 'react';

import dgImage from '../assects/img/dg.jpeg';

interface ContainerProps {
    searchMode: boolean;
    children: ReactNode;
}

export const Container = styled.div<ContainerProps>`
  ${props => props.searchMode
    ? css`
            scroll-snap-type: both mandatory;
            scroll-behavior: smooth;
            overflow-y: auto;
            scrollbar-width: none;
            color: white;
            background: url(${dgImage});
          `
    : css`
            height: 100vh;
            scroll-snap-type: both mandatory;
            scroll-behavior: smooth;
            overflow-y: auto;
            scrollbar-width: none;
            color: white;
            background: url(${dgImage});
          `
};
  @media only screen and (max-width: 768px) {
    //scroll-snap-type: both mandatory;
    //scroll-behavior: smooth;
    //overflow-y: auto;
    //scrollbar-width: none;
    height: auto;
    color: white;
    background: url(${dgImage});
  };

  &::-webkit-scrollbar {
    display: none;
  }
`;
