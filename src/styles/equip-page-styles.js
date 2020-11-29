import styled from 'styled-components'

export const UpperContainer = styled.div`
    width: 1000px;
    margin: 0 auto 50px;
    padding: 2%;
    border-radius: 20px;
    display: flex;
    justify-content: space-around;
`

export const EquipInfo = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: black;
    h1 {
        font-size: 38px;
        font-weight: 700;
        width: 90%;
    }
`

export const BottomContainer = styled.div`
    width: 1000px;
    display: flex;
    margin: 0 auto 50px;
    justify-content: space-between;
    h1 {
        margin: 0;
        color: black;
        font-size: 48px;
        font-weight: 700;
    }
`

export const ButtonsContainer = styled.div`
    width: 1000px;
    display: flex;
    justify-content: space-between;
`

export const Button = styled.button`
    width: 180px;
    height: 50px;
    font-size: 22px;
    font-weight: 700;
    background-color: white;
    border: 3px solid black;
` 
export const PriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    div {
        font-size: 24px;
    }
`