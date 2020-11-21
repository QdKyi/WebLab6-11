import styled from 'styled-components'

export const FilterContainer = styled.div `
    display: flex;
    width: 1000px;
    margin: 15px auto;
    align-items: center;
    justify-content: space-between;
`

export const SelectForm = styled.form`
    display: flex;
    width: 500px;
    justify-content: space-around;
    align-items: center;
`

export const Select = styled.select`
    height: 36px;
    width: 150px;
    border-radius: 12px;
    color: black;
    text-align: center;
    background-color: white;
    border-color: black;
`

export const SearchContainer = styled.div`
    width: 400px;
    display: flex;
    justify-content: space-around;
`

export const Input = styled.input`
    height: 32px;
    width: 150px;
    font-size: 16px;
    background-color: white;
    border-color: black;
    border-radius: 12px;
`

export const SearchButton = styled.button`
    height: 36px;
    width: 150px;
    border-radius: 12px;
    font-size: 16px;
    background-color: white;
    border-color: black;
`