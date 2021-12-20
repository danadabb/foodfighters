import React from "react";
import { Button, Typography, Image } from "antd";
import { Link } from "react-router-dom";

export function LandingPage() {
  return (
    <>
      <Typography className="LandingPage-header">Food fighters</Typography>
      <img
        className="LandingPage-graphics"
        src={`${process.env.PUBLIC_URL}/landing-page-graphics.png`}
      />
      <Link to="login">
        <Button type="primary" block size="large">
          Get started
        </Button>
      </Link>
    </>
  );
}
