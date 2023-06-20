import { Number, NumberDescription, NumberTitle, NumbersContainer, NumbersContent } from "./styles";

export function Numbers() {
    return (
        <NumbersContainer>
            <NumbersContent>
                <Number>
                    <NumberTitle>+1000</NumberTitle>
                    <NumberDescription>Vagas em aberto</NumberDescription>
                </Number>
                <Number>
                    <NumberTitle>+1000</NumberTitle>
                    <NumberDescription>Negócios parceiros</NumberDescription>
                </Number>
                <Number>
                    <NumberTitle>+10 Milhões</NumberTitle>
                    <NumberDescription>De oportunidade geradas</NumberDescription>
                </Number>
                <Number>
                    <NumberTitle>+200 Milhões</NumberTitle>
                    <NumberDescription>Em renda gerada para sociedade</NumberDescription>
                </Number>
            </NumbersContent>     
        </NumbersContainer>
    )
}