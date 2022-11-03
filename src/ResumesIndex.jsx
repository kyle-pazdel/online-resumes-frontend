export function ResumesIndex(props) {
  return (
    <div id="resumes-index">
      <h1>Resumes List</h1>
      {props.students.map((student) => (
        <div key={student.id}>{student.first_name}</div>
      ))}
    </div>
  );
}

first_name;
id;
last_name;
email;
phone_number;
bio;
linkedin_url;
twitter_handle;
website_url;
online_resume_url;
github_url;
photo;
