import { PageHeader } from "antd";
import Logo from "./components/Logo";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <PageHeader style={{ margin: 0, paddingLeft: 0 }}>
      <Link to="/search">
        <Logo />
      </Link>
    </PageHeader>
  );
}
