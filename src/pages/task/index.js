import React from "react";
import { Container, ContainerItems, Img, Button, H1 } from "./style";
import {useNavigate} from "react-router-dom";
import { useEffect,  useState } from "react";
import Book from '../../assets/book.png'
import Trash from '../../assets/trash.png'
import axios from 'axios'



function Task(){
    const navigate = useNavigate()
    const [task, setTask] = useState([])
    
    useEffect(()=>{
        async function fechTask(){
            const { data: getTask } = await axios.get('http://localhost:3010/task')
            setTask(getTask)
        }
        fechTask()
    }, [])

    async function RemoveTask(id){
        await axios.delete(`http://localhost:3010/task/${id}`)
        const deleteTask = task.filter(tasks => tasks.id !== id)
        setTask(deleteTask)
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
                {task.map((taskObj) =>(
                    <li key={taskObj.id}>
                        {taskObj.taskName} 
                        <Img src={Trash} onClick={() => RemoveTask(taskObj.id)}/> 
                    </li>
                ))}
            </ul>
            <Button onClick={goBack}>Voltar</Button>
        </ContainerItems>
    </Container>
)

}


export default Task