import { PageHeader } from "antd";
import { MenuOutlined } from '@ant-design/icons';
import Logo from "./components/Logo";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <PageHeader style={{ margin: 0, paddingLeft: 0 }}>
      <Link to="/search">
        <Logo />
      </Link>
      <Link to="/account">
      <MenuOutlined style={{float:'right', fontSize:'20px', color:'#520339'}} />
      </Link>
     
    </PageHeader>
  );
}
