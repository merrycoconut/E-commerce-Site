import './ProductCard.css'

export default function ProductCard({ imgUrl, colors, productName, priceRange }) {
    const displayColors = colors.map((color, index) => {
        return <input type="radio" 
            key={index}
            className="color"
            style={{backgroundColor: color}}
            />
    });
    
    const onSale = priceRange.highest > priceRange.lowest;

    return <button className="product-card">        
        <img
            src={imgUrl}
            height = "300"
            width="300"
        />
        <p> {productName} </p>
        <p className="price"> $
            {onSale? <><span className="sale">{priceRange.highest}</span> {priceRange.lowest}</>: priceRange.highest}
        </p>
        <div className='color-swatch'>{displayColors}</div>                
    </button>
}
