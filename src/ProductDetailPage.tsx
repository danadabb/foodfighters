import { Button, Image, Typography } from "antd";
import { Link, useParams } from "react-router-dom";
import { ProductQuantitySelector } from "./components/ProductQuantitySelector";
import foodList from "./utils/mockCardData.json";

type ProductProps = {
  title: string;
  expiryDate: string;
  brandName: string;
  description: string;
  pictureUrl: string;
  productQuantity: number;
};

export function ProductDetailPage() {
  const params = useParams();
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
    <>
      <Typography.Title level={2}>{title}</Typography.Title>
      <Typography.Paragraph>{description}</Typography.Paragraph>

      <Typography.Title level={4}>Expiry date</Typography.Title>
      <Typography.Paragraph>{expiryDate}</Typography.Paragraph>

      <Typography.Title level={4}>Brand Name</Typography.Title>
      <Typography.Paragraph>{brandName}</Typography.Paragraph>

      <div className="ProductDetailPage-product-image-container">
        <Image
          src={`${process.env.PUBLIC_URL}/${pictureUrl}`}
          alt={title}
          width="70%"
        />
      </div>

      <ProductQuantitySelector availableQuantity={productQuantity} />

      <BackNextButtonGroup />
    </>
  );
}

function BackNextButtonGroup() {
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
      >
        Next
      </Button>
    </div>
  );
}
