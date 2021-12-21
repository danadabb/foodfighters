import { Button, Col, Input, Row, Form, DatePicker } from "antd";
import { Link } from "react-router-dom";

const ManualDonatePage = () => {
  return (
    <>
      <Row justify="center" style={{ marginTop: "40px" }}>
        <Col span={20}>
          <Form layout="vertical">
            <Form.Item label="Product Name" required>
              <Input placeholder="Product Name" />
            </Form.Item>
            <Form.Item label="Manufacturer" required>
              <Input placeholder="Manufacturer" />
            </Form.Item>
            <Form.Item label="Product Name" required>
              <DatePicker />
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <Row justify="space-around">
        <Col span={20}>
          <Button
            ghost
            type="primary"
            style={{
              width: "48%", // TODO this is garbage
              marginRight: "4%",
            }}
          >
            Back
          </Button>
          <Button style={{ width: "48%" }} type="primary">
            Submit
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default ManualDonatePage;
