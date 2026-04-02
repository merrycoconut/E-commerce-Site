import './FilterSection.css'
import FilterItems from './FilterItems'
import FilterHead from './FilterHead'

export default function FilterSection({sectionName}) {
    return <div className='filter-section'>
        <FilterHead sectionName={sectionName}/>
        <FilterItems />
        <hr />
    </div>
}