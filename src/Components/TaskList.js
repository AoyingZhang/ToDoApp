import React from "react"
import Task from "./Task"
import Data from "../Data"
export default function Dirs(){
    
    const displayTasks = Data.map(task=>{
        return (
            <Task title={task.Title}/>
        )
    })
    return (
        <div className="whole-dir">
            <ul>
                {displayTasks}
            </ul>
        </div>
    )
}