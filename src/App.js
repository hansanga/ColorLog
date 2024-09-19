import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Summer from "./pages/summer";
// import Spring from "./pages/spring";
// import Autumn from "./pages/autumn";
// import Winter from "./pages/winter";
// import Test from "./pages/test";
// import TestGet from "./pages/testget";
// import Photo from "./pages/photo";
// import UserPage from "./pages/userPage.jsx";
import Main from "./pages/ver2/ver2.js";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/user/:userId" element={<UserPage />} /> */}
        <Route path="/" element={<Main />} />
        {/* <Route path="/spring" element={<Spring />} />
        <Route path="/summer" element={<Summer />} />
        <Route path="/autumn" element={<Autumn />} />
        <Route path="/winter" element={<Winter />} />
        <Route path="/test" element={<Test />} />
        <Route path="/testget" element={<TestGet />} />
        <Route path="/photo" element={<Photo />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import UserPage from "./pages/userPage.jsx";
// import Main from "./pages/main.jsx";

// import "./App.css";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/user/:userId" element={<UserPage />} />
//         <Route path="/" element={<Main />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
