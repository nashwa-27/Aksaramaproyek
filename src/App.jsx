// export default App;
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Information from "./pages/Information"
import Tahapan from "./pages/Tahapan";
import AboutUs from "./pages/AboutUS";
import Games1 from "./pages/Games1";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Information" element={<Information />}/>
        <Route path="/Tahapan" element={<Tahapan />}/>
        <Route path="/AboutUs" element={<AboutUs />}/>
        <Route path="/Games" element={<Information />}/>
        <Route path="/Games1" element={<Games1 />}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;