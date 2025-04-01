import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Form from "./pages/form";
import Thanks from "./pages/thanks";
import Acredit from "./pages/acredit";
import Welcome from "./pages/welcome";
import RegisAndAcredit from "./pages/regisandacredit";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Form />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="/acredits" element={<Acredit />} />
        <Route path="/registandacredit" element={<RegisAndAcredit />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </Router>
  );
};

export default App;
