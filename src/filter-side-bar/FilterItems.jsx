export default function FilterItems ({sectionName, options}) {
    const filterItems = options.map((option, index) => {
                
        return ( 
            <label className="filter-option" key={index}> 
                <input type="checkbox" name={sectionName} value={option.value} />
                {option.label}
            </label>                  

        )
    });

    return (
        <>
            {filterItems}
        </>
    )
}