import React from "react"
import Task from "./Task"
import Data from "../Data"
export default function Dirs(){
    
    const displayDirs = Data.map(dir=>{
        return (
            <div>
            
            { <li className="dir">{dir.DirTitle}</li>}
            {/* display all tasks */}
            {dir.Tasks.map(tas => <Task title={tas.Title}/>)}
            </div>
        )
    })
    return (
        <div className="whole-dir">
            <ul>
                {displayDirs}
            </ul>
        </div>
    )
}