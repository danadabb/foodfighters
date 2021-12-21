import React from "react";
import { Button} from "antd";
import { Link } from "react-router-dom";

function AccountPage() {
  return (
    <>
      <h2>WELCOME,xx!</h2>
      <Link to="/">
        <Button type="primary" block size="large" >
          Donate

        </Button>
      </Link>
    </>
  );
};

export default AccountPage;
