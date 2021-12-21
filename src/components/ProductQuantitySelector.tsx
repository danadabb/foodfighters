import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import { useState } from "react";

export function ProductQuantitySelector({
  availableQuantity,
}: {
  availableQuantity: number;
}) {
  const [selectedQuantity, setSelectedQuantity] = useState<number>(0);

  return (
    <div className="ProductQuantitySelector-container">
      <Button
        icon={<MinusOutlined />}
        size="large"
        shape="circle"
        disabled={Boolean(selectedQuantity === 0)}
        onClick={() => setSelectedQuantity(selectedQuantity - 1)}
      />

      <Typography className="ProductQuantitySelector-quantity-indicator">
        {selectedQuantity}
      </Typography>

      <Button
        icon={<PlusOutlined />}
        size="large"
        shape="circle"
        disabled={Boolean(selectedQuantity === availableQuantity)}
        onClick={() => setSelectedQuantity(selectedQuantity + 1)}
      />
    </div>
  );
}
