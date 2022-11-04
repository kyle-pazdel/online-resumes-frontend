import { Stack, Button } from "react-bootstrap";

export function StudentsIndex(props) {
  return (
    <div>
      <h1>Resumes List</h1>
      {props.students.map((student) => (
        <Stack gap={2} className="col-md-5 mx-auto py-1" id="resumes-index" key={student.id}>
          <Button variant="outline-secondary" id="indexLink" href={"/students/" + student.id}>
            {student.first_name} {student.last_name}
          </Button>
        </Stack>
      ))}
    </div>
  );
}
