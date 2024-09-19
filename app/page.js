"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import InputAssignment from "./components/inputAssignment";

export default function Home() {
  const [assignments, setAssignments] = useState([]);

  return (
    <div>
      <InputAssignment></InputAssignment>
    </div>
  );
}
