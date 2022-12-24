import { useRouter } from "next/router";
import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";
import { DetailPage, ProductInfo, QuantityButtons, CartButton, Price } from "../../styles/DetailPage";
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
import { useContext } from "react";
import { useStateContext } from '../../lib/Context'

export default function ProductDetails(){
    //using data from states in context
    const {quantity, increaseQuantity, decreaseQuantity, showCart, cartItems, setcartItems, onAdd} = useStateContext();
    //fetching slug
    const {query} = useRouter();
    //fetching data GraphQL
    const [results] = useQuery({
        query: GET_PRODUCT_QUERY,
        variables: {slug: query.slug},
    });
    const {data, fetching, error} = results;
    if(fetching) return <p>loading...</p>;
    if(error) return <p>ohhhhh man! there was an error! see: {error.message}</p>;

    const{title, description, image, price} = data.products.data[0].attributes;

    return(
        <DetailPage>
            <img src={image.data.attributes.formats.small.url}/>
            <ProductInfo>
                <h1>{title}</h1>
                <p>{description}</p>
                <Price>{price} €</Price>
                <QuantityButtons>
                    <span>Quantity </span> <AiFillMinusCircle onClick={decreaseQuantity}/><p>{quantity}</p><AiFillPlusCircle onClick={increaseQuantity}/>
                </QuantityButtons>
                <CartButton onClick={()=>{onAdd(data.products.data[0].attributes,quantity)}}><AiFillPlusCircle/> Add to cart</CartButton>
            </ProductInfo>
        </DetailPage>
    )
}