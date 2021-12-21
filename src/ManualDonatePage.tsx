import { Button, Col, Input, Row, Form, DatePicker, AutoComplete } from "antd";
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
            <Form.Item label="Pickup Location" required>
              <AutoComplete options={[{ value: "123 Fake Street" }]} />
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <Row justify="space-around">
        <Col span={20}>
          <Link to="/account">
            <Button
              ghost
              type="primary"
              style={{
                width: "48%", // flex was giving me grief, TODO: fix this
                marginRight: "4%",
              }}
            >
              Back
            </Button>
          </Link>
          <Link to="/account?donated=true">
            <Button style={{ width: "48%" }} type="primary">
              Submit
            </Button>
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default ManualDonatePage;
