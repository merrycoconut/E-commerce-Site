import "./FilterItems.css";

export default function FilterItems({ sectionName, options, isColor }) {
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
}) {
  return (
    <label className={labelClass}>
      <input
        type={inputType}
        name={sectionName}
        value={inputValue}
        style={inputStyle}
      />
      {label}
    </label>
  );
}
