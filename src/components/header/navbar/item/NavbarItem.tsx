import React, {FC} from 'react';
import styled from "styled-components";

import {valueHeadersType} from "../../../../assects/dataSet/dataSet";

const ListItem = styled.li`
  cursor: pointer;
`

interface INavbarItem {
    navbar: valueHeadersType
}

export const NavbarItem: FC<INavbarItem> = ({navbar}) => {
    return (
        <ListItem>
            {navbar}
        </ListItem>
    );
};
