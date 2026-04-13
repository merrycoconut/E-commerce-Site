export default function FilterItems ({options}) {
    const filterItems = options.map((option, index) => {
                
        return ( 
            <label className="filter-option" key={index}> 
                <input type="checkbox" name={option.value} />
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