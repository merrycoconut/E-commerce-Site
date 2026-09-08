type FiltersType = Array<[string, string]> | [];

export function getApiUrl(filters: FiltersType, sortPars: string | undefined) {
  const productUrl = new URL(
    "https://www.greatfrontend.com/api/projects/challenges/e-commerce/products",
  );

  // Apply filter
  if (filters && filters.length) {
    filters.forEach((filter) => {
      const [key, value] = filter;
      productUrl.searchParams.append(key.toLowerCase(), value);
    });
  }

  // Apply Sort
  if (sortPars === "price-asc") {
    productUrl.searchParams.append("sort", "price");
    productUrl.searchParams.append("direction", "asc");
  } else if (sortPars === "price-desc") {
    productUrl.searchParams.append("sort", "price");
    productUrl.searchParams.append("direction", "desc");
  } else if (sortPars) {
    productUrl.searchParams.append("sort", sortPars);
  }

  return productUrl;
}
