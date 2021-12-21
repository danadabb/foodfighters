import { Button, DatePicker, Input, TimePicker, Typography } from "antd";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSessionStorage } from "react-use";
import foodList from "./utils/mockCardData.json";
import FoodCard from "./components/FoodCardSmall";

type ProductProps = {
  title: string;
  expiryDate: string;
  brandName: string;
  description: string;
  pictureUrl: string;
  productQuantity: number;
  streetName: string;
  postCode: string;
};

export function ProductReviewPage() {
  const [confirmedQuantity, setConfirmedQuantity] = useSessionStorage<number>(
    "confirmedQuantity",
    0
  );
  const params = useParams();
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");

  const { title, pictureUrl, postCode, streetName } = Object.entries(
    foodList as Record<string, any>
  ).find((entry) => entry[0] === params.id)![1] as ProductProps;

  return (
    <div className="ProductReviewPage-container">
      <Typography.Title level={2}>Product Review</Typography.Title>
      {confirmedQuantity === 0 && (
        <Typography.Paragraph>
          There an no listings to display
        </Typography.Paragraph>
      )}
      {confirmedQuantity > 0 && (
        <div className="ProductReviewPage-info-container">
          <FoodCard
            setQuantity={setConfirmedQuantity}
            cardTitle={title}
            foodId={params.id!}
            foodImage={pictureUrl}
            quantity={confirmedQuantity}
          />
          <Typography.Title level={4}>Pick Up Location</Typography.Title>

          <Typography.Title level={5}>Street name</Typography.Title>
          <Typography.Paragraph>{streetName}</Typography.Paragraph>

          <Typography.Title level={5}>Postal code</Typography.Title>
          <Typography.Paragraph>{[postCode]}</Typography.Paragraph>

          <Typography.Title level={4}>Choose a date and time</Typography.Title>

          <DateTimeSelectors
            date={date}
            time={time}
            setDate={setDate}
            setTime={setTime}
          />
        </div>
      )}

      <BackConfirmButtonGroup quantity={confirmedQuantity} />
    </div>
  );
}

function DateTimeSelectors({
  date,
  time,
  setDate,
  setTime,
}: {
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
  time: string;
  setTime: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="ProductReviewPage-datetime-container">
      <DatePicker
        size="large"
        className="ProductReviewPage-datetime-field"
        onChange={(val) => setDate(val?.toString() ?? "")}
      />
      <TimePicker
        size="large"
        className="ProductReviewPage-datetime-field"
        showSecond={false}
        onChange={(val) => setTime(val?.toString() ?? "")}
      />
    </div>
  );
}

function BackConfirmButtonGroup({ quantity }: { quantity: number }) {
  return (
    <div className="ProductDetailPage-back-next-button-group">
      <Button
        type="ghost"
        block
        size="large"
        className="ProductDetailPage-back-next-button-group__button"
      >
        <Link to="/search">Back</Link>
      </Button>
      <Button
        type="primary"
        block
        size="large"
        className="ProductDetailPage-back-next-button-group__button"
        disabled={Boolean(quantity === 0)}
      >
        Confirm
      </Button>
    </div>
  );
}
