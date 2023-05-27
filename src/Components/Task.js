import React from "react"
export default function Task(props){
    // Tasks contains title, description, color, status, Date
    function completeTask(){
        console.log("changed!!!")
    }
    return (
        <div className="task">
            <input type="checkbox" onChange={completeTask} {...props} />
            <li >{props.title}</li>
            <button class="deleteButton">Delete</button>
        </div>
    )
}