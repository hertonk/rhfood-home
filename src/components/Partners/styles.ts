import styled from "styled-components";

export const PatnerContainer = styled.header`
    background-color: ${props => props.theme['white']};
    padding: 2.5rem 0  1rem 0;
`;

export const PatnerContent = styled.div`
    width: '100%';
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
`;

export const PatnerContentTitle = styled.div`
    width: '100%';
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
`;

export const Patner = styled.div`

`;

export const Title = styled.h1`
    color: ${props => props.theme['blue']};
    margin-bottom: 2rem;
`;