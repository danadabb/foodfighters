import { Button, Divider, Typography } from "antd";
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

export function ProductConfirmationPage() {
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
    <div className="ProductConfirmationPage-container">
      <div>
        <Typography.Title level={2}>Confirmation!</Typography.Title>
        <Typography.Paragraph>
          We have let the donor know that you are interested in their {title}{" "}
          listing to pick up on {date} at {time}.
        </Typography.Paragraph>
        <Typography.Paragraph>
          We will let you know if they accept your invite. Keep an eye on your
          notifications.
        </Typography.Paragraph>
        <Divider />

        <Typography.Title level={4}>My requests</Typography.Title>

        <FoodCard
          hideDeleteIcon
          pickupDate={date}
          pickupTime={time}
          cardTitle={title}
          foodId={params.id!}
          foodImage={pictureUrl}
          quantity={confirmedQuantity}
          setQuantity={setConfirmedQuantity}
        />
      </div>

      <Link to="/account">
        <Button type="primary" block size="large">
          Back to my account
        </Button>
      </Link>
    </div>
  );
}
