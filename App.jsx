
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Navbar from "./nodule/Navbar"
import Home from "./module-home/Home";
import About from "./module-About/About";
import Courses from "./module-Courses/Courses";
import Trainers from "./module-Trainers/Trainers";
import Events from "./module.Events/Events";
import Pricing from "./module-Pricing/Pricing";
import Contact from "./module-Contact/Contact";
function App() {
  return (
    <>
       <Router>
      <Navbar />
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/Courses" element={<Courses />} />
         <Route path="/Trainers" element={< Trainers/>} />
         <Route path="/Events" element={< Events/>} />
         <Route path="/Pricing" element={< Pricing/>} />
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
    </Router>


      </>
  );
}

export default App
