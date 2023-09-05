import About from "./About";
import Projects from "./Projects";
import { Route, Routes, Navigate } from "react-router-dom";

const Main = () => (
  <div>
    <div className="md:hidden">
      <About />
      <Projects />
    </div>
    <div className="hidden md:block">
      <Routes>
        <Route path="" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Navigate to="" replace />} />
      </Routes>
    </div>
  </div>
);

export default Main;
