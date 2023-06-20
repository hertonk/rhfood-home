import styled from "styled-components";

export const JobContainer = styled.header`
    background-color: ${props => props.theme['white']};
    padding: 2.5rem 0  1rem 0;
`;

export const JobContent = styled.div`
    width: '100%';
    max-width: 1120px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
`;

export const JobContentTitle = styled.div`
    width: '100%';
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
`;

export const Job = styled.div`

`;

export const Title = styled.h1`
    color: ${props => props.theme['blue']};
    margin-bottom: 2rem;
`;

export const TitleJob = styled.h3`
    color: ${props => props.theme['black']};
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 5px solid ${props => props.theme['green-light']};
`;

export const DescriptionJob = styled.p`
`

export const ItemJob = styled.p`
    margin-top: 3px;
    margin-bottom: 3px;
`
export const Button = styled.button`
    background-color: ${props => props.theme['blue']};
    color: ${props => props.theme['white']};
    padding: 1rem;
    margin-top: 1rem;
    width: '100%';
    border: none;
    border-radius: 5px;
`