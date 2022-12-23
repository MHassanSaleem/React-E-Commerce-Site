
import { FaShoppingCart } from 'react-icons/fa';
import { GiPaintedPottery } from 'react-icons/gi';
import { Navbar, CartIcon, Logo } from '../styles/Navbar'
import Link from 'next/link';
import Cart from './Cart';
import { useStateContext } from '../lib/Context';

export default function Nav() {
    const {showCart, setShowCart} = useStateContext();
    return (
        <Navbar>
            <Link href={'/'}>
                <Logo>
                    <GiPaintedPottery/>
                    <h1>F l o r e n c e</h1>
                </Logo>
            </Link>
            <CartIcon onClick={()=> setShowCart(true)}>
                <FaShoppingCart/> 
                Cart
            </CartIcon>
            {showCart && <Cart/>}
        </Navbar>
    );
}