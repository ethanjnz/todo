import { useState } from "react"

const Form = (props) => {

    const [todo, setTodo] = useState("")


    const submitHandler = (e) => {
        e.preventDefault(); 
        const newTask = {todo, completed: false };
        console.log(newTask)
        props.addTask(newTask)
    }
    return (
        <div>
            <form className="container d-flex rounded border shadow mx-auto w-50 m-3" onSubmit={submitHandler}>
                <div className="m-3">
                    <input type="text" className="form-control" value={todo} onChange={(e) => setTodo(e.target.value)}/>
                </div>
                <div className="m-3">
                    <input className="btn btn-primary" type="submit" />
                </div>
            </form>

                



        </div>
    )

}

export default Form