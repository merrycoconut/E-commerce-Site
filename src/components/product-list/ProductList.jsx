import DropDownMenu from "./DropDownMenu";
import ProductCard from "./ProductCard";
import EmptyProduct from "./EmptyProduct";
import { useState, useEffect } from "react";
import { getApiUrl } from "../../utils/getApiUrl";

export default function ProductList({ filters, clearFilter }) {
  const [sortPars, setSortPars] = useState();
  const [productData, setProductData] = useState();
  const [fetchStatus, setFetchStatus] = useState();

  let productCards;
  // Sucess fetch data from API
  if (!fetchStatus) {
    productCards =
      productData && productData.length ? (
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

  // Fetch product data from API
  useEffect(() => {
    async function pullJson() {
      let response = await fetch(getApiUrl(filters, sortPars));

      if (response.ok) {
        let result = await response.json();
        return Array.from(result.data);
      } else {
        throw new Error(`HTTP status: ${response.status}`);
      }
    }

    pullJson().then(
      (productCards) => {
        setProductData(productCards);
      },
      (error) => {
        setFetchStatus(error.message);
      },
    );
  }, [filters, sortPars]);

  return (
    <div>
      <DropDownMenu
        onDropDownChange={(userSelection) => setSortPars(userSelection)}
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
