import React, {useState} from 'react';

import {WorksItem} from "./item/WorksItem";
import {WebDesign} from "./components/WebDesign";
import {Development} from "./components/Development";
import {SocialMedia} from "./components/SocialMedia";
import {ProductDesign} from "./components/ProductDesign";
import {valueWorksDataType, worksData} from "../../assects/dataSet/dataSet";
import {Container, Left, List, Right, Section} from "./WorksStyle";

export const Works = () => {

    const [work, setWork] = useState<valueWorksDataType>("Web Design")

    let selectedComponent: React.ReactNode

    switch (work) {
        case 'Web Design':
            selectedComponent = <WebDesign />;
            break
        case 'Development':
            selectedComponent = <Development />;
            break
        case 'Social Media':
            selectedComponent = <SocialMedia />;
            break
        case 'Product Design':
            selectedComponent = <ProductDesign />;
            break
        default:
            selectedComponent = null
    }

    return (
        <Section>
            <Container>
                <Left>
                    <List>
                        {worksData.map((el) => (
                            <WorksItem key={el.id} work={el} setWork={setWork}/>
                        ))}
                    </List>
                </Left>
                <Right>
                    {selectedComponent}
                </Right>
            </Container>
        </Section>
    );
};
