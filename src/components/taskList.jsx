import { useState } from "react"


const TaskList = (props) => {
    
    const updateHandler = (targetIdx, targetBool) => {
        props.updatedTask(targetIdx, targetBool)
    }

    const deleteHandler = (targetIdx) => {
        props.deleteTask(targetIdx)
    }


    return (
        <div>

            <div className="card-body border mx-auto w-50 rounded shadow m-3">
                {
                    props.tasks.map(
                        (eachTask, idx) => {

                            return (
                                <div className="d-flex justify-content-evenly align-items-baseline">
                                    

                                    <p key={idx}  className={eachTask.completed ? "text-decoration-line-through" : "none"} >{eachTask.todo}</p> 
                                        
                                        
                                            <input type="checkbox"onChange={(e) => updateHandler(idx, e.target.checked)}/>
                                        
                                        
                                            <button className="btn btn-danger" onClick={() => deleteHandler(idx)}>Delete</button>
                                        
                                    
                                </div>

                            )
                        }
                    )
                }
            </div>

        </div>
    )
}

export default TaskList