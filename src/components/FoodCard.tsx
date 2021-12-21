import React from "react";
import { Card } from "antd";

type foodCardProps = {
    cardTitle: string,
    expiryDate: string,
    brandName: string,
    foodImage: string,
}

const FoodCard = ({cardTitle, expiryDate, brandName, foodImage}: foodCardProps): JSX.Element => {

  const foodCardInfoStyle = {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  }

const foodCardInfoGroupStyle = {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "center",
    alignItems: "flex-start",
}

  return (
    <>
      <Card
        size="small"
        style={{ maxWidth: "400px", margin: "0 auto" }}
      >
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '250px'}}>
            <img src={foodImage} height={150} alt={`${cardTitle}`} />
            <div style={foodCardInfoStyle}>
                  <p style={{fontWeight: "bold", fontSize: "1.2rem"}}>{cardTitle}</p>
                <div style={foodCardInfoGroupStyle}>
                  <p>Expiry Date:</p>
                  <p style={{fontWeight: "bold"}}>{expiryDate}</p>
                </div>
                <div style={foodCardInfoGroupStyle}>
                  <p>Brand:</p>
                  <p style={{fontWeight: "bold"}}>{brandName}</p>
                </div>
            </div>
        </div>
      </Card>
    </>
  );
};

export default FoodCard;