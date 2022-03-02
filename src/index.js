import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Login";
import Home from "./Home";
import Login1 from "./Login1";
import Recruitprocess from "./Recruitprocess";
import Recruiterpage from "./Recruiterpage";
import Studentpage from "./Studentpage";
import Form from "./Form";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/login1" element={<Login1 />} />
        <Route path="/" element={<Home />} />
        <Route path="/recruitprocess" element={<Recruitprocess />} />
        <Route path="/recruiterpage" element={<Recruiterpage />} />
        <Route path="/studentpage" element={<Studentpage />} />
        <Route path="/form" element={<Form />} />

      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
