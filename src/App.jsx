// import React from "react";
// import SignUp from "./pages/SignUp";


// function App() {
//   const navigate = useNavigate();

//   return (
//     <>
//       <SignUp />
//     </>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
// import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/LogIn" element={<LogIn />} />
        {/* <Route path="/home" element={<Home />} /> */}
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;