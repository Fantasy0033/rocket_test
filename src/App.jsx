import "./App.scss";
import Home from "./pages/home/Home";
import Rocket from "./pages/rocket/Rocket";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rocket/:id" element={<Rocket />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
