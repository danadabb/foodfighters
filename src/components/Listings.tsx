import React from "react";
import FoodCard from "./FoodCard";
import mockCardData from "../utils/mockCardData.json";

const Listings = (): JSX.Element => {
  const listings = mockCardData;

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
    </>
  );
};

export default Listings;
