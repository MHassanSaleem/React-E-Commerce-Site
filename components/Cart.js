import { useStateContext } from "../lib/Context";
import { CartWrapper, CartStyle, Card, CardInfo, EmptyStyle, Checkout } from "../styles/CartStyles";
import { QuantityButtons } from '../styles/DetailPage'
import { FaCartPlus} from "react-icons/fa";
import {AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'

export default function Cart(){
    const { cartItems, setShowCart, onAdd, onRemove, totalPrice} = useStateContext();
    return(
        <CartWrapper onClick={()=>setShowCart(false)}> 
            <CartStyle onClick={(e)=>e.stopPropagation()}>
               {cartItems.length < 1 && (
                 <EmptyStyle>
                    <h3>Shop more! is not it fun? </h3>
                    <FaCartPlus/>
                </EmptyStyle>
               )}
               {cartItems.length >= 1 && cartItems.map((item) => {
                return(
                    <Card key={item.slug}>
                        <img src={item.image.data.attributes.formats.thumbnail.url} alt={item.title}></img>
                        <CardInfo>
                            <p>{item.title}</p>
                            <b>{item.price}</b>
                            <QuantityButtons>
                                <span>Quantity  </span>
                                <button onClick={()=>onRemove(item)}><AiFillMinusCircle/></button>
                                <p>{item.quantity}</p>
                                <button onClick={()=>onAdd(item,1)}><AiFillPlusCircle/></button>
                            </QuantityButtons>
                        </CardInfo>
                    </Card>
                    );
               })}
               {cartItems.length >=1 && <Checkout>
                    <h3>SubTotal: {totalPrice}€</h3>
                    <button>Purchase</button>
                </Checkout>}    
            </CartStyle>
        </CartWrapper>
    );
}