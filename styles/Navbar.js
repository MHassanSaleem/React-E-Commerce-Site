import styled from 'styled-components';

export const Navbar = styled.div`
    background: black;
    color: white;
    display: flex;
    justify-content: space-between;
    vertical-align: middle;
`;


export const Logo = styled.div`
    display: flex;
    padding: 20px 40px;
    svg{
        font-size: 1.9rem;
    }
`;

export const CartIcon = styled.div`
    text-align: right;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 40px;
    span{
        background-color: #d61f1f;
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
        font-size: 0.7rem;
        justify-content: center;
        align-items: center;
        display: flex;
        position: absolute;
        top: 10%;
        right: 30%;
    }
    h4{
        font-size: 0.8rem;
    }
    svg{
        font-size: 1rem;
    }
`;