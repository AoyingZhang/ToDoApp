import React from "react"
export default function Task(props){
    // Tasks contains title, description, color, status, Date
    return (
        <div>
            <li className="task">{props.title}</li>

        </div>
    )
}