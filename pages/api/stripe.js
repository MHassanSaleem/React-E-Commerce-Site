import Stripe from 'stripe';
const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

export default async function handler(req,res){
    console.log('here',stripe);
    if(req.method === "POST"){
        try{
            //create checkout session
            const session = await stripe.checkout.sessions.create({
                submit_type: 'pay',
                mode: 'payment',
                payment_method_types: ['card'],
                shipping_address_collection: {
                    allowed_countries: ['DE','PK']
                },
                allow_promotion_codes: true,
                shipping_options: [{shipping_rate: 'shr_1MJFv2Dg5Lzm24DZYDA81lN7'},{shipping_rate: 'shr_1MJHUvDg5Lzm24DZEoos4SLz'}],
                line_items: req.body.map(item=>{
                    return{
                        price_data:{
                            currency: 'eur',
                            product_data: {
                                name: item.title,
                                images: [item.image.data.attributes.formats.thumbnail.url],
                            },
                            unit_amount: item.price * 100,
                        },
                        adjustable_quantity: {
                            enabled : true,
                            minimum: 1
                        },
                        quantity: item.quantity
                    };
                }),
                //success or failed page
                success_url: `${req.headers.origin}/success?&session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${req.headers.origin}/canceled`,
            });
            res.status(200).json(session); // create the response and add the sattus 200- meaning everything is ok and send back the json format of the session
        } catch (error) {
            res.status(error.statusCode || 500).json(error.message);
        }
    }
}