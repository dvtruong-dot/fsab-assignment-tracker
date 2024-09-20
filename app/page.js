"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import InputAssignment from "./components/inputAssignment";
import AssignmentList from "./components/AssignmentList";
import { useEffect } from "react";

export default function Home() {
  const [assignments, setAssignments] = useState([]);

  function handleAdd(assignment) {
    const exists = assignments.find(a => a.name == assignment.name);
    if (exists || assignment.due == null || assignment.due == "Invalid Date") {
      return;
    }
    assignment.id = Math.random();

    //TODO: add backend call (make this function async and make a promise (make sure it has await as well))

    setAssignments([...assignments, assignment]);
  }
 

  return (
    <div>
      <InputAssignment setassignments={handleAdd}></InputAssignment>
      <AssignmentList assignments={assignments}></AssignmentList>
    </div>
  );
}
