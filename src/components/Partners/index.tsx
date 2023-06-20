import { Patner, PatnerContainer, PatnerContent, PatnerContentTitle, Title } from "./styles";

import ifood from '../../assets/ifood.png'

export function Patners() {
    return (
        <PatnerContainer>
            <PatnerContentTitle>
                <Title>Parceiros</Title>
            </PatnerContentTitle>
            <PatnerContent>
                
                <Patner>
                    <img src={ifood} width={150} alt="" />
                </Patner>

                <Patner>
                    <img src={ifood} width={150} alt="" />
                </Patner>

                <Patner>
                    <img src={ifood} width={150} alt="" />
                </Patner>

                <Patner>
                    <img src={ifood} width={150} alt="" />
                </Patner>

            </PatnerContent>
        </PatnerContainer>
    )
}