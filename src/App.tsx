import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./LandingPage";
import SearchPage from "./SearchPage";
import { Header } from "./Header";
import { Layout } from "antd";
import { LoginPage } from "./LoginPage";
import { ProductDetailPage } from "./ProductDetailPage";
import ManualDonatePage from "./ManualDonatePage";
// import { LoginPage } from "./LoginPage";
// import {AccountPage} from './AccountPage';
import AccountPage from "./AccountPage";
import { ProductReviewPage } from "./ProductReviewPage";

function App() {
  const { Content } = Layout;
  return (
    <BrowserRouter>
      <Layout className="App-root-element">
        <Header />
        <Content>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/donate" element={<ManualDonatePage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/review/:id" element={<ProductReviewPage />} />
          </Routes>
        </Content>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
