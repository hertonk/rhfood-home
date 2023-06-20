import styled from "styled-components";

export const TestimonyContainer = styled.header`
    background-color: ${props => props.theme['white']};
    padding: 2.5rem 0  1rem 0;
`;

export const TestimonyContentTitle = styled.div`
    width: '100%';
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
`;

export const TestimonyContent = styled.div`
    width: '100%';
    max-width: 1120px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
`;

export const TestimonyItem = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    padding: 2rem;
`;

export const TestimonyLeft = styled.div`
    
`;

export const TestimonyRight = styled.div`
    padding-left: 1rem;
    align-items: center;
`;

export const TestimonyText = styled.div`
    flex: 1;
    font-size: 1.5em;
    text-align: center;
    align-items: center;
`;

export const ImageAvatar = styled.img`
    border-radius: 200px;
    width: 200px;
`;

export const Title = styled.h1`
    color: ${props => props.theme['blue']};
    margin-bottom: 2rem;
`;
