import React from "react";
import { Container, ContainerItems, Img, Button, H1 } from "./style";
import {useNavigate} from "react-router-dom";
import Book from '../../assets/book.png'


function Task(){

    const navigate = useNavigate()

    function goBack(){
        navigate("/")
      }



return(
    <Container>
        <Img src={Book}/>
        <ContainerItems>
            <H1> Tarefas</H1>
            <Button onClick={goBack}>Voltar</Button>
        </ContainerItems>
    </Container>
)

}


export default Task