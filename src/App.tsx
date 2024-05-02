import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";

import Lotery from "./pages/lotery";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pixie" element={<Lotery/>} />
        <Route path="/forms" element={<Lotery/>} />
       
      </Routes>
    </Router>
  );
};

export default App;
