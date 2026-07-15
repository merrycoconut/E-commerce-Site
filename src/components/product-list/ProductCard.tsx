import "./ProductCard.css";

interface ProductCardProps {
  imgUrl: string;
  colors: [];
  productName: string;
  priceRange: {
    highest: number;
    lowest: number;
  };
}

export default function ProductCard({
  imgUrl,
  colors,
  productName,
  priceRange,
}: ProductCardProps) {
  const onSale = priceRange.highest > priceRange.lowest;

  return (
    <button className="product-card">
      <img src={imgUrl} height="300" width="300" />
      <p> {productName} </p>
      <p className="price">
        {" "}
        $
        {onSale ? (
          <>
            <span className="sale">{priceRange.highest}</span>{" "}
            {priceRange.lowest}
          </>
        ) : (
          priceRange.highest
        )}
      </p>
      <div className="color-swatch">
        {colors.map((color) => {
          return (
            <input
              type="radio"
              key={color}
              className="color"
              style={{ backgroundColor: color }}
            />
          );
        })}
      </div>
    </button>
  );
}
