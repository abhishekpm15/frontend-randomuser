import "./App.css";
import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserPhotos from "./Pages/UserPhotos";
import Documentation from "./Pages/Documentation";
import ChangeLog from "./Pages/ChangeLog";
import StatsGraphs from "./Pages/StatsGraphs";
import Donate from "./Pages/Donate";
import Copyright from "./Pages/Copyright";
import Photoshop from "./Pages/Photoshop";
import Update from "./Pages/Update";
import Create from "./Pages/Create";
import Delete from "./Pages/Delete";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "./Pages/Search";
// import Search from "./Pages/Search";
export const Context = React.createContext();

function App() {
  const url = "https://snab-backend.herokuapp.com/get";
  const [datas, setDatas] = useState(null);
  // const empty ={}

  // const myJSON = JSON.stringify(empty)
  useEffect(() => {
    axios.get(url).then((response) => {
      setDatas(response.data);
    },(error)=>{
      console.log(error)
    });
  }, [url]);
  return (
    <div className="App">
      <Context.Provider value={datas}>
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
            <Route path="/Update" element={<Update />} />
            <Route path="/Create" element={<Create />} />
            <Route path="/Delete" element={<Delete />} />
            <Route path="/Search" element={<Search />} />
          </Routes>
        </Router>
      </Context.Provider>
    </div>
  );
}

export default App;
