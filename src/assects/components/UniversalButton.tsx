import React, {FC, MouseEventHandler} from 'react';
import styled from 'styled-components';

interface IButtonProps {
    isSubmitting: boolean | undefined;
}

const Button = styled.button<IButtonProps>`
  background-color: #9bc2c2;
  color: white;
  font-weight: bold;
  //width: 120px;
  border: none;
  border-radius: 5px;
  cursor: ${({ isSubmitting }) => (isSubmitting ? 'not-allowed' : 'pointer')};
  padding: 20px;
  opacity: ${({ isSubmitting }) => (isSubmitting ? 0.5 : 1)};
`;

interface IUniversalButton {
    title: string
    type?: 'button' | 'reset' | 'submit' | undefined
    disabled?: boolean
    onClickNavigate?: MouseEventHandler<HTMLButtonElement>
    onClickDownload?: () => void
    isSubmitting?: boolean | undefined
}

export const UniversalButton: FC<IUniversalButton> = ({
  title,
  type,
  disabled,
  onClickNavigate,
  onClickDownload,
  isSubmitting,
}) => {
  return (
    <Button
      isSubmitting={isSubmitting}
      type={type} disabled={disabled}
      onClick={onClickNavigate || onClickDownload}
    >
      {title}
    </Button>
  );
};
