import { Typography } from "antd";
import { useParams } from "react-router-dom";
import foodList from "./utils/mockCardData.json";

export function ProductDetailPage() {
  const params = useParams();
  const product = Object.entries(foodList as Record<string, any>).find(
    (entry) => entry[0] === params.id
  )![1];
  console.log(product);

  return (
    <>
      <Typography.Title></Typography.Title>
    </>
  );
}
