import React from "react";
import { Typography } from "antd";
import FoodCard from "./FoodCard";
import mockCardData from "../utils/mockCardData.json";

const Listings = (): JSX.Element => {
  const listings = mockCardData;
  const { Title, Text } = Typography;

  // todo - default sort?

  return (
    <>
      {Object.entries(listings)
        .sort()
        .map(([id, listing]) => {
          return (
            <FoodCard
              cardTitle={listing.title}
              expiryDate={listing.expiryDate}
              brandName={listing.brandName}
              foodImage={listing.pictureUrl}
              foodId={id}
            />
          );
        })}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Title level={4} style={{ marginTop: "20px" }}>
          That's all the listings!
        </Title>
      </div>
    </>
  );
};

export default Listings;
