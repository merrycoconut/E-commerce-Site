import "./FilterSideBar.css";
import FilterSection from "./FilterSection.jsx";
import { productFilters } from "../../utils/productFilterData.jsx";

export default function FilterSideBar({ applyFilter, clearFilter }) {
  const filterSection = productFilters.map((filter) => (
    <FilterSection
      key={filter.sectionName}
      sectionName={filter.sectionName}
      options={filter.options}
    />
  ));

  return (
    <form action={(formData) => applyFilter(formData)}>
      {filterSection}
      <div className="filter-button-container">
        <button type="submit">Apply</button>
        <button onClick={() => clearFilter()}>Clear All</button>
      </div>
    </form>
  );
}
