import React, { useState } from "react";
import Search from "./components/Search";
import Listings from "./components/Listings";
import { Row, Col } from "antd";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const setTerm = (data: string) => {
    setSearchTerm(data.toLowerCase());
  };
  return (
    <Row justify="center">
      <Col span={24}>
        <Search onSearchTerm={setTerm} />
        <Listings searchTerm={searchTerm} />
      </Col>
    </Row>
  );
};

export default SearchPage;
