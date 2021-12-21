import React from "react";
import { Button, Card, Typography } from "antd";
import { Link } from "react-router-dom";
import { DeleteOutlined } from "@ant-design/icons";

type foodCardProps = {
  cardTitle: string;
  foodImage: string;
  foodId: string;
  quantity: number;
  setQuantity: (value: number) => void;
  hideDeleteIcon?: boolean;
  pickupDate?: string;
  pickupTime?: string;
};

const FoodCardSmall = ({
  cardTitle,
  foodImage,
  foodId,
  quantity,
  setQuantity,
  hideDeleteIcon,
  pickupDate,
  pickupTime,
}: foodCardProps): JSX.Element => {
  const { Title, Text } = Typography;

  const textBlue = "#002766";

  const foodCardContentStyle = {
    display: "flex",
    flexDirection: "row" as "row",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "100%",
    padding: "5px",
  };

  const foodCardImageContainerStyle = {
    padding: 0,
    margin: 0,
    width: "60px",
    height: "80px",
    backgroundColor: "white",
  };

  const foodCardInfoStyle = {
    display: "flex",
    flex: "1 1 auto",
    flexDirection: "column" as "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginLeft: "15px",
    maxWidth: "80%",
  };

  const foodCardInfoGroupStyle = {
    display: "flex",
  };

  return (
    <>
      <Card
        size="small"
        style={{
          margin: "10px auto",
          backgroundColor: "#E6F7FF",
          border: "1px solid black",
        }}
      >
        <div style={foodCardContentStyle}>
          <div style={foodCardImageContainerStyle}>
            <img
              src={`${process.env.PUBLIC_URL}/${foodImage}`}
              alt={`${cardTitle}`}
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
            />
          </div>
          <div style={foodCardInfoStyle}>
            <Title level={4} style={{ color: textBlue }}>
              {cardTitle}
            </Title>
            <div style={foodCardInfoGroupStyle}>
              <Text type="secondary">Quantity: </Text>
              <Text strong style={{ color: textBlue }}>
                {quantity}
              </Text>
            </div>
            {pickupDate && pickupDate.length > 0 && (
              <div style={foodCardInfoGroupStyle}>
                <Text type="secondary">Pickup date: </Text>
                <Text strong style={{ color: textBlue }}>
                  {pickupDate}
                </Text>
              </div>
            )}
            {pickupTime && pickupTime.length > 0 && (
              <div style={foodCardInfoGroupStyle}>
                <Text type="secondary">Pickup date: </Text>
                <Text strong style={{ color: textBlue }}>
                  {pickupTime}
                </Text>
              </div>
            )}
          </div>
          <Button
            hidden={hideDeleteIcon}
            icon={<DeleteOutlined />}
            type="text"
            onClick={() => setQuantity(0)}
          />
        </div>
      </Card>
    </>
  );
};

export default FoodCardSmall;
