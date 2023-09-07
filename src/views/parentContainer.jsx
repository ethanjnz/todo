import { useState } from "react";
import Form from "../components/form";
import TaskList from "../components/taskList";

const ParentContainer = () => {

    // keep track of the tasks made
    const [tasks, setTasks] = useState([])

    // adds a task to the list of todos
    const addTask = (newTask) => {
        setTasks([...tasks, newTask])
    }

    // delete a todo if desired function
    const deleteTask = (targetIdx) => {
        const filteredTask = tasks.filter(
            (eachTask, idx) => targetIdx !== idx)

            setTasks(filteredTask);
        
    }

    // update the task 
    const updatedTask = (targetIdx, targetBool) => {
        const updatedlist = tasks.map(
            (eachTask, idx) => {
                if( targetIdx === idx ) {
                    return {...eachTask, completed: targetBool}
                } else {
                    return eachTask
                }
            }
        )
        setTasks(updatedlist);
    }

    return (
        <div>
            <Form addTask={addTask}/>
            <TaskList tasks={tasks} deleteTask={deleteTask} updatedTask={updatedTask}/>
        </div>
    );
}

export default ParentContainer
