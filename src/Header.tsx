import { Col, PageHeader, Row } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Logo from "./components/Logo";
import { Link } from "react-router-dom";
import Icon from "@ant-design/icons";
import { useLocation } from "react-use";

export function Header() {
  const location = useLocation();
  console.log(location);
  return (
    <PageHeader style={{ margin: 0, paddingLeft: 0 }}>
      <Row justify="space-between">
        <Col>
          <Link to="/search">
            <Logo />
          </Link>
        </Col>

        <Col style={{ alignItems: "center" }}>
          {/* {location.pathname !== "/" && (
            <Icon
              style={{ marginRight: 10 }}
              component={() => (
                <img
                  src={`${process.env.PUBLIC_URL}/avatar.png`}
                  alt="avatar"
                  style={{ verticalAlign: "sub" }} // alignment being garbage
                />
              )}
            />
          )} */}
          <Link to="/account">
            <MenuOutlined style={{ fontSize: 20, color: "#520339" }} />
          </Link>
        </Col>
      </Row>
    </PageHeader>
  );
}
