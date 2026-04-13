import './FilterSideBar.css';
import FilterItems from './FilterItems';
import { useState } from 'react';


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
    const filterSection = filters.map(filter =>  <FilterSection key={filter.sectionName} sectionName={filter.sectionName} options={filter.options} />);
    return (
        <div>
             {filterSection}
        </div>
    )
}

const filters = [
    {
        sectionName: "Collections" ,
        options: ["Lastest arrivals", "Urban Oasis", "Cozy Comfort", "Fresh Fusion"],
    },
    {
        sectionName: "Category",
        options: [ "Men", "Women", "Unisex",],
    },
    {
        sectionName: "Color",
        options: ["blue","brown", "beige", "white", "red", "orange", "brown","black", "green"],
    },
    {
        sectionName: "Rating",
        options: [],
    }        
];