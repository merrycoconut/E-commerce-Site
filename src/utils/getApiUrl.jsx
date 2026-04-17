export function getApiUrl (isFilter, isSort) {
    let productUrl = new URL("https://www.greatfrontend.com/api/projects/challenges/e-commerce/products");

    // isFilter[0] == true -> Apply filter           
    if (isFilter[0]) { 
        const filterPars = isFilter[1];
        filterPars.forEach(filterPar => {
            const [key, value] = filterPar;        
            productUrl.searchParams.append(key.toLowerCase(), value);
        })
    } 
    
    // isSort -> Apply Sort
    if (isSort) {
        if (isSort.slice(0,5) === "price") {
            productUrl.searchParams.append("sort", "price");  
            productUrl.searchParams.append("direction", isSort.slice(6));                
        } else {
            productUrl.searchParams.append("sort", isSort);    
        }      
    }

    return productUrl;
}