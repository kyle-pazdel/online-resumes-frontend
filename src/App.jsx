import axios from "axios";
import { useState } from "react";
import "./App.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Home } from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StudentsShow } from "./StudentsShow";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const handleRequests = () => {
    axios.get("http://localhost:3000/students.json").then((response) => {
      console.log(response);
    });
  };
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
  return (
    <BrowserRouter>
      <Header />
      <Footer />
      <Routes>
        <Route path="/" element={<Home students={studentsDummy} />} />
        <Route path="/students/:studentId" element={<StudentsShow students={studentsDummy} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
