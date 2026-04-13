import './FilterSideBar.css';
import FilterItems from './FilterItems';
import { useState } from 'react';
import { productFilters } from './productFilters.jsx';


function FilterSection({sectionName, options}) {
    const [isClick, setIsClick] = useState(false);    

    return (
        <div className='filter-section'>
            <div className="filter-head" onClick={() => setIsClick(!isClick)}>
                <p>{sectionName}</p>
                <p> {isClick?"-":"+"} </p>            
            </div>
            <div className="filter-items" hidden={isClick}>
                <FilterItems options={options} />
            </div>
            
            <hr />
        </div>
    )
}

export default function FilterSideBar() {
    const filterSection = productFilters.map(filter =>  <FilterSection key={filter.sectionName} sectionName={filter.sectionName} options={filter.options} />);
    
    function applyFilter(formData) {
        // Get the option
        const selectedOptions = Array.from(formData.keys());
        // Get the filter section
        console.log(selectedOptions);
        

    }

    return (
        <form action={applyFilter}>
            {filterSection}
            <button type="submit">Apply</button>
            <button>Clear All</button>
        </form>
    )
}