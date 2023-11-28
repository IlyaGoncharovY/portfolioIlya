import React from 'react';

import {MapChart} from './map/MapChart';
import {FormComponent} from './form/FormComponent';
import {Container, Left, Right, Section} from './ContactStyle';

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

export default Contact;
