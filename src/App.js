import "./App.css";
import Home from "./pages/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./component/Navbar";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./component/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
