import React from 'react';
import styled from "styled-components";

import {MapChart} from "./map/MapChart";
import {FormComponent} from "./form/FormComponent";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`
const Right = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`

export const Contact = () => {
    return (
        <Section>
            <Container>
                <Left>
                    <FormComponent/>
                </Left>
                <Right>
                    <MapChart/>
                </Right>
            </Container>
        </Section>
    );
};
