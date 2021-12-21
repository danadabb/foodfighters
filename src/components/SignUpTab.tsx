import { MobileOutlined, MailOutlined } from "@ant-design/icons";
import { Input, Button, Checkbox } from "antd";
import { useState } from "react";

export function SignUpTab() {
  const [phone, setPhone] = useState<string>("");
  const [verificationCode, setVerificationCode] = useState<string>("");
  const [isTerms, setIsTerms] = useState<boolean>(false);
  const [isPrivacy, setIsPrivacy] = useState<boolean>(false);

  return (
    <>
      <Input
        placeholder="Phone number"
        size="large"
        prefix={<MobileOutlined />}
        className="LoginPage-Input"
        onChange={(ev) => setPhone(ev.currentTarget.value)}
      />
      <div className="LoginPage-get-code-container">
        <Input
          placeholder="Verification code"
          size="large"
          prefix={<MailOutlined />}
          className="LoginPage-Input"
          onChange={(ev) => setVerificationCode(ev.currentTarget.value)}
        />
        <Button size="large" className="LoginPage-get-code-button">
          Get code
        </Button>
      </div>
      <div className="LoginPage-checkox-container">
        <Checkbox onChange={(ev) => setIsTerms(ev.target.checked)}>
          I agree to the <a href="#">Terms and Conditions</a>
        </Checkbox>
      </div>
      <div className="LoginPage-checkox-container">
        <Checkbox onChange={(ev) => setIsPrivacy(ev.target.checked)}>
          I have read and agree with the <a href="#">Privacy Policy</a>
        </Checkbox>
      </div>
      <Button
        type="primary"
        block
        size="large"
        disabled={Boolean(
          !phone || !verificationCode || !isTerms || !isPrivacy
        )}
      >
        Sign up
      </Button>
    </>
  );
}
