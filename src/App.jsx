// export default App;
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Information from "./pages/Information"
import Tahapan1 from "./pages/Tahapan1";
import Tahapan2 from "./pages/Tahapan2";  
import Tahapan3 from "./pages/Tahapan3";
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
        <Route path="/Tahapan1" element={<Tahapan1   />}/>
        <Route path="/AboutUs" element={<AboutUs />}/>
        <Route path="/Tahapan2" element={<Tahapan2 />}/>
        <Route path="/Tahapan3" element={<Tahapan3 />}/>  
        <Route path="/Games1" element={<Games1 />}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;