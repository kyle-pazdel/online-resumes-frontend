import { useState } from "react";
{
}
import "./App.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Home } from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StudentsShow } from "./StudentsShow";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Header />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students/show" element={<StudentsShow />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
