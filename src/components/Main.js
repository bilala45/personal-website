import About from "./About";
import Resources from "./Resources";
import { Route, Routes, Navigate } from "react-router-dom";

const Main = () => (
  <div className="pr-4">
    {/* intro and about occupy height of screen at minimum (if content is longer than screen height, then it'll expand past it) */}
    <Routes>
      <Route path="/about" element={<About />} />
      {/* <Route path="/projects" element={<Projects />} /> */}
      <Route path="/resources" element={<Resources />} />
      <Route path="*" element={<Navigate to="/about" replace />} />
    </Routes>
  </div>
);

export default Main;
