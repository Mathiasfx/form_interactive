import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Form from "./pages/form";
import Thanks from "./pages/thanks";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Form />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </Router>
  );
};

export default App;
