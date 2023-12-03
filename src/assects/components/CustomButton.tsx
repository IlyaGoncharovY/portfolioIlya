import React, {FC} from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 100px;
  padding: 7px;
  background-color: #9bc2c2;
  color: #4a4d5d;
  border-radius: 5px;
  cursor: pointer;
`;

interface ICustomButton {
    onClick: () => void;
    searchMode: boolean;
}

export const CustomButton:FC<ICustomButton> = ({searchMode, onClick}) => {
  return (
    <div>
      <Button onClick={onClick}>{searchMode ? 'Off navigation' : 'On navigation'}</Button>
    </div>
  );
};
