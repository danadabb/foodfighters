import React from "react";
import { Typography } from "antd";
import FoodCard from "./FoodCard";
import mockCardData from "../utils/mockCardData.json";

type Props = {
  searchTerm: string;
};

type Listing = {
  title: string;
  expiryDate: string;
  brandName: string;
  description: string;
  pictureUrl: string;
  productQuantity: number;
};

const Listings = ({ searchTerm }: Props): JSX.Element => {
  const listings = mockCardData;
  const { Title, Text } = Typography;

  const listingMatches = ([_, listing]: [any, Listing]) => {
    if (searchTerm === "") {
      return true;
    }

    return (
      listing.title.toLowerCase().match(searchTerm) ||
      listing.description.toLowerCase().match(searchTerm)
    );
  };

  // todo - default sort?

  return (
    <>
      {Object.entries(listings)
        .filter(listingMatches)
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
