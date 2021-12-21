import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Input } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

export function LoginTab({
  tabRef,
}: {
  tabRef: React.MutableRefObject<React.Dispatch<React.SetStateAction<string>>>;
}) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <>
      <Input
        placeholder="username"
        size="large"
        prefix={<UserOutlined />}
        className="LoginPage-Input"
        onChange={(ev) => {
          setUsername(ev.currentTarget.value);
        }}
      />
      <Input.Password
        placeholder="password"
        size="large"
        prefix={<LockOutlined />}
        className="LoginPage-Input"
        onChange={(ev) => {
          setPassword(ev.currentTarget.value);
        }}
      />
      <a href="#">Forgot your password?</a>
      <div className="LoginPage-checkox-container">
        <Checkbox>Remember me</Checkbox>
      </div>
      <Link to={`/account?name=${username}`}>
        <Button
          type="primary"
          block
          size="large"
          disabled={Boolean(!username || !password)}
        >
          Sign in
        </Button>
      </Link>
      <Button
        block
        size="large"
        type="text"
        onClick={() => tabRef.current("2")}
      >
        Sign up
      </Button>
    </>
  );
}
