import './DropDownMenu.css'

export default function DropDownMenu (){
    return (
        <div className="drop-down-container">
            <label for='sortBy'>sortBy</label>
            <select id='sortBy'>
                <option value="sort by">sort by </option>
                <option value="sort by">sort by</option>
            </select>
        </div>
    )
}