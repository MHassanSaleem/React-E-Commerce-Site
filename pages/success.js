import { useRouter } from "next/router";

const stripe = require('stripe')(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

export async function getServerSideProps(params){
    const oredr = await stripe.checkout.sessions.retrieve(
        params.query.session_id, 
    )
}

export default function Success(){
    const route = useRouter();
    return(
        <div>
            <div>
                <h1>Thank you for shopping with us!</h1>
                <h2>A confirmation email has been sent to</h2>
                <h2>email</h2>
                <div>
                    <h3>Address</h3>
                    <h2>Address Info</h2>
                </div>
                <div>
                    <h3>Products</h3>
                    <h2>All the products</h2>
                </div>
                <button onClick={() => route.push('/')}>Continue Shopping</button>
            </div>
        </div>
    );
}