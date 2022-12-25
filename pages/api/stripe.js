import Stripe from 'stripe';
const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

export default async function handler(req,res){
    console.log('here',stripe);
    if(req.method === "POST"){
        console.log(req);
    }
}