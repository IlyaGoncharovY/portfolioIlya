import React, {FC} from 'react';
import styled from "styled-components";

const Button = styled.button`
  background-color: #9bc2c2;
  color: white;
  font-weight: bold;
  //width: 120px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 20px;
`

interface IUniversalButton {
    title: string
    type?: "button" | "reset" | "submit" | undefined
    disabled?: boolean
}

export const UniversalButton: FC<IUniversalButton> = ({
                                                          title,
                                                          type,
                                                          disabled
                                                      }) => {
    return (
        <Button type={type} disabled={disabled}>
            {title}
        </Button>
    );
};
