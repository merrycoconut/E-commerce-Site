import './Body.css';
import ProductList from "./product-list/ProductList";
import FilterSideBar from "./filter-side-bar/FilterSideBar";

export default function Body() {
    return (
        <div className="main-container">
            <FilterSideBar />
            <ProductList />            
        </div>        
    )
}