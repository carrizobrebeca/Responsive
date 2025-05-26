import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Landing from "./Components/Views/Landing";
import Home from "./Components/Views/Home";
import Login from "./Components/Views/Login";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
   
      </Routes>
    </Router>
  );
}

export default App;
