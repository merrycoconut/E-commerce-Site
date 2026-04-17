import './FilterSideBar.css';
import FilterSection from './FilterSection.jsx';
import { productFilters } from '../../utils/productFilterData.jsx';

export default function FilterSideBar({setFilter}) {
    const filterSection = productFilters.map(filter =>  <FilterSection key={filter.sectionName} sectionName={filter.sectionName} options={filter.options} />);
    
    function applyFilter(formData) {
        const selectedOptions = Array.from(formData.entries());        
        setFilter([true, selectedOptions]);
    }

    return (
        <form action={applyFilter}>
            {filterSection}
            <div className='filter-button-container'>
                <button type="submit">Apply</button>
                <button onClick={() => setFilter([false, {}])}>Clear All</button>
            </div>
            
        </form>
    )
}