import styled from "styled-components";

export const BenefitsContainer = styled.header`
    background-color: ${props => props.theme['white']};
    padding: 2.5rem 0  1rem 0;
`;

export const BenefitsContent = styled.div`
    width: '100%';
    max-width: 1120px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
`;

export const Title = styled.h1`
    margin-bottom: 1rem;
`;

export const LeftContent = styled.div`
    flex: 1;
    align-items: center;
`;

export const RightContent = styled.div`
    flex: 1;
`;

export const List = styled.div`
    flex: 1;
    margin-left: 5rem;
    font-size: 2rem;
`;