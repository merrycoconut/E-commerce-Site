export default function FilterItems ({options}) {
    const filterItems = options.map((option, index) => {
        const proteryName=option.toLowerCase().replace(" ", "-");
                
        return ( 
            <label className="filter-option" key={index}> 
                <input type="checkbox" name={proteryName} />
                {option}
            </label>                  

        )
    });

    return (
        <>
            {filterItems}
        </>
    )
}