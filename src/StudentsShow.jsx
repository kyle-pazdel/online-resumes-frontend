export function StudentsShow(props) {
  return (
    <div>
      <h1> Student Resume </h1>
      {props.students[0].first_name}
      <p>{props.students[0].id}</p>
    </div>
  );
}
