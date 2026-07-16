import "./FilterSideBar.css";
import FilterSection from "./FilterSection";
import { productFilters } from "../../utils/productFilterData";

interface FilterSideBarProps {
  applyFilter: (formData: FormData) => void;
  clearFilter: () => void;
}

export default function FilterSideBar({
  applyFilter,
  clearFilter,
}: FilterSideBarProps) {
  return (
    <form action={(formData) => applyFilter(formData)}>
      {productFilters.map((filter) => (
        <FilterSection
          key={filter.sectionName}
          sectionName={filter.sectionName}
          options={filter.options}
        />
      ))}
      <div className="filter-button-container">
        <button type="submit">Apply</button>
        <button onClick={() => clearFilter()}>Clear All</button>
      </div>
    </form>
  );
}
