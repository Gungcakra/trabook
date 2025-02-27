// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/layout/NavBar";
// import Navbar from "./components/layout/NavBar";

function App() {
  return (
    // <Router>
    //     <Navbar />
    //     <div className="w-full h-screen bg-white flex flex-col items-center">
    //       <Routes>
    //         <Route path="/" element={<Home />} />
    //         <Route path="/about" element={<About />} />
    //         <Route path="/contact" element={<Contact />} />
    //       </Routes>
    //     </div>
    //   </Router>

    <div className="w-full h-screen bg-white flex flex-col items-center">
      <Navbar />
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;
