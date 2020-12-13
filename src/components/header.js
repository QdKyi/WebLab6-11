import {HeaderContainer, HeaderNavBar} from '../styles/header-styles.js'
import {Logo} from './utils'
import HeaderButton from '../components/header-button'
import { Link } from "react-router-dom";

function Header() {
    return(
        <HeaderContainer className = 'header'>
                <HeaderNavBar>
                    <Logo height = '30px' width = '300px' />
                    <Link style={{ textDecoration: 'none' }} to="/">
                        <HeaderButton heading = 'Home' />
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/cart">
                        <HeaderButton heading = 'Cart' />
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/catalog">
                        <HeaderButton heading = 'Catalog' />
                    </Link>
                    <HeaderButton heading = 'Brands' />
                </HeaderNavBar>
        </HeaderContainer>
    );
}

export default Header;