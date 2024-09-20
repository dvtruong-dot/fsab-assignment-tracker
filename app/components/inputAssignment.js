import React from "react"
import { useState } from "react";


export default function InputAssignment({setassignments}) {
    const [content, setContent] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [priority, setPriority] = useState("");
    const priorityDict = {"Low" : 2, "Medium" : 1, "High" : 0};
    
    const handleSubmit = () => {

        //BUG: date is always one day behind
        console.log(dueDate);
        const curDate = new Date();
        const dateParts = dueDate.split('-');
        const assignmentDate = new Date(Date.UTC(dateParts[0], dateParts[1] -1, dateParts[2]));

        console.log(assignmentDate);
        if (curDate.getTime() > assignmentDate.getTime()) {
            alert("Please input a valid date and time that is after the current date and time.");
        } else if (content.trim().length == 0) {
            alert("Please input a name for the assignment");
        } else if (priority == ""){
            alert("Please select a priority level for the assignment on the dropdown menu.");
        } else if (content.trim()) {
            
            setassignments({name : content, due : assignmentDate, importance : priorityDict[priority]});
            setContent("");
            setDueDate("");
            setPriority("");
        }
        
    } 

    const handleDueDate = (ev) => {
        console.log(ev.target.value);
        setDueDate(ev.target.value);
    }

    return (
        <div>
            <input id="assignment-name-input" type="text" placeholder="Assignment Name" value={content} onChange={(ev) => setContent(ev.target.value)}></input>
            <input type="date" value={dueDate} onChange={handleDueDate}></input>
            <select value={priority} onChange={(ev) => setPriority(ev.target.value)}>
                <option value="" disabled>Select a priority level</option> 
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}