import styled from 'styled-components';

export const Navbar = styled.div`
    background: black;
    color: white;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    grid-gap: 2rem;
    vertical-align: middle;
`;

export const CartIcon = styled.div`
    text-align: right;
`;

export const Logo = styled.div`
    display: flex;
    svg{
        font-size: 1.9rem;
    }
`;