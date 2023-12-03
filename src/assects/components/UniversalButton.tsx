import React, {FC, MouseEventHandler} from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #9bc2c2;
  color: white;
  font-weight: bold;
  //width: 120px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 20px;
`;

interface IUniversalButton {
    title: string
    type?: 'button' | 'reset' | 'submit' | undefined
    disabled?: boolean
    onClickNavigate?: MouseEventHandler<HTMLButtonElement>
}

export const UniversalButton: FC<IUniversalButton> = ({
  title,
  type,
  disabled,
  onClickNavigate,
}) => {
  return (
    <Button type={type} disabled={disabled} onClick={onClickNavigate}>
      {title}
    </Button>
  );
};
