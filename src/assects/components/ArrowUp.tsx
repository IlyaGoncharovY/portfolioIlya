import React from 'react';

import ScrollToTop from 'react-scroll-to-top';

import arrowLogo from '../img/arrowUp.png';

export const ArrowUp = () => {

  const style = {
    background : '#fff',
    borderRadius : '50%',
    backgroundImage : `url(${arrowLogo})`,
    backgroundPosition: '50% 50%',
    backgroundSize : 20,
    backgroundRepeat : 'no-repeat',
  };

  return (
    <>
      <ScrollToTop smooth style={style} svgPath={`${arrowLogo}`}/>
    </>
  );
};
