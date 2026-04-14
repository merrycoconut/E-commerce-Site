import './Body.css';
import ProductList from "./product-list/ProductList";
import FilterSideBar from "./filter-side-bar/FilterSideBar";
import { useState } from 'react';

export default function Body() {
    const [isFilter, setFilter] = useState([false, []]);
    
    return (
        <div className="main-container">
            <FilterSideBar setFilter={setFilter} />
            <ProductList isFilter={isFilter}/>            
        </div>        
    )
}