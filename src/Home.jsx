import { StudentsIndex } from "./StudentsIndex";
import axios from "axios";
import { useState, useEffect } from "react";

export function Home(props) {
  const [students, setStudents] = useState([]);
  const studentsDummy = props.students;

  const handleIndexStudents = () => {
    setStudents(studentsDummy);
  };

  useEffect(handleIndexStudents, []);

  return (
    <div>
      <StudentsIndex students={students} />
    </div>
  );
}
