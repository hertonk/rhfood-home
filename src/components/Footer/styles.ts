import styled from "styled-components";

export const FooterContainer = styled.header`
    background-color: ${props => props.theme['blue']};
    padding: 2.5rem 0  1rem 0;
    border-top: 5px solid ${props => props.theme['green-light']};
`;

export const FooterContent = styled.div`
    width: '100%';
    max-width: 1120px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
`;

export const Column1 = styled.div`
    flex:3;
`;

export const Column2 = styled.div`
    flex:2;
    color: ${props => props.theme['white']};
`;

export const Column3 = styled.div`
    flex:2;
    text-align: right;

    a {
        text-decoration: none;
        color: ${props => props.theme['white']};
        padding-left: 1rem;
    }
`;
