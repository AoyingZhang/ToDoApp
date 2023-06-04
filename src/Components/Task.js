import React from "react"
//title, id, handleComplete, handleDelete
export default function Task(props){
    const [completed, setCompleted] = React.useState(false)
    function completeTask(){
        setCompleted(prev=>!prev)
        props.handleComplete(props.id)
    }
    return (
        <div className="task">
            <input type="checkbox" onChange={completeTask} checked={completed}/>
            <p>{props.title}</p>
            <button className="deleteButton" onClick={props.handleDelete(props.id)}>Delete</button>
        </div>
    )
}