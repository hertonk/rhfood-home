import { TestimonyContainer, TestimonyContent, TestimonyLeft, TestimonyRight, TestimonyItem, TestimonyText, ImageAvatar, TestimonyContentTitle, Title } from "./styles";

import dep1 from '../../assets/dep1.jpeg'
import dep2 from '../../assets/dep2.jpeg'

export function Testimony() {
    return (
        <TestimonyContainer>
            <TestimonyContentTitle>
                <Title>Depoimentos</Title>
            </TestimonyContentTitle>
            <TestimonyContent>
               <TestimonyItem>
                <TestimonyLeft>
                    <ImageAvatar src={dep1} alt="" />
                </TestimonyLeft>
                <TestimonyRight>
                    <TestimonyText>
                        <br></br><br></br><p>"Aqui é um depoimento, um texto sobre isso".{"\n"}Fulana de Tal</p>
                    </TestimonyText>
                </TestimonyRight>
               </TestimonyItem>
               <TestimonyItem>
                <TestimonyLeft>
                    <ImageAvatar src={dep2} alt="" />
                </TestimonyLeft>
                <TestimonyRight>
                    <TestimonyText>
                    <br></br><br></br><p>"Aqui é um depoimento, um texto sobre isso".{"\n"}Fulana de Tal</p>
                    </TestimonyText>
                </TestimonyRight>
               </TestimonyItem>
            </TestimonyContent>     
        </TestimonyContainer>
    )
}