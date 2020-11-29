import styled from 'styled-components'

export const HeroContainer = styled.div`
    display: flex;
    background-image: url('https://playitagainsports.imgix.net/buyerweb/assets/_pias/_img/comp-trial-1.jpg');
    background-size: cover;
    background-color: #ededed;
    background-position: center center;
    height: calc(100vh - 160px);
    width: 100vw;
    flex: 1 1 auto;
    align-items: center;
    justify-content: center;
`;

export const HeroHeader = styled.div`
    display: flex;
    color: #474543;
    font-size: 4rem;
    letter-spacing: .15rem;
`;

export const HeroInfo = styled.div`
    display: flex;
    flex-direction: column; 
`;

export const HeroButtonText = styled.div`
    display: flex;
    flex-direction: column;
    a {
        display: flex;
        justify-content: space-between;
        text-decoration: none;
    }
`;

export const HeroButton = styled.button`
    display: inline-block;
    cursor: pointer;
    font-weight: 400;
    font-size: 1.25rem;
    text-align: center;
    vertical-align: middle;
    border-radius: .3rem;
    color: #211e1e;
    border-color: #211e1e;
    background-color: transparent;
    height: 48px;
    width: 180px;
    margin: 15px auto;
`;

export const HeroText = styled.div`
    display: flex;
    text-align: center;
    margin: auto;
    font-size: 80%;
`;