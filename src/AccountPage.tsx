import React from "react";
import { Button, Col, Divider, Row, Typography } from "antd";
import { Link, useLocation } from "react-router-dom";
import FoodCard from "./components/FoodCard";
import data from "././utils/mockCardData.json";
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function AccountPage() {
  const { Title, Paragraph } = Typography;

  var foodlist = Object.entries(data);
  let query = useQuery();
  const username = query.get("username") ?? "Jane";
  const successfulDonate = query.get("donated");

  return (
    <>
      {successfulDonate ? (
        <>
          <Title level={3}>Thanks for your donation!</Title>
          <Paragraph>
            Your active listings will appear in your account page. We will
            notify you if someone is interested in your products.
          </Paragraph>
        </>
      ) : (
        <Title>Welcome, {username}!</Title>
      )}
      <Row justify="space-around">
        <Col span={11}>
          <Link to="/donate">
            <Button type="primary" block size="large">
              Donate
            </Button>
          </Link>
        </Col>
        <Col span={11}>
          <Link to="/search">
            <Button block size="large">
              Search Listings
            </Button>
          </Link>
        </Col>
      </Row>
      <Divider />
      <h3>My Listings</h3>
      {foodlist.slice(0, 2).map(([id, val]) => (
        <FoodCard
          foodId={id}
          cardTitle={val.title}
          expiryDate={val.expiryDate}
          brandName={val.brandName}
          foodImage={val.pictureUrl}
          deleteButton
        />
      ))}
    </>
  );
}

export default AccountPage;
