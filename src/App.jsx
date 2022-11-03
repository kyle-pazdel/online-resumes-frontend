import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Home } from "./Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
