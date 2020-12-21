import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    width: 100%;
    margin: 0 auto;
    position: sticky;
    top: 0;
    background-color: white;
`;

export const HeaderNavBar = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1000px;
    margin: 16px auto;
    padding: 0;
`

export const HeaderButtonStyled = styled.a`
    margin: 0 15px;
    text-decoration: none;
    color: black;
`