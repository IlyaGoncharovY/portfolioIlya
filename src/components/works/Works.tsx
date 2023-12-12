import React, {lazy, Suspense, useState} from 'react';

import {valueWorksDataType, worksData} from '../../assects/dataSet/dataSet';

import {LoadingFallback} from '../../assects/components/Loading';

import {WorksItem} from './item/WorksItem';

import {Container, Left, List, Right, Section} from './WorksStyle';

const WebDesign = lazy(() => import('./components/WebDesign'));
const Development = lazy(() => import('./components/Development'));
const SocialMedia = lazy(() => import('./components/SocialMedia'));
const ProductDesign = lazy(() => import('./components/ProductDesign'));

const Works = React.memo(() => {

  const [work, setWork] = useState<valueWorksDataType>('Web Design');

  let selectedComponent: React.ReactNode;

  switch (work) {
  case 'Web Design':
    selectedComponent = <WebDesign/>;
    break;
  case 'Development':
    selectedComponent = <Development/>;
    break;
  case 'Social Media':
    selectedComponent = <SocialMedia/>;
    break;
  case 'Product Design':
    selectedComponent = <ProductDesign/>;
    break;
  default:
    selectedComponent = null;
  }

  return (
    <Section id={'works'}>
      <Container>
        <Left>
          <List>
            {worksData.map((el) => (
              <WorksItem
                key={el.id} work={el}
                setWork={setWork}
                isSelected={el.value === work}
              />
            ))}
          </List>
        </Left>
        <Right>
          <Suspense fallback={<LoadingFallback/>}>
            {selectedComponent}
          </Suspense>
        </Right>
      </Container>
    </Section>
  );
});

export default Works;
