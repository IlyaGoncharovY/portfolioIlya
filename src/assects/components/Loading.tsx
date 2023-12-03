import React, {FC} from 'react';

interface LoadingFallbackProps {
    height?: string;
}

export const LoadingFallback: FC<LoadingFallbackProps> = ({ height = '100vh' }) => (
  <div style={{ height }}>{'Loading...'}</div>
);
