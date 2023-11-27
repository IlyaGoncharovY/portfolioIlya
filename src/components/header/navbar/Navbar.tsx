import React from 'react';

import {NavbarItem} from "./item/NavbarItem";
import logoReact from "../../../assects/img/logo.png"
import searchImg from "../../../assects/img/search.png"
import {headersData} from "../../../assects/dataSet/dataSet";
import {Button, Container, Icon, Icons, Links, List, Logo, Section} from "./NavbarStyle";

export const Navbar = () => {
    return (
        <Section>
            <Container>
                <Links>
                    <Logo src={`${logoReact}`}/>
                    <List>
                        {headersData.map(header => <NavbarItem key={header.id} navbar={header.value}/>)}
                    </List>
                </Links>
                <Icons>
                    <Icon src={`${searchImg}`}/>
                    <Button>Hire Now!</Button>
                </Icons>
            </Container>
        </Section>
    );
};
