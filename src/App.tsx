import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./LandingPage";
import { Header } from "./Header";
import { LoginPage } from "./LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App-root-element">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
