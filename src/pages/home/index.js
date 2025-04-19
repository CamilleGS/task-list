import React from "react";
import { Container, ContainerItems, Img, Input, Button, H1, P } from "./style";
import { useNavigate } from "react-router-dom";
import { useRef,  useState } from "react";
import Check from '../../assets/check.png'


//dps de fazer o navigate temos que:
//pegar os valores dos inputs primeiro, adicionar no array conforme eu coloco

function Home(){
    const navigate = useNavigate()
    const inputTask = useRef()
    const [, setTask] = useState([])

    

        
    

    function AddNewTask(){
        const novaTarefa = inputTask.current.value

        if(novaTarefa === "") {
            return alert('escreve sua tarefa')
            
        }

        const tarefasAntigas = JSON.parse(localStorage.getItem("myTask"))

        const novaLista = [...tarefasAntigas, novaTarefa]

        setTask(novaLista)
        localStorage.setItem("myTask", JSON.stringify(novaLista))

        inputTask.current.value = "";
        navigate("/task")
      }



return(
    <Container>
        <Img src={Check}/>
        <H1>Lista de Tarefas</H1>
        <ContainerItems>
            <P>Tarefa</P>
            <Input ref={inputTask} placeholder="Escreva sua tarefa"/>
            <Button onClick={AddNewTask}>Adicionar</Button>
        </ContainerItems>
    </Container>
)

}


export default Home