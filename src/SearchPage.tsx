import React from "react";
import Search from "./components/Search";
import { Row, Col } from "antd";

const SearchPage = () => {
  return (
    <Row justify="center">
      <Col span={24}>
        <Search />
      </Col>
    </Row>
  );
};

export default SearchPage;
