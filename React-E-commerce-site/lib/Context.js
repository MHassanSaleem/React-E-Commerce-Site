import { createContext, useState, useContext} from "react";

const ShopContext= createContext();

export const  StateContext=({children})=>{
    //data for uses over components
    const [showCart,setShowCart] = useState(false);
    const [cartItems,setCartItems] = useState([]);
    const [quantity,setQuantity] = useState(1);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);


    //increase quantity 
    const increaseQuantity=()=>{
        setQuantity(quan=> quan+1);
    }

    //decrease quantity 
    const decreaseQuantity=()=>{
        setQuantity(quan=>  quan > 1 ? quan-1 : 1 ); 
    }

    //add product and quantity to cart
    const onAdd=(product,quantity)=>{ 
        //counting total price for checkout
        setTotalPrice(prevTotal => prevTotal + product.price * quantity);
        //increasing total quantity in nav cart
        setTotalQuantities(quant => quant + quantity);
        //check if product is in cart
        const foundItem = cartItems.find((item)=> item.slug == product.slug);
        if(foundItem){
            setCartItems(
                cartItems.map((item)=>
                item.slug=== product.slug
                ? {...foundItem, quantity: foundItem.quantity + quantity}
                : item
                )
            );
        }else{
            setCartItems([...cartItems,{...product, quantity: quantity}]);
        }
    };

    //to decrease quantity in cart 
    const onRemove=(product)=>{
        //updating total price for checkout on removing product from cart
        setTotalPrice(prevTotal => prevTotal - product.price);
        //decreasing from total quantity in nav cart
        setTotalQuantities(quant => quant - 1);
        //check if the product s already in the cart
        const exist = cartItems.find((item) => item.slug === product.slug);
        if(exist.quantity === 1){
            setCartItems(cartItems.filter((item) => item.slug !== product.slug));
        } else {
            setCartItems(
                cartItems.map((item) => 
                item.slug === product.slug
                 ?{ ...exist, quantity : exist.quantity - 1 }
                 : item
                )
            );
        }    
    };

    return(
        <ShopContext.Provider value={{quantity, setQuantity, increaseQuantity, decreaseQuantity, showCart, setShowCart, cartItems, setCartItems, onAdd, onRemove, totalQuantities, totalPrice}}>
            {children}
        </ShopContext.Provider>
    );
}

export const useStateContext = () => useContext(ShopContext);