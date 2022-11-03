import { StudentsIndex } from "./StudentsIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { StudentsShow } from "./StudentsShow";

export function Home() {
  const studentsDummy = [
    {
      first_name: "Robyn",
      id: 1,
      last_name: "Spaulding",
      email: "r@test.com",
      phone_number: "1-111-111-1111",
      short_bio:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere, tellus quis pharetra dapibus, nibh risus porttitor odio, at dictum velit nunc in dolor. Maecenas tellus tortor, rutrum varius auctor sed, bibendum eget ligula. Maecenas commodo dictum ex vitae aliquet. Aliquam interdum dui et nulla commodo, eget bibendum enim porttitor. Aenean ultricies cursus nisl, ut elementum enim imperdiet nec. Nam metus massa, viverra eget quam id, efficitur tempor augue. Vestibulum nec elit quam.",
      linkedin_url: "linkedin.com/test",
      twitter_handle: "@test",
      website_blog_url: "test.com",
      resume_url: "resume.com",
      github_url: "github.com/test",
      photo: "...",
    },
    {
      first_name: "Test",
      id: 2,
      last_name: "Test",
      email: "test@test.com",
      phone_number: "1-111-111-1111",
      short_bio:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere, tellus quis pharetra dapibus, nibh risus porttitor odio, at dictum velit nunc in dolor. Maecenas tellus tortor, rutrum varius auctor sed, bibendum eget ligula. Maecenas commodo dictum ex vitae aliquet. Aliquam interdum dui et nulla commodo, eget bibendum enim porttitor. Aenean ultricies cursus nisl, ut elementum enim imperdiet nec. Nam metus massa, viverra eget quam id, efficitur tempor augue. Vestibulum nec elit quam.",
      linkedin_url: "linkedin.com/test",
      twitter_handle: "@test",
      website_blog_url: "test.com",
      resume_url: "resume.com",
      github_url: "github.com/test",
      photo: "...",
    },
  ];

  const [students, setStudents] = useState([]);

  const handleIndexStudents = () => {
    axios.get("http://localhost:3000/students.json").then((response) => {
      console.log(response);
      setStudents(response.data);
    });
  };

  useEffect(handleIndexStudents, []);

  return (
    <div>
      <StudentsIndex students={studentsDummy} />
    </div>
  );
}
