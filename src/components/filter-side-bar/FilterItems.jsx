import './FilterItems.css';

export default function FilterItems ({sectionName, options, isColor}) {
    const labelClass = isColor  ? "color-option": "filter-option";
    const inputType = isColor  ? "radio"  : "checkbox";


    const filterItems = options.map((option, index) => {  
        const inputStyle = isColor  ? { backgroundColor: option.value }  : undefined;

        return ( 
            <label className={labelClass}  key={index}> 
                <input type={inputType} name={sectionName} value={option.value} style={inputStyle} />
                {!isColor && option.label}
            </label>                  
        )
    });

    return ( <> {filterItems} </> )
}