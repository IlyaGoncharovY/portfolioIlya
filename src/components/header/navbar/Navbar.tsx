import React, {FC, useState} from 'react';

import logoReact from '../../../assects/img/logo.png';
import searchImg from '../../../assects/img/search.png';
import {headersData} from '../../../assects/dataSet/dataSet';
import searchOpenImg from '../../../assects/img/searchOpen.png';

import {CustomButton} from '../../../assects/components/CustomButton';

import {navigateTo} from '../../../assects/helpers/NavigateTo';

import {NavbarItem} from './item/NavbarItem';
import {Button, Container, Icon, Icons, Links, List, ListNavigation, Logo, Section} from './NavbarStyle';

interface INavbar {
    searchMode: boolean
    setSearchMode: (value: boolean) => void
}

export const Navbar: FC<INavbar> = ({searchMode, setSearchMode}) => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const changeModeHandler = () => {
    setSearchMode(!searchMode);
  };

  const openNavigationHandler = () => setIsOpen(prevState => !prevState);

  return (
    <Section>
      <Container>
        <Links>
          <Logo src={`${logoReact}`}/>
          <List>
            {searchMode && headersData.map(header =>
              <NavbarItem key={header.id} navbar={header}/>)}
            <CustomButton onClick={changeModeHandler} searchMode={searchMode}/>
          </List>
        </Links>
        <Icons>
          <ListNavigation>
            {isOpen && headersData.map(header =>
              <NavbarItem key={header.id} navbar={header}/>)}
          </ListNavigation>
          <Icon src={`${isOpen ? searchOpenImg : searchImg}`} onClick={openNavigationHandler}/>
          <Button onClick={() => navigateTo('https://t.me/ilyaGoncharov93')}>Hire Now!</Button>
        </Icons>
      </Container>
    </Section>
  );
};
