import { Job, JobContainer, JobContent, JobContentTitle, Title, TitleJob, DescriptionJob, ItemJob, Button } from "./styles";

export function Jobs() {
    return (
        <JobContainer>
            <JobContentTitle>
                <Title>Vagas em Destaque</Title>
            </JobContentTitle>
            <JobContent>
                
                <Job>
                    <TitleJob>Sushiman</TitleJob>
                    <ItemJob>Salário: R$ 1.575,00</ItemJob>
                    <ItemJob>Horário: 11:30 às 00:00</ItemJob>
                    <ItemJob>Trabalho: Fixo</ItemJob>
                    <ItemJob>Cargo: Sushiman</ItemJob>
                    <ItemJob>Local: Cerqueira César, São Paulo</ItemJob>
                    <Button>SE CANDIDATAR</Button>
                </Job>

                <Job>
                    <TitleJob>Garçom</TitleJob>
                    <ItemJob>Salário: R$ 1.575,00</ItemJob>
                    <ItemJob>Horário: 11:30 às 00:00</ItemJob>
                    <ItemJob>Trabalho: Fixo</ItemJob>
                    <ItemJob>Cargo: Garçom</ItemJob>
                    <ItemJob>Local: Paraisópolis, São Paulo</ItemJob>
                    <Button>SE CANDIDATAR</Button>
                </Job>

                <Job>
                    <TitleJob>Auxiliar de Cozinha</TitleJob>
                    <ItemJob>Salário: R$ 1.575,00</ItemJob>
                    <ItemJob>Horário: 11:30 às 00:00</ItemJob>
                    <ItemJob>Trabalho: Fixo</ItemJob>
                    <ItemJob>Cargo: Auxiliar de Cozinha</ItemJob>
                    <ItemJob>Local: Itaim Bibi, São Paulo</ItemJob>
                    <Button>SE CANDIDATAR</Button>
                </Job>

                <Job>
                    <TitleJob>Auxiliar de Cozinha</TitleJob>
                    <ItemJob>Salário: R$ 1.575,00</ItemJob>
                    <ItemJob>Horário: 11:30 às 00:00</ItemJob>
                    <ItemJob>Trabalho: Fixo</ItemJob>
                    <ItemJob>Cargo: Auxiliar de Cozinha</ItemJob>
                    <ItemJob>Local: Perdizes, São Paulo</ItemJob>
                    <Button>SE CANDIDATAR</Button>
                </Job>

            </JobContent>
        </JobContainer>
    )
}