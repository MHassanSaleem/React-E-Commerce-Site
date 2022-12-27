import styled from "styled-components";
//importing framer-motion animation in a const, we will use motion in our code below
const {motion} = require("framer-motion"); 

export const Card = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    border-radius: 2rem;
    padding: 3rem 3rem;
    h2{
        margin: 1rem 1rem ;
    }
    svg{
        margin-top: 2rem;
        font-size: 6rem;
        color: lightgreen;
    }
    button{
        margin-top: 2rem;
        color: white;
        background-color: black;
        font-size: 1.2rem;
        font-weight: 500;
        padding: 1rem 2rem;
        cursor: pointer;
    }
`;

export const Product = styled.div`
    font: 1rem;
    width: 100%;
`;

export const OrderInfo = styled.div`
    font: 1rem;
    width: 100%;
    div{
        padding-bottom: 1rem ;
    }
`;

export const InfoWrapper = styled.div`
    display: flex;
`;


