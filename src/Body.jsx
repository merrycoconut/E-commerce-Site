import "./Body.css";
import ProductList from "./components/product-list/ProductList.jsx";
import FilterSideBar from "./components/filter-side-bar/FilterSideBar.jsx";
import { useState } from "react";

export default function Body() {
  const [filters, setFilters] = useState([]);

  function applyFilter(formData) {
    const selectedOptions = Array.from(formData.entries());
    setFilters(selectedOptions);
  }

  return (
    <div className="main-container">
      <FilterSideBar
        applyFilter={applyFilter}
        clearFilter={() => setFilters([])}
      />
      <ProductList filters={filters} clearFilter={() => setFilters([])} />
    </div>
  );
}
