import About from "./About";
import Projects from "./Projects";
import Resources from "./Resources";
import { Route, Routes, Navigate } from "react-router-dom";

const Main = () => (
  <div>
    <div className="md:hidden">
      <About />
      <Projects />
      <Resources />
    </div>
    <div className="hidden md:block">
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="*" element={<Navigate to="/about" replace />} />
      </Routes>
    </div>
  </div>
);

export default Main;
