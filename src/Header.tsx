import { PageHeader } from "antd";
import Logo from './components/Logo';
import {Link} from 'react-router-dom';

export function Header() {
  return <PageHeader>
    <Link to='/search'>
      <Logo/>
    </Link>
  </PageHeader>;
}
