import { Button, Typography } from "antd";
import { Link, useParams } from "react-router-dom";
import { ProductQuantitySelector } from "./components/ProductQuantitySelector";
import foodList from "./utils/mockCardData.json";
import { useSessionStorage } from "react-use";
import { useState } from "react";

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

export function ProductDetailPage() {
  const params = useParams();
  const [selectedQuantity, setSelectedQuantity] = useState<number>(0);
  const {
    title,
    description,
    expiryDate,
    brandName,
    pictureUrl,
    productQuantity,
  } = Object.entries(foodList as Record<string, any>).find(
    (entry) => entry[0] === params.id
  )![1] as ProductProps;

  return (
    <div className="ProductDetailPage-container">
      <div>
        <Typography.Title level={2}>{title}</Typography.Title>
        <Typography.Paragraph>{description}</Typography.Paragraph>

        <Typography.Title level={4}>Expiry date</Typography.Title>
        <Typography.Paragraph>{expiryDate}</Typography.Paragraph>

        <Typography.Title level={4}>Brand Name</Typography.Title>
        <Typography.Paragraph>{brandName}</Typography.Paragraph>

        <div className="ProductDetailPage-product-image-container">
          <img
            src={`${process.env.PUBLIC_URL}/${pictureUrl}`}
            alt={title}
            width="70%"
          />
        </div>

        <ProductQuantitySelector
          availableQuantity={productQuantity}
          selectedQuantity={selectedQuantity}
          dispatcher={setSelectedQuantity}
        />
      </div>

      <BackNextButtonGroup
        selectedQuantity={selectedQuantity}
        productId={params.id!}
      />
    </div>
  );
}

function BackNextButtonGroup({
  productId,
  selectedQuantity,
}: {
  selectedQuantity: number;
  productId: string;
}) {
  const [confirmedQuantity, setConfirmedQuantity] = useSessionStorage<number>(
    "confirmedQuantity",
    0
  );

  const addToCart = () => {
    setConfirmedQuantity(selectedQuantity);
    window.history.pushState(null, "", `/review/${productId}`);
    window.location.href = `/review/${productId}`;
  };

  return (
    <div className="ProductDetailPage-back-next-button-group">
      <Button
        type="ghost"
        block
        size="large"
        className="ProductDetailPage-back-next-button-group__button"
      >
        <Link to="/account">Back</Link>
      </Button>
      <Button
        type="primary"
        block
        size="large"
        className="ProductDetailPage-back-next-button-group__button"
        disabled={Boolean(selectedQuantity === 0)}
        onClick={() => addToCart()}
      >
        Next
      </Button>
    </div>
  );
}
