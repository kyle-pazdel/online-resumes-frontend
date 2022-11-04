import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export function StudentsIndex(props) {
  return (
    <div id="resumes-index">
      <h1>Resumes List</h1>
      {props.students.map((student) => (
        <div key={student.id}>
          <Link to={"/students/" + student.id}>
            {student.first_name} {student.last_name}
          </Link>
        </div>
      ))}
    </div>
  );
}
