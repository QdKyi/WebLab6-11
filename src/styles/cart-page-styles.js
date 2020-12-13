import styled from 'styled-components'

export const CartPageContainer = styled.div`
    display: flex;
    width: 1000px;
    margin: 0 auto;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    h1 {
        font-size: 48px;
    }
`

export const EquipContainer = styled.div`
    height: 160px;
    width: 100%;
    border-radius: 16px;
    display: flex;
    align-items: center;
    h1 {
        width: 400px;
        margin: 0 20px 0 20px;
        font-size: 30px;
    }
    h2 {
        
        font-size: 32px;
    }
`

export const CountButton = styled.button`
    background-color: white;
    border: 3px solid black;
    font-size: 30px;
    font-weight: 700;
    margin: 0 5px;
    width: 40px;
    height: 40px;
    text-align: center;
`

export const DeleteButton = styled.button`
    width: 160px;
    height: 40px;
    margin: 0 18px 0 10px;
    font-size: 26px;
    font-weight: 700;
    background-color: white;
    border: 3px solid black;
`

export const NavButtonsContainer = styled.div`
    width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const NavButton = styled.button`
    width: 180px;
    height: 50px;
    font-size: 26px;
    font-weight: 700;
    background-color: white;
    border: 3px solid black;
`

export const EmptyStyle = styled.h1`
    height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 64px;
    font-weight: 700;
`