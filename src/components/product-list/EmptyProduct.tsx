import "./EmptyProduct.css";
import { RiTShirt2Line } from "@remixicon/react";

export default function EmptyProduct({ clearFilter }) {
  return (
    <div className="empty-product">
      <RiTShirt2Line className="empty-product-icon" />
      <p className="empty-product-title">Nothing found just yet</p>
      <p>Adjust your filters a bit, and let's see what we can find!</p>
      <button onClick={() => clearFilter()}>Reset filters</button>
    </div>
  );
}
