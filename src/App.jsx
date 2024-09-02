import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Second from "./Pages/Second";

function App() {
  return (
    <Router basename="/Password_Generator">
      {/* Set the basename here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/second" element={<Second />} />
      </Routes>
    </Router>
  );
}

export default App;
