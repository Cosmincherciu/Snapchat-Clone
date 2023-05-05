import React from "react";
import "./App.css";
import WebcamCapture from "./WebcamCapture";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Preview from "./Preview";
import Chat from "./Chat";

function App() {
  return (
    <div className="app">
      <Router>
        <div className="app__body">
          <Routes>
            <Route path="/chat" element={<Chat />}></Route>
            <Route exact path="/test" element={<h1>Sup</h1>}></Route>
            <Route exact path="/preview" element={<Preview />}></Route>
            <Route exact path="/" element={<WebcamCapture />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
