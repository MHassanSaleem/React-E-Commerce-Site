import { ProductCard } from "../styles/ProductCard";
import Link from "next/link";

export default function Products({product}){
    const{title, description, price, image, slug} = product.attributes;
    return(
        <Link href={`/product/${slug}`}>
            <ProductCard>  
                <img src={image.data.attributes.formats.small.url}></img>
                <h3>{title}</h3>
                <p>{description}</p>
                <b>{price} - Euro</b>
            </ProductCard>
        </Link>
    )
}