import React from "react"
export default function Task(props){
    // Tasks contains title, description, color, status, Date
    function completeTask(){
        
    }
    return (
        <div className="task">
            <input type="checkbox" onChange={completeTask} {...props} />
            <li >{props.title}</li>

        </div>
    )
}