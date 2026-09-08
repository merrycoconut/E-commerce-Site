import "./Body.css";
import ProductList from "./components/product-list/ProductList";
import FilterSideBar from "./components/filter-side-bar/FilterSideBar";
import { useState } from "react";

type FiltersType = [string, FormDataEntryValue][] | [];

export default function Body() {
  const [filters, setFilters] = useState<FiltersType>([]);

  function applyFilter(formData: FormData) {
    const selectedOptions = Array.from(formData.entries()) as Array<
      [string, string]
    >;
    setFilters(selectedOptions);
  }

  return (
    <div className="main-container">
      <FilterSideBar
        applyFilter={applyFilter}
        clearFilter={() => setFilters([])}
      />
      <ProductList
        filters={filters as Array<[string, string]>}
        clearFilter={() => setFilters([])}
      />
    </div>
  );
}
