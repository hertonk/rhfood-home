import { Column1, Column2, Column3, FooterContainer, FooterContent } from "./styles";

import logo from '../../assets/logo-white.png'

export function Footer() {
    return (
        <FooterContainer>
            <FooterContent>
                <Column1>
                    <img src={logo} width={150} alt="" />
                </Column1>
                <Column2>
                    <p>© RH Food 2023</p>
                </Column2>
                <Column3>
                    <a href="#">Privacidade</a> <a href="#">Termos de Uso</a>
                </Column3>
            </FooterContent>
        </FooterContainer>
    )
}