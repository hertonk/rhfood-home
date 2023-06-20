import styled from "styled-components";

export const HeaderContainer = styled.header`
    background-color: ${props => props.theme['white']};
    padding: 2.5rem 0  1rem 0;
`;

export const HeaderContent = styled.div`
    width: '100%';
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
    align-items: center;
    flex-direction: row;
`;

export const Logo = styled.div`
    flex: 1;
`;

export const Menu = styled.div`
    flex: 2;

    a {
        text-decoration: none;
        color: ${props => props.theme['black']};
        margin-left: 1rem;
        font-weight: bold;
     }
`;

export const Buttons = styled.div`
    flex: 1;
    align-items: flex-end;
    a {
        text-decoration: none;
        color: ${props => props.theme['blue']};
        margin-left: 1rem;
     }
`;