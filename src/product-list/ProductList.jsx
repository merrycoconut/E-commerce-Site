import DropDownMenu from "./DropDownMenu";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";

export default function ProductList({isFilter}) {
    const [products, setProducts] = useState();
    const [isSort, setSort] = useState();

    async function pullJson() {
        let productUrl = new URL("https://www.greatfrontend.com/api/projects/challenges/e-commerce/products");

        // isFilter[0] == true -> Apply filter           
        if (isFilter[0]) { 
            const parameters = isFilter[1];
            parameters.forEach(parameter => {
                const [key, value] = parameter;        
                productUrl.searchParams.append(key.toLowerCase(), value);
            })
        } 

        // isSort => Apply Sorting
        if (isSort) {
            let sortPar;
            if (isSort.slice(0,5) === "price") {
                sortPar = "price";
                const directionPar = isSort.slice(6);
                productUrl.searchParams.append("direction", directionPar);                
            } else {
                sortPar = isSort;
            }

            productUrl.searchParams.append("sort", sortPar);            
        }

        // Get product data from API and Render them
        let response = await fetch (productUrl);          
        let result = await response.json();           
        let resultData = Array.from(result.data);            
        let productCards = resultData.map(r => {            
            return <ProductCard 
                key={r.product_id}                  
                imgUrl={r.images[0].image_url}
                colors={r.colors}
                productName={r.name}
                priceRange={r.priceRange}
            />
        });
        setProducts(productCards);
    }

    useEffect(() => {
        pullJson();              
    }, [isFilter, isSort]);

    return(
        <div >
            <DropDownMenu setSort={setSort}/>
            <div className="product-list">
                {products}
            </div>
        </div>
    )
}