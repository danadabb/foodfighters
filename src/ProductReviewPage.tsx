import { Button, DatePicker, TimePicker, Typography } from "antd";
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
  const [date, setDate] = useSessionStorage<string>("pickupDate", "");
  const [time, setTime] = useSessionStorage<string>("pickupTime", "");

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

      <BackConfirmButtonGroup
        quantity={confirmedQuantity}
        date={date}
        time={time}
        productId={params.id!}
      />
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
  setDate: (value: string) => void;
  time: string;
  setTime: (value: string) => void;
}) {
  return (
    <div className="ProductReviewPage-datetime-container">
      <DatePicker
        size="large"
        className="ProductReviewPage-datetime-field"
        onChange={(val) => {
          if (!val) return;
          setDate(val.format("DD/MM/YYYY"));
        }}
      />
      <TimePicker
        size="large"
        className="ProductReviewPage-datetime-field"
        showSecond={false}
        onChange={(val) => {
          if (!val) return;
          setTime(val.format("hh:mm a"));
        }}
      />
    </div>
  );
}

function BackConfirmButtonGroup({
  quantity,
  date,
  time,
  productId,
}: {
  quantity: number;
  date: string;
  time: string;
  productId: string;
}) {
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
        disabled={Boolean(
          quantity === 0 || date.length === 0 || time.length === 0
        )}
      >
        <Link to={`/confirm/${productId}`}>Confirm</Link>
      </Button>
    </div>
  );
}
