import {FooterContainer, FooterContent, FooterText, FooterMedia, FooterCopyright} from '../styles/footer-styles'
import {Logo, Links} from './utils'

function Footer() {
    return(
        <FooterContainer>
            <FooterContent>
                <FooterText>
                    <h2>Important Text!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nunc maximus, nulla ut commodo</p>
                </FooterText>
                <Logo height = '30px' width = '300px' />
                <FooterMedia>
                    <Links />
                </FooterMedia>
            </FooterContent>
            <FooterCopyright>
            Powered by Pavlo, Inc. | ©2020 Maran Corporation. All Rights Reserved.
            </FooterCopyright>
        </FooterContainer>
    );
}

export default Footer;