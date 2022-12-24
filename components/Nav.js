
import { FaShoppingCart } from 'react-icons/fa';
import { GiPaintedPottery } from 'react-icons/gi';
import { Navbar, CartIcon, Logo } from '../styles/Navbar'
import Link from 'next/link';
import Cart from './Cart';
import { useStateContext } from '../lib/Context';

export default function Nav() {
    const {showCart, setShowCart, totalQuantities} = useStateContext();
    return (
        <Navbar>
            <Link href={'/'}>
                <Logo>
                    <GiPaintedPottery/>
                    <h1>F l o r e n c e</h1>
                </Logo>
            </Link>
            <CartIcon onClick={()=> setShowCart(true)}>
                { totalQuantities > 0 && <span>{totalQuantities}</span>}
                <FaShoppingCart/> 
                <h4>Cart</h4>
            </CartIcon>
            {showCart && <Cart/>}
        </Navbar>
    );
}