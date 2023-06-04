import React from "react"
import Task from "./Task"
//props contains data array, handleComplete, handleDelete
export default function TaskList(props){
    var displayTasks = props.data.map((task, index)=><Task title={task} id={index} 
    handleComplete={props.handleComplete} handleDelete={props.handleDelete}/>)
    return (
        <div className="whole-dir">
            {displayTasks}
        </div>
    )
}