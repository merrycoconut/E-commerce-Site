import "./FilterSection.css";
import FilterItems from "./FilterItems";
import { useState } from "react";

export default function FilterSection({ sectionName, options }) {
  const [isClick, setIsClick] = useState(false);
  const isColor = sectionName === "Color" ? true : false;

  return (
    <div className="filter-section">
      <div className="filter-head" onClick={() => setIsClick(!isClick)}>
        <p> {sectionName} </p>
        <p> {isClick ? "-" : "+"} </p>
      </div>
      <div
        className={isColor ? "color-filter-items filter-items" : "filter-items"}
        hidden={isClick}
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
