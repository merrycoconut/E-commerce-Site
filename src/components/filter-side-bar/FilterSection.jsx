import "./FilterSection.css";
import FilterItems from "./FilterItems";
import { useState } from "react";

export default function FilterSection({ sectionName, options }) {
  const [isMinus, setIsClick] = useState(false);
  const isColor = sectionName === "Color" ? true : false;

  return (
    <div className="filter-section">
      <div className="filter-head" onClick={() => setIsClick(!isMinus)}>
        <p> {sectionName} </p>
        <p> {isMinus ? "-" : "+"} </p>
      </div>
      <div
        className={isColor ? "color-filter-items filter-items" : "filter-items"}
        hidden={isMinus}
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
