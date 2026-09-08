import "./DropDownMenu.css";

interface OnDropDownChangeProps {
  onDropDownChange: (userSelection: string) => void;
}

export default function DropDownMenu({
  onDropDownChange,
}: OnDropDownChangeProps) {
  return (
    <div className="drop-down-container">
      <select id="sortBy" onChange={(e) => onDropDownChange(e.target.value)}>
        <option value=""> Sort by </option>
        <option value="popularity">Most popular</option>
        <option value="rating">Best rating</option>
        <option value="created">Newest</option>
        <option value="price-asc">Price: Low to high</option>
        <option value="price-desc">Price: High to low</option>
      </select>
    </div>
  );
}
