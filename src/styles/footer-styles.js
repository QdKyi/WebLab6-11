import styled from 'styled-components'  

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    margin: 25px auto;
    width: 1000px;
`;

export const FooterContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const FooterText = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    font-size: 12px;

    h2 {
        margin: 0;
    }
    p {
        width: 215px;
    }
`;

export const FooterMedia = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 30%;

    img {
        margin: 0 5px;
    }
    
`;

export const FooterCopyright = styled.div`
    display: flex;
    justify-content: space-around;
`;