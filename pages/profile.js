import styled from "styled-components"
import { useRouter } from "next/router";
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";
import formatMoney from "../lib/formatMoney";

const stripe = require('stripe')(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

export const getServerSideProps = withPageAuthRequired({
    async getServerSideProps(ctx){
        const session = await getSession(ctx.req, ctx.res);
        const stripeId= session.user[`${process.env.BASE_URL}/stripe_customer_id`];
        const paymentIntents = await stripe.paymentIntents.list({
            customer: stripeId,
        });
        return { props: {orders: paymentIntents.data} };
    },
})


export default function Profile({user, orders}){
    const route = useRouter();
    return(
        user && (
            <ProfileWrapper>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <div>
                    {orders.map((order) => (
                        <Order>
                            <h1>Order Number: {order.id}</h1>
                            <h2>Amount: {formatMoney(order.amount)}</h2>
                            <h2>Receipt Email: {user.email}</h2>
                        </Order>
                    ))}
                </div>
                <button onClick={()=> route.push("/api/auth/logout")}>Logout</button>
            </ProfileWrapper>
        )
    );
}


const Order = styled.div`
    background: #8181812b;
    margin: 2rem 0rem;
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    font-size: 0.6rem;
`;

const ProfileWrapper = styled.div`
    padding: 5em 10rem 5rem 10rem;
`;