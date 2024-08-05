import { useStateContext } from "../lib/Context";
import { CartWrapper, CartStyle, Card, CardInfo, EmptyStyle, Checkout, Cards } from "../styles/CartStyles";
import { QuantityButtons } from '../styles/DetailPage'
import { FaCartPlus} from "react-icons/fa";
import {AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import getStripe from "../lib/getStripe";

//animation varinats, defining hidden and show an then using it in components
const card = {
    hidden: { opacity: 0, sacle: 0.8},
    show: { opacity: 1, scale: 1},
};

const cards = {
    hidden: { opacity: 0},
    show: { opacity: 1, transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3,
    }
  },
};

export default function Cart(){
    const { cartItems, setShowCart, onAdd, onRemove, totalPrice} = useStateContext();

    //payment
    const handleCheckout = async() =>{
        const stripe = await getStripe();
        const response = await fetch("/api/stripe", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(cartItems),
        });
        const data = await response.json();
        await stripe.redirectToCheckout({sessionId: data.id});
    };

    return(
        <CartWrapper 
        animate={{opacity:1}} 
        initial={{opacity:0}}
        exit={{opacity:0}}
        onClick={()=>setShowCart(false)}> 
            <CartStyle 
            initial={{y: "-50%"}}
            animate={{y: "0%"}}
            transition={{type: "tween"}}
            exit={{y: "-50%"}}
            onClick={(e)=>e.stopPropagation()}>
               {cartItems.length < 1 && (
                 <EmptyStyle 
                 initial={{opacity:0, scale: 0.8}}
                 animate={{opacity:1, scale: 1}}>
                    <h3>Shop more! is not it fun? </h3>
                    <FaCartPlus/>
                </EmptyStyle>
               )}
               <Cards layout variants={cards} initial="hidden" animate="show">
                    {cartItems.length >= 1 && cartItems.map((item) => {
                        return(
                            <Card layout variants={card} key={item.slug}>
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
               </Cards>
               {cartItems.length >=1 && <Checkout layout>
                    <h3>SubTotal: {totalPrice}€</h3>
                    <button onClick={handleCheckout}>Purchase</button>
                </Checkout>}
            </CartStyle>
        </CartWrapper>
    );
}