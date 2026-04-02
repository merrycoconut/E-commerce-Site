import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";

export default function ProductList() {
    const [products, setProducts] = useState();
    
    async function pullJson() {
        const productUrl = "https://www.greatfrontend.com/api/projects/challenges/e-commerce/products";
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
        pullJson()                       
    }, []);

    return <div className="product-list">{products}</div>
}