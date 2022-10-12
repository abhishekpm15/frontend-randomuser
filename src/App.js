import "./App.css";
import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserPhotos from "./Pages/UserPhotos";
import Documentation from "./Pages/Documentation";
import ChangeLog from "./Pages/ChangeLog";
import StatsGraphs from "./Pages/StatsGraphs";
import Donate from "./Pages/Donate";
import Copyright  from "./Pages/Copyright";
import Photoshop from "./Pages/Photoshop";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/UserPhotos" element={<UserPhotos />} />
          <Route path="/Documentation" element={<Documentation />} />
          <Route path="/ChangeLog" element={<ChangeLog />} />
          <Route path="/StatsGraphs" element={<StatsGraphs />} />
          <Route path="/Donate" element={<Donate />} />
          <Route path="/Copyright" element={<Copyright />} />
          <Route path="/Photoshop" element={<Photoshop />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
