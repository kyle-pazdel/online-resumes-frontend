import { Link } from "react-router-dom";

export function StudentsIndex(props) {
  return (
    <div id="resumes-index">
      <h1>Resumes List</h1>
      {props.students.map((student) => (
        <div key={student.id}>
          {/* Make <Link to=...> */}
          <a href={student.resume_url}>
            {student.first_name} {student.last_name}
          </a>
        </div>
      ))}
    </div>
  );
}
