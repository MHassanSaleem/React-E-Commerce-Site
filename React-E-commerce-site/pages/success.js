import { useRouter } from "next/router";
import { AiOutlineFileDone } from "react-icons/ai";
import { Card, OrderInfo, InfoWrapper, Product } from "../styles/Success";

const stripe = require('stripe')(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

export async function getServerSideProps(params){
    const order = await stripe.checkout.sessions.retrieve(
        params.query.session_id, 
        {
            expand: ["line_items"],
        }
    );
    return { props: { order }};
}

export default function Success({order}){
    const route = useRouter();
    return(
        <Card initial={{opacity: 0, scale: 0}}
              animate={{opacity: 1, scale: 1}}
              transition={{duration: 1}}>
            <h1>Thank you for shopping with us!</h1>
            <div><AiOutlineFileDone/></div>
            <h2>A confirmation email has been sent to</h2>
            <h2>{order.customer_details.email}</h2>
            <InfoWrapper>
                <OrderInfo>
                    <h3>Address</h3>
                    {Object.entries(order.customer_details.address).map(
                        ([key,val]) => (
                            <p key={key}>
                                {key}: {val}    
                            </p>
                        ))}
                </OrderInfo>
                <Product>
                    <h3>Products</h3>
                    {order.line_items.data.map(item => (
                        <div key={item.id}>
                            <p>Product: {item.description}</p>
                            <p>Quantity: {item.quantity}</p>
                            <p>Price: {item.price.unit_amount}</p>
                        </div>
                    ))}
                </Product>
            </InfoWrapper>
            <button onClick={() => route.push('/')}>Continue Shopping</button>
        </Card>
    );
}