import './FilterSection.css'
import FilterItems from './FilterItems'
import { useState } from 'react';


export default function FilterSection({sectionName}) {
    const [isClick, setIsClick] = useState(false);    

    return (
        <div className='filter-section'>
            <div className="filter-head" onClick={() => setIsClick(!isClick)}>
                <p>{sectionName}</p>
                <p> {isClick?"-":"+"} </p>            
            </div>
            <div className="filter-items" hidden={isClick}>
                <FilterItems />
            </div>
            
            <hr />
        </div>
    )
}

// To do: add filter options
const filters = {
    collections: {
        "filterName": "Collections",
        options: ["Lastest arrivals", "Urban Oasis", "Cozy Co", "Fresh Fusion"]
    }
}