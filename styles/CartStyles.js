import styled from "styled-components";

export const CartWrapper = styled.div`
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

export const CartStyle= styled.div`
    width: 30%;
    background: #f1f1f1;
    padding: 1rem 1rem;
    overflow-y: scroll;
    position: relative;
    color: black;
`;

export const Card = styled.div`
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

export const CardInfo = styled.div`
    width: 50%;
    div{
        display: flex;
        flex-direction: space-between;
    }
`;

export const EmptyStyle= styled.div`
    position: absolute;
    top: 0;
    left: 50%;
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

export const Checkout = styled.div`
    button{
        background: black;
        padding: 1rem 2rem;
        width: 100%;
        color: white;
        margin-top: 2rem;
        cursor: pointer;
    }
`;
