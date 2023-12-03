import React, {FC} from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

import {headersDataType} from '../../../../assects/dataSet/dataSet';

const ListItem = styled.li`
  cursor: pointer;
  margin-right: 10px;
  &:hover {
    color: #d2f1a7;
  }
`;

interface INavbarItem {
    navbar: headersDataType
}

export const NavbarItem: FC<INavbarItem> = ({navbar}) => {
  return (
    <ListItem>
      <Link to={navbar.scrollId} smooth={true}>
        {navbar.value}
      </Link>
    </ListItem>
  );
};
