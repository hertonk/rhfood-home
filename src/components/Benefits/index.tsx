import { BenefitsContainer, BenefitsContent, LeftContent, List, RightContent, Title } from "./styles";

import benefi from '../../assets/beneficios.jpeg'

export function Benefits() {
    return (
        <BenefitsContainer>
            <BenefitsContent>
                <LeftContent>
                    <Title>Benefícios</Title>
                        <List>
                            <ol>
                                <li>Benefício 1</li>
                                <li>Benefício 2</li>
                                <li>Benefício 3</li>
                                <li>Benefício 4</li>
                                <li>Benefício 5</li>
                            </ol>
                        </List>
                </LeftContent>
                <RightContent>
                    <img src={benefi} alt="" />
                </RightContent>
            </BenefitsContent>
        </BenefitsContainer>
    )
}