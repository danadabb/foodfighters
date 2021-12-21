import React from "react";
import { Button, Typography } from "antd";
import { Link } from "react-router-dom";

export function LandingPage() {
  return (
    <div className="LandingPage-container">
      <Typography className="LandingPage-header">Food fighters</Typography>
      <img
        alt="main page with fruit and veggies"
        className="LandingPage-graphics"
        src={`${process.env.PUBLIC_URL}/landing-page-graphics.png`}
      />
      <Link to="login">
        <Button
          type="primary"
          block
          size="large"
          className="LandingPage-getting-started-button"
        >
          Get started
        </Button>
      </Link>
    </div>
  );
}
