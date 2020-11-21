import {HeaderContainer, HeaderNavBar} from '../styles/header-styles.js'
import {Logo} from './utils'
import HeaderButton from '../components/header-button'

function Header() {
    return(
        <HeaderContainer className = 'header'>
                <HeaderNavBar>
                    <Logo height = '30px' width = '300px' />
                    <HeaderButton heading = 'Home' link = '/' />
                    <HeaderButton heading = 'Cart' />
                    <HeaderButton heading = 'Catalog' link = '/catalog' />
                    <HeaderButton heading = 'Brands' />
                </HeaderNavBar>
        </HeaderContainer>
    );
}

export default Header;