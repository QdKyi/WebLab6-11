import styled from 'styled-components'

export const ProductsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;
    width: 1000px;
`;

export const LatestProducts = styled.div`
    font-weight: 900;
    font-size: 2.5rem;
    text-align: center;
    margin: 15px auto;
    width: 100%;
`;

export const ProductContainer = styled.a`
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    background-color: #ededed;
    margin-top: 25px;
    border: 1px solid rgba(0,0,0,.125);
    max-width: 200px;
    text-align: left;
    color: #0d1e29;
    font-size: 22px;
    font-weight: 500;
    h1 {
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
    }
    h2 {
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #c03081;
    }
    div {
        font-weight: 400;
        font-size: 80%;
        padding-bottom: 10px;
    }
`;

export const ProductInfo = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 10%;
`;

export const ViewMore = styled.button`
    width: 20%;
    height: 40px;
    margin: 30px 40%;
    padding: 8px 10px;
    font-size: 22px;
    font-weight: 700;
    background-color: transparent;
`