import FilterSection from "./FilterSection"

export default function FilterSideBar() {
    return <div>
        <FilterSection sectionName="Collections"/>
        <FilterSection sectionName="Category"/>
        <FilterSection sectionName="Color"/>
        <FilterSection sectionName="Rating"/>
    </div>
}