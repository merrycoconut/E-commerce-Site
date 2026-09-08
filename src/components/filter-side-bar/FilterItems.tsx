import "./FilterItems.css";
import type { Options } from "../../utils/types";

interface FilterItemsProps {
  sectionName: string;
  options: Options;
  isColor: boolean;
}
interface FilterItemProps {
  labelClass: string;
  inputType: string;
  sectionName: string;
  inputValue: string | number;
  inputStyle?: { backgroundColor: string | number };
  label: string | false;
}

export default function FilterItems({
  sectionName,
  options,
  isColor,
}: FilterItemsProps) {
  const labelClass = isColor ? "color-option" : "filter-option";
  const inputType = isColor ? "radio" : "checkbox";

  return options.map((option) => {
    const inputStyle = isColor ? { backgroundColor: option.value } : undefined;

    return (
      <FilterItem
        key={option.label}
        labelClass={labelClass}
        inputType={inputType}
        sectionName={sectionName}
        inputValue={option.value}
        inputStyle={inputStyle}
        label={!isColor && option.label}
      />
    );
  });
}

function FilterItem({
  labelClass,
  inputType,
  sectionName,
  inputValue,
  inputStyle,
  label,
}: FilterItemProps) {
  return (
    <label className={labelClass}>
      <input
        type={inputType}
        name={sectionName}
        value={inputValue}
        style={inputStyle as React.CSSProperties | undefined}
      />
      {label}
    </label>
  );
}
