import React from "react"
import { useState } from "react";

export default function InputAssignment() {
    const [content, setContent] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [priority, setPriority] = useState("");

    const handleAssignmentChange = (event) => {
        setContent(event.target.value);
    }

    const handleDueDateChange = (event) => {
        let date = null;
        if (event != null) {
            date = new Date(event);
        }
        console.log(date)
        setDueDate(date);
    }

    const handlePriorityChange = (event) => {
        setPriority(event.target.value);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const curDate = new Date();
        const assignmentDate = new Date(dueDate)
        if (curDate.getTime() < assignmentDate.getTime()) {
            alert("Please input a valid date and time that is after the current date and time.");
        } else if (content.trim().length == 0) {
            alert("Please input a name for the assignment");
        } else if (priority == ""){
            alert("Please select a priority level for the assignment on the dropdown menu.");
        } else if (content.trim()) {
            
            //TODO: add async call to backend

            handleAssignmentChange("");
            handleDueDateChange("");
            handlePriorityChange("");
        }
        
    } 

    return (
        <div>
            <input type="text" placeholder="Assignment Name" value={content} onChange={handleAssignmentChange}></input>
            <input type="date" value={dueDate} onChange={handleDueDateChange}></input>
            <select value={priority} onChange={setPriority}>
                <option value="" disabled>Select an option</option> {/* Placeholder option */}
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}