import styled from "styled-components";
//importing framer-motion animation in a const, we will use motion in ou rcode below
const {motion} = require("framer-motion"); 

export const CartWrapper = styled(motion.div)`
    position: fixed;
    right: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background: rgba(0,0,0,0.4);
    z-index: 100;
    display: flex;
    justify-content: flex-end;
`;

export const CartStyle= styled(motion.div)`
    width: 30%;
    padding: 20px 0px 0px 20px;
    background: #f1f1f1;
    overflow-y: scroll;
    position: relative;
    color: black;
`;

export const Card = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 1rem;
    overflow: hidden;
    background: white;
    padding: 1rem;
    margin: 2rem 0rem;
    height: 20%;
`;

export const CardInfo = styled(motion.div)`
    width: 50%;
    div{
        display: flex;
        flex-direction: space-between;
    }
`;

export const EmptyStyle= styled(motion.div)`
    position: absolute;
    top: 0;
    transform: translate(-50%, 0%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    align-items: center;
    svg{
        font-size: 10rem;
        color: var(--secondary);
    }
`;

export const Checkout = styled(motion.div)`
    button{
        background: black;
        padding: 1rem 2rem;
        width: 100%;
        color: white;
        margin-top: 2rem;
        cursor: pointer;
    }
`;

export const Cards = styled(motion.div)`
`;
