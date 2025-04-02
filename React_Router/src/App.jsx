import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Blue from "./components/Blue.jsx";
import Red from "./components/Red.jsx";
import Home from "./components/Home.jsx";
import Colors from "./components/Colors.jsx";
function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
      </nav>
      <div id="main-section">
        <Routes>
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
          <Route path="/" element={<Home />} />
          <Route path="/:color" element={<Colors />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
