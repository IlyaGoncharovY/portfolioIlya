import React, {FC} from 'react';
import styled from 'styled-components';

const LodingContainer = styled.div<{ height: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.height};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  font-size: 32px;
`;

interface LoadingFallbackProps {
    height?: string;
}

export const LoadingFallback: FC<LoadingFallbackProps> = ({height = '100vh'}) => (
  <LodingContainer height={height} style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: height,
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    margin: 'auto',
    fontSize: '32px',
  }}>{'Loading...'}</LodingContainer>
);
