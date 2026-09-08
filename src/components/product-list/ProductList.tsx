import DropDownMenu from "./DropDownMenu";
import ProductCard from "./ProductCard";
import EmptyProduct from "./EmptyProduct";
import { useState, useEffect } from "react";
import { getApiUrl } from "../../utils/getApiUrl";

interface ProductListProps {
  filters: Array<[string, string]>;
  clearFilter: () => void;
}

export default function ProductList({
  filters,
  clearFilter,
}: ProductListProps) {
  type Product = {
    product_id: string;
    images: { image_url: string }[];
    colors: [];
    name: string;
    priceRange: {
      highest: number;
      lowest: number;
    };
  };

  type ProductData = Product[];

  const [sortPars, setSortPars] = useState<string | undefined>();
  const [productData, setProductData] = useState<ProductData>();
  const [fetchStatus, setFetchStatus] = useState();

  let productCards;
  // Sucess fetch data from API
  if (!fetchStatus) {
    if (productData) {
      productCards = productData.length ? (
        productData.map((r) => {
          return (
            <ProductCard
              key={r.product_id}
              imgUrl={r.images[0].image_url}
              colors={r.colors}
              productName={r.name}
              priceRange={r.priceRange}
            />
          );
        })
      ) : (
        // If nothing found show empty state
        <EmptyProduct clearFilter={clearFilter} />
      );
    }
  }

  // Fetch product data from API
  useEffect(() => {
    async function pullJson() {
      const response = await fetch(getApiUrl(filters, sortPars));

      if (response.ok) {
        const result = await response.json();
        console.log(Array.from(result.data));

        return Array.from(result.data);
      } else {
        throw new Error(`HTTP status: ${response.status}`);
      }
    }

    pullJson().then(
      (response) => {
        const data = response as Product[];
        setProductData(data);
      },
      (error) => {
        setFetchStatus(error.message);
      },
    );
  }, [filters, sortPars]);

  return (
    <div>
      <DropDownMenu
        onDropDownChange={(userSelection: string) => setSortPars(userSelection)}
      />
      <div className="product-list">
        {!fetchStatus ? (
          productCards
        ) : (
          <div>
            <p>Sorry, we can't find the page you're looking for. </p>
            <p>{fetchStatus}</p>
          </div>
        )}
      </div>
    </div>
  );
}
