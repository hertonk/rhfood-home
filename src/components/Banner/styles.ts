import styled from "styled-components";

export const BannerContainer = styled.header`
    background-color: #F5F5F5;
    padding: 2.5rem 0  1rem 0;
    border-top: 5px solid ${props => props.theme['green-light']};
`;

export const BannerContent = styled.div`
    width: '100%';
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    height: 620px;
    
`;
