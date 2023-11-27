import React, {FC} from 'react';
import styled from "styled-components";

const ListItem = styled.li`
  font-size: 60px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px transparent;
  }

  &:hover {
    color: #3af37a;
    transition: color 0.5s ease;
  }
`

interface IWorksItem {
    work: string
}

export const WorksItem: FC<IWorksItem> = ({work}) => {
    return (
        <ListItem>
            {work}
        </ListItem>
    );
};