import React from "react";
import Search from "./components/Search";
import Listings from "./components/Listings";
import { Row, Col } from "antd";

const SearchPage = () => {

  return (
    <Row justify="center">
      <Col span={24}>
        <Search />
        <Listings />
      </Col>
    </Row>
  );
};

export default SearchPage;
