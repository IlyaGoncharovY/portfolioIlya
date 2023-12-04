import React, {FC} from 'react';

interface LoadingFallbackProps {
    height?: string;
}

export const LoadingFallback: FC<LoadingFallbackProps> = ({height = '100vh'}) => (
  <div style={{
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
  }}>{'Loading...'}</div>
);
