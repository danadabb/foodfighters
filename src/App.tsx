import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./LandingPage";
import { Header } from "./Header";
import { Layout } from 'antd';
// import { LoginPage } from "./LoginPage";

function App() {
  const { Content } = Layout;
  return (
    <BrowserRouter>
      <Layout className="App-root-element">
        <Header/>
        <Content>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            {/* <Route path="/login" element={<LoginPage />} /> */}
          </Routes>
        </Content>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
