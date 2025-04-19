import React from "react";
import { Container, ContainerItems, Img, Button, H1 } from "./style";
import {useNavigate} from "react-router-dom";
import { useEffect,  useState } from "react";
import Book from '../../assets/book.png'
import Trash from '../../assets/trash.png'



function Task(){
    const navigate = useNavigate()
    const [task, setTask] = useState([])
    
    useEffect(()=>{
        const addedTask = localStorage.getItem("myTask")

        if(addedTask){
            setTask(JSON.parse(addedTask))
        }
    }, [])

    function RemoveTask(Index){
        const newList = task.filter((_, i) => i !== Index)
        setTask(newList)
        localStorage.setItem("myTask", JSON.stringify(newList))

    }

    function goBack(){
        navigate("/")
      }

      
      console.log(localStorage.getItem("myTask"))


return(
    <Container>
        <Img src={Book}/>
        <H1> Tarefas</H1>
        <ContainerItems>
            <ul>
                {task.map((task, index) =>(
                    <li key={index}>
                        {task} 
                        <Img src={Trash} onClick={() => RemoveTask(index)}/> 
                    </li>
                ))}
            </ul>
            <Button onClick={goBack}>Voltar</Button>
        </ContainerItems>
    </Container>
)

}


export default Task