import React from "react";
import { Container, ContainerItems, Img, Button, H1 } from "./style";
import {useNavigate} from "react-router-dom";


function Task(){

    const navigate = useNavigate()



return(
    <Container>
        <Img></Img>
        <ContainerItems>
            <H1> Tarefas</H1>
            <Button onClick={navigate('/')}>Voltar</Button>
        </ContainerItems>
    </Container>
)

}


export default Task