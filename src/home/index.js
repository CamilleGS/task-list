import React from "react";
import { Container, ContainerItems, Img, Input, Button, H1, P } from "./style";
import { useNavigate } from "react-router-dom";
import myRoutes from "../routes";


function App(){
    const navigate = useNavigate()

return(
    <Container>
        <Img></Img>
        <ContainerItems>
            <H1>Lista de Tarefas</H1>
            <P>Tarefa</P>
            <Input placeholder="Escreva sua tarefa"/>
            <Button onClick={navigate('/task')}>Adicionar</Button>
        </ContainerItems>
    </Container>
)

}


export default App