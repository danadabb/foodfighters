import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";

export function ProductQuantitySelector({
  availableQuantity,
  selectedQuantity,
  dispatcher,
}: {
  availableQuantity: number;
  selectedQuantity: number;
  dispatcher: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="ProductQuantitySelector-container">
      <Button
        icon={<MinusOutlined />}
        size="large"
        shape="circle"
        disabled={Boolean(selectedQuantity === 0)}
        onClick={() => dispatcher(selectedQuantity - 1)}
      />

      <Typography className="ProductQuantitySelector-quantity-indicator">
        {selectedQuantity}
      </Typography>

      <Button
        icon={<PlusOutlined />}
        size="large"
        shape="circle"
        disabled={Boolean(selectedQuantity === availableQuantity)}
        onClick={() => dispatcher(selectedQuantity + 1)}
      />
    </div>
  );
}
