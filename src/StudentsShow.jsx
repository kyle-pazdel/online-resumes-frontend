import { useParams } from "react-router";
import { useState } from "react";
import axios from "axios";
import { TwitterFeed } from "./TwitterFeed";

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

      {/* Student Data Attributes */}
      <p>Student id: {studentId}</p>
      <p>
        Name: {props.students[studentId - 1].first_name} {props.students[studentId - 1].last_name}
      </p>
      <p>Email: {props.students[studentId - 1].email}</p>
      <p>Phone Number: {props.students[studentId - 1].phone_number}</p>
      <p>Bio: {props.students[studentId - 1].short_bio}</p>
      <p>LinkedIn: {props.students[studentId - 1].linkedin_url}</p>
      <p>Twitter: {props.students[studentId - 1].twitter_handle}</p>
      <p>Blog/Website: {props.students[studentId - 1].website_blog_url}</p>
      <p>Resume: {props.students[studentId - 1].resume_url}</p>
      <p>GitHub: {props.students[studentId - 1].github_url}</p>
      <p>
        Photo:
        <p>
          <img src={props.students[studentId - 1].photo} />
        </p>
      </p>
      <TwitterFeed />
      {/* Capstone attributes */}
      {/* <p>Name: {props.students[studentId - 1].capstones.name}</p> */}
      {/* <p>Description: {props.students[studentId - 1].capstones.description}</p> */}
      {/* <p>URL: {props.students[studentId - 1].capstones.url}</p> */}
      {/* <p>Screenshot: 
      <p> <img src={props.students[studentId - 1].capstones.screenshot} /> </p>
      </p> */}

      {/* Educations attributes */}
      {/* <p>Start date: {props.students[studentId - 1].educations.start_date}</p> */}
      {/* <p>End date: {props.students[studentId - 1].educations.start_date}</p> */}
      {/* <p>Degree: {props.students[studentId - 1].educations.degree}</p> */}
      {/* <p>University: {props.students[studentId - 1].educations.university_name}</p> */}
      {/* <p>Details: {props.students[studentId - 1].educations.details}</p> */}

      {/* Experiences attributes */}
      {/* <p>Start date: {props.students[studentId - 1].experiences.start_date}</p> */}
      {/* <p>End date: {props.students[studentId - 1].experiences.end_date}</p> */}
      {/* <p>Job title: {props.students[studentId - 1].experiences.job_title}</p> */}
      {/* <p>Company: {props.students[studentId - 1].experiences.company_name}</p> */}
      {/* <p>Details: {props.students[studentId - 1].experiences.details}</p> */}

      {/* Skills attributes */}
      {/* <p>{props.students[studentId - 1].skills.map((skill) => {
        Skill: {skill.skill_name}
      })</p> */}
    </div>
  );
}
