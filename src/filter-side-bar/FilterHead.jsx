export default function FilterHead ({sectionName}) {
    function handleClick(e) {
        console.log(e);
        // When the button is clicked,
        // the default button is +
        // the first click + -> -, and hide the Filter Items 
    }
    return (
        <div className="filter-head">
            <p>{sectionName}</p>
            <button onClick={handleClick}> + </button>            
        </div>
    )
}