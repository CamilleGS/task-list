import React from "react";
import { Container, ContainerItems, Img, Input, Button, H1, P } from "./style";
import { useNavigate } from "react-router-dom";
import Check from '../../assets/check.png'


function Home(){
    const navigate = useNavigate()

    function goForward(){
        navigate("/task")
      }

return(
    <Container>
        <Img src={Check}/>
        <ContainerItems>
            <H1>Lista de Tarefas</H1>
            <P>Tarefa</P>
            <Input placeholder="Escreva sua tarefa"/>
            <Button onClick={goForward}>Adicionar</Button>
        </ContainerItems>
    </Container>
)

}


export default Home