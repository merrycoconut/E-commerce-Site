import './DropDownMenu.css'

export default function DropDownMenu ({ setSort }) {
    function handleChange(event) {
        const userSelect = event.target.value; 
        setSort(userSelect);        
    }

    return (
        <div className="drop-down-container">
            <select id='sortBy' onChange={handleChange}>
                <option value="">Sort by </option>
                <option value="popularity">Most popular</option>
                <option value="rating">Best rating</option>
                <option value="created">Newest</option>
                <option value="price-asc">Price: Low to high</option>
                <option value="price-desc">Price: High to low</option>
            </select>
        </div>
    )
}