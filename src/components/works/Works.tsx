import React, {useState} from 'react';
import styled from "styled-components";

import {WebDesign} from "./components/WebDesign";
import {Development} from "./components/Development";
import {SocialMedia} from "./components/SocialMedia";
import {ProductDesign} from "./components/ProductDesign";
import {WorksItem} from "./item/WorksItem";

type valueType = "Web Design" | "Development" | "Product Design" | "Social Media"


type dataType = {
    id: number,
    value: valueType
}

const data: dataType[] = [
    {id: 1, value: "Web Design"},
    {id: 1, value: "Development"},
    {id: 1, value: "Product Design"},
    {id: 1, value: "Social Media"},
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

const Right = styled.div`
  flex: 1;
`

export const Works = () => {

    const [work, setWork] = useState<valueType>("Web Design")

    return (
        <Section>
            <Container>
                <Left>
                    <List>
                        {data.map((el) => (
                            <WorksItem key={el.id} work={el.value}/>
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
