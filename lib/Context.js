import { createContext, useState, useContext} from "react";

const ShopContext= createContext();

export const  StateContext=({children})=>{
    //data for uses over components
    const [quantity,setQuantity] = useState(1);
    const [showCart,setShowCart] = useState(false);
    const [cartItems,setCartItems] = useState([]);

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
        //check if the product s already in the cart
        const exist = cartItems.find((item) => )    
    }

    return(
        <ShopContext.Provider value={{quantity, increaseQuantity, decreaseQuantity, showCart, cartItems, setCartItems, onAdd, setShowCart}}>
            {children}
        </ShopContext.Provider>
    );
}

export const useStateContext = () => useContext(ShopContext);