import React from "react";
import { Container, ContainerItems, Img, Input, Button, H1, P } from "./style";
import { useNavigate } from "react-router-dom";
import { useRef,  useState } from "react";
import Check from '../../assets/check.png'
import axios from "axios";


function Home(){
    const navigate = useNavigate()
    const inputTask = useRef()
    const [task, setTask] = useState([])


    async function AddNewTask(){

        if(!inputTask.current.value){
            return alert('Digite a Tarefa')
        } else{
            const {data: newTask} = await axios.post('http://localhost:3010/task', {taskName:inputTask.current.value})
            setTask([...task, newTask])
        }
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