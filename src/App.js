import "./App.css";
import DayDetail from "./DayDetail/DayDetail";
import Display from "./DisplayInfo/Display";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Display />} />
          <Route exact path="days/:id" element={<DayDetail/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
