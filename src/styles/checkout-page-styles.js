import styled from 'styled-components'

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        font-size: 48px;
        font-weight: 700;
    }
`

export const FieldsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 900px;
    height: 400px;
    margin-bottom: 20px;
`

export const Field = styled.div`
    display: flex;
    height: 150px;
    width: 40%;
    flex-direction: column;
`

export const Label = styled.label`
    font-size: 28px;
    font-weight: 700;
`

export const Input = styled.input`
    -webkit-appearance: none;
    height: 36px;
    border: 3px solid black;
    padding: 0 8px;
    font-size: 20px;
`

export const Button = styled.button`
    width: 180px;
    height: 50px;
    font-size: 32px;
    font-weight: 700;
    border: 3px solid black;
    background-color: white;
`

export const Error = styled.span`
    margin-left: 6px;
    font-size: 18px;
    font-weight: 600;
` 