import React, {useState} from 'react';
import styled from "styled-components";

import {WebDesign} from "./components/WebDesign";
import {Development} from "./components/Development";
import {SocialMedia} from "./components/SocialMedia";
import {ProductDesign} from "./components/ProductDesign";

const data: ["Web Design", "Development", "Product Design", "Social Media"] = [
    "Web Design",
    "Development",
    "Product Design",
    "Social Media"
]

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
 
`
const Container = styled.div`
  height: 800px;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    flex-direction: column;
  }
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
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
    color: yellow;
    transition: color 0.5s ease;
  }
`
const Right = styled.div`
  flex: 1;
`

export const Works = () => {

    const [work, setWork] = useState<string>("Web Design")

    return (
        <Section>
            <Container>
                <Left>
                    <List>
                        {data.map((el, index) => (
                            <ListItem key={index} onClick={() => setWork(el)}>{el}</ListItem>
                        ))}
                    </List>
                </Left>
                <Right>
                    {work === "Web Design" ? (
                        <WebDesign/>
                    ) : work === "Development" ? (
                        <Development/>
                    ) : work === "Social Media" ? (
                        <SocialMedia/>
                    ) : (
                        <ProductDesign/>
                    )}
                </Right>
            </Container>
        </Section>
    );
};
