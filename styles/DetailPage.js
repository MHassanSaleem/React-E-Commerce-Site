import styled from 'styled-components';

export const DetailPage = styled.div`
    padding: 50px 50px;
    display: flex;
    justify-content: space-between;
    img{
        width: 40%;
    }
`;

export const ProductInfo = styled.div`
    padding: 20px 20px;
    h1{margin-bottom: 10px;}
    p{color: grey;}
`;


export const QuantityButtons = styled.div`
    margin-top: 20px;
    display: flex;
    color: black;
    align-items: center;

    button{
        background: transparent;
        border: none;
        display: flex;
        font-size: 1.5rem;
    }
    p{
        width: 1rem;
        text-align: center;
    }

`;

export const CartButton = styled.button`
    margin-top: 10px;
    padding: 5px 10px;
    display: flex;
    width: 100%;
    color: white;
    background-color: black;
    cursor: pointer;
`;

export const Price = styled.span`
    float: right;
`;
