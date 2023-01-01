import "./App.css";
import { Route, Routes, Redirect } from "react-router-dom";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail";
import ProjectDetail2 from "./components/ProjectDetail2";
import ProjectDetail3 from "./components/ProjectDetail3";
import Gallery from "./components/Gallery";
import Bands from "./components/Bands";

function App() {
  return (
    <div className="main">
      <div className="outer-wrapper">
        <NavBar />
      </div>
      <Routes>
        <Route path="/project/detail" element={<ProjectDetail />} />
        <Route path="/project/detail2" element={<ProjectDetail2 />} />
        <Route path="/project/detail3" element={<ProjectDetail3 />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/bands" element={<Bands />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
