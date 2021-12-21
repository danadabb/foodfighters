import React from "react";
import { Button, Divider } from "antd";
import { Link } from "react-router-dom";
import FoodCard from "./components/FoodCard";
import data from "././utils/mockCardData.json";

function AccountPage() {
  var foodlist = Object.entries(data);

  return (
    <>
      <h1>Welcome, Jane!</h1>
        <Link to="/search">
          <Button type="primary" block size="large">
            Search for food listings
          </Button>
        </Link>
        <Divider type="vertical" />
        <Link to="/donate">
          <Button type="primary" block size="large">
            Donate
          </Button>
        </Link>
      <Divider type="vertical" />
      <h3>My Listings</h3>
      {foodlist.slice(0, 2).map(([id, val]) => (
        <FoodCard
          foodId={id}
          cardTitle={val.title}
          expiryDate={val.expiryDate}
          brandName={val.brandName}
          foodImage={val.pictureUrl}
        />
      ))}
    </>
  );
}

export default AccountPage;