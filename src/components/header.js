import {HeaderContainer, HeaderNavBar, HeaderButtonStyled, HeaderSearch} from '../styles/header-styles.js'
import {Logo} from './utils'

function HeaderButton(props) {
    return (
        <HeaderButtonStyled href = "">
            {props.heading}
        </HeaderButtonStyled>
    );
}

function Header() {
    return(
        <HeaderContainer className = 'header'>
                <HeaderNavBar>
                    <Logo height = '30px' width = '300px' />
                    <HeaderSearch placeholder = 'Search Products'/>
                    <HeaderButton heading = 'Home' />
                    <HeaderButton heading = 'Cart' />
                    <HeaderButton heading = 'Catalog' />
                    <HeaderButton heading = 'Brands' />
                </HeaderNavBar>
        </HeaderContainer>
    );
}

export default Header;