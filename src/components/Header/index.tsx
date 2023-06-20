import { Buttons, HeaderContainer, HeaderContent, Logo, Menu } from "./styles";

import logo from '../../assets/logo.png'

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <Logo>
                    <img src={logo} width={300} alt="" />
                </Logo>
                <Menu>
                    <a href="#">Sobre Nós</a>
                    <a href="#">Ver Vagas</a>
                    <a href="#">Perguntas Frequentes</a>
                    <a href="#">Blog</a>
                </Menu>
                <Buttons>
                    <a href="#">Para Empresas</a>
                    <a href="#">Entrar</a>
                </Buttons>
            </HeaderContent>
        </HeaderContainer>
    )
}