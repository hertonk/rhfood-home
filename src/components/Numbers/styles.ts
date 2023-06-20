import styled from "styled-components";

export const NumbersContainer = styled.header`
    background-color: ${props => props.theme['white']};
    padding: 2.5rem 0  1rem 0;
`;

export const NumbersContent = styled.div`
    width: '100%';
    max-width: 1120px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    background-color: ${props => props.theme['blue']};
    padding: 1rem;
    height: 17rem;
    border-radius: 8px;
`;

export const Number = styled.div`
    flex: 1;
    align-items: center;
    text-align: center;

`

export const NumberTitle = styled.h1`
    color: ${props => props.theme['white']};
`

export const NumberDescription = styled.p`
    color: ${props => props.theme['white']};
`