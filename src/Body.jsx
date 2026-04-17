import './Body.css';
import ProductList from "./components/product-list/ProductList.jsx";
import FilterSideBar from "./components/filter-side-bar/FilterSideBar.jsx";
import { useState } from 'react';

export default function Body() {
    // isFilter: [true/false, [listOfObject]]
    const [isFilter, setFilter] = useState([false, []]);
    
    return (
        <div className="main-container">
            <FilterSideBar setFilter={setFilter} />
            <ProductList isFilter={isFilter}/>            
        </div>        
    )
}