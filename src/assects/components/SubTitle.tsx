import React, {FC} from 'react';
import styled from 'styled-components';

const SubTitleStyle = styled.h2`
  color: #9bc2c2;
`;

interface ISubTitle {
    title: string
}
export const SubTitle:FC<ISubTitle> = ({title}) => {
  return (
    <SubTitleStyle>
      {title}
    </SubTitleStyle>
  );
};
