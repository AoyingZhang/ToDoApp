import React from "react"
import Task from "./Task"
import Data from "../Data"
export default function Dir(){
    const array = ["Task1", "Task2", "Task3"]
    const displayTasks = Data.map(task=>{
        return <Task
            title = {task.Title}
        />
    })
    return (
        <div className="whole-dir">
            {/* Dir */}
            <li className="dir">
                I'm a Directory
            </li>
            {/* Tasks */}
            <ul>
                {displayTasks}
            </ul>
        </div>
    )
}