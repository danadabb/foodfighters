import { Tabs } from "antd";
import { useRef, useState } from "react";
import { LoginTab } from "./components/LoginTab";
import { SignUpTab } from "./components/SignUpTab";

const { TabPane } = Tabs;

export function LoginPage() {
  const [activeTabKey, setActiveTabKey] = useState<string>("1");
  const tabRef = useRef(setActiveTabKey);
  return (
    <>
      <Tabs
        defaultActiveKey="1"
        centered
        activeKey={activeTabKey}
        onChange={(val) => setActiveTabKey(val)}
      >
        <TabPane tab="Login" key="1">
          <LoginTab tabRef={tabRef} />
        </TabPane>
        <TabPane tab="Sign up" key="2">
          <SignUpTab />
        </TabPane>
      </Tabs>
    </>
  );
}
