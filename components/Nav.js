
import { FaShoppingCart } from 'react-icons/fa';
import { GiPaintedPottery } from 'react-icons/gi';
import { Navbar, CartIcon, Logo, NavItems} from '../styles/Navbar'
import Link from 'next/link';
import Cart from './Cart';
import { useStateContext } from '../lib/Context';
import User from "./User";
import { useUser } from "@auth0/nextjs-auth0/client"

const { AnimatePresence, motion } = require("framer-motion");

export default function Nav() {
    const {showCart, setShowCart, totalQuantities} = useStateContext();
    const {user, error, isLoading} = useUser();
    return (
        <Navbar>
            <Link href={'/'}>
                <Logo>
                    <GiPaintedPottery/>
                    <h1>F l o r e n c e</h1>
                </Logo>
            </Link>
            <NavItems>
                <User/>
                <CartIcon onClick={()=> setShowCart(true)}>
                    { totalQuantities > 0 && <motion.span initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}}>{totalQuantities}</motion.span>}
                    <FaShoppingCart/> 
                    <h4>Cart</h4>
                </CartIcon>
                <AnimatePresence>{showCart && <Cart/>}</AnimatePresence>
            </NavItems>
        </Navbar>
    );
}