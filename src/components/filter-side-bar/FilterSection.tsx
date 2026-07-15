import "./FilterSection.css";
import FilterItems from "./FilterItems.js";
import { useState } from "react";

interface FilterSectionProps {
  sectionName: string;
  options:
    | { label: string; value: string }[]
    | { label: string; value: number }[];
}

export default function FilterSection({
  sectionName,
  options,
}: FilterSectionProps) {
  const [isMinus, setIsMinus] = useState(false);
  const isColor = sectionName === "Color" ? true : false;

  return (
    <div className="filter-section">
      <div className="filter-head" onClick={() => setIsMinus(!isMinus)}>
        <p> {sectionName} </p>
        <p> {isMinus ? "-" : "+"} </p>
      </div>
      <div
        className={
          isMinus
            ? "hide-items"
            : isColor
              ? "color-filter-items filter-items"
              : "filter-items"
        }
      >
        <FilterItems
          sectionName={sectionName}
          options={options}
          isColor={isColor}
        />
      </div>
    </div>
  );
}
