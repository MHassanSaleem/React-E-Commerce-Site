import { ProductCard } from "../styles/ProductCard";

export default function Products({product}){
    const{title, description, price, image} = product.attributes;
    return(
            <ProductCard>  
                <img src={image.data.attributes.formats.small.url}></img>
                <h3>{title}</h3>
                <p>{description}</p>
                <b>{price} - Euro</b>
            </ProductCard>
    )
}