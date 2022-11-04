import { useParams } from "react-router";
import { useState } from "react";
import axios from "axios";

export function StudentsShow(props) {
  let { studentId } = useParams();

  // const handleStudentsShow = () => {
  //   axios.get("http://localhost:3000/students/" + studentId + ".json").then((response) => {
  //     console.log(response.data);
  //   });
  // };
  return (
    <div>
      <h1> Student Resume </h1>
      <p>{studentId}</p>
      <p>{props.students[studentId - 1].first_name}</p>
      <p>{props.students[studentId - 1].last_name}</p>
      <p>{props.students[studentId - 1].email}</p>
      <p>{props.students[studentId - 1].phone_number}</p>
      <p>{props.students[studentId - 1].short_bio}</p>
      <p>{props.students[studentId - 1].linkedin_url}</p>
      <p>{props.students[studentId - 1].twitter_handle}</p>
      <p>{props.students[studentId - 1].website_blog_url}</p>
      <p>{props.students[studentId - 1].resume_url}</p>
      <p>{props.students[studentId - 1].github_url}</p>
      <p>{props.students[studentId - 1].photo}</p>
    </div>
  );
}
