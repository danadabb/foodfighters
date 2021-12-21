import React from "react";
import { Card, Typography } from "antd";
import { Link } from "react-router-dom";

type foodCardProps = {
  cardTitle: string;
  expiryDate: string;
  brandName: string;
  foodImage: string;
  foodId: string;
};

const FoodCard = ({
  cardTitle,
  expiryDate,
  brandName,
  foodImage,
  foodId,
}: foodCardProps): JSX.Element => {
  const { Title, Text } = Typography;

  const textBlue = "#002766";

  const foodCardContentStyle = {
    display: "flex",
    flexDirection: "row" as "row",
    justifyContent: "flex-start",
    alignItems: "center",
    maxWidth: "100%",
    padding: "5px",
  };

  const foodCardImageContainerStyle = {
    padding: 0,
    margin: 0,
    width: "100px",
    height: "120px",
    backgroundColor: "white",
  };

  const foodCardInfoStyle = {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginLeft: "15px",
    maxWidth: "80%",
  };

  const foodCardInfoGroupStyle = {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "center",
    alignItems: "flex-start",
  };

  return (
    <>
      <Card
        size="small"
        style={{
          maxWidth: "500px",
          margin: "10px auto",
          backgroundColor: "#E6F7FF",
          border: "1px solid black",
        }}
      >
        <Link to={`/product/${foodId}`}>
          <div style={foodCardContentStyle}>
            <div style={foodCardImageContainerStyle}>
              <img
                src={foodImage}
                alt={`${cardTitle}`}
                style={{ height: "100%", width: "100%", objectFit: "contain" }}
              />
            </div>
            <div style={foodCardInfoStyle}>
              <Title level={3} style={{ color: textBlue }}>
                {cardTitle}
              </Title>
              <div style={foodCardInfoGroupStyle}>
                <Text type="secondary">Expiry Date</Text>
                <Text strong style={{ color: textBlue }}>
                  {expiryDate}
                </Text>
              </div>
              <div style={foodCardInfoGroupStyle}>
                <Text type="secondary">Brand</Text>
                <Text strong style={{ color: textBlue }}>
                  {brandName}
                </Text>
              </div>
            </div>
          </div>
        </Link>
      </Card>
    </>
  );
};

export default FoodCard;
