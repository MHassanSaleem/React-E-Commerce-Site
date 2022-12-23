import styled from 'styled-components';

export const ProductCard = styled.div`
    color: grey;
    padding: 20px 20px;
    background-color: white;
    position: relative;
    display: flex;
    flex-direction: column;
    
    img{
        width: 100%;
        cursor: pointer;
    }
    h3{
        color: black;
        padding: 10px 10px;
    }

    :hover{
        border: 1px solid black;
    }
`;


