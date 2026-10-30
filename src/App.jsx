import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Academy from "./pages/Academy";
import AircraftRD from "./pages/AircraftRD";
import EngineeringLab from "./pages/EngineeringLab";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/aircraft-rd" element={<AircraftRD />} />
        <Route path="/engineering-lab" element={<EngineeringLab />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}