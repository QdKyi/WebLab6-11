import {HeaderContainer, HeaderNavBar} from '../styles/header-styles.js'
import {Logo} from './utils'
import HeaderButton from '../components/header-button'
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Header() {

    let history = useHistory();
    let isAuth = false;
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");
    const email = localStorage.getItem("email");
    if (username != null && email != null && password != null) {
        isAuth = true;
    }
  
    const logout = () => {
      localStorage.setItem("isAuth", false);
      history.push("/login");
      history.go(0);
    };

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

                    {isAuth ? (
                        <Link style={{ textDecoration: 'none' }} onClick={logout}>
                            <HeaderButton heading = 'Log out' />
                        </Link>
                        ) : (
                        <>
                            <Link style={{ textDecoration: 'none' }} to="/login">
                                <HeaderButton heading = 'LogIn' />
                            </Link>
                            <Link style={{ textDecoration: 'none' }} to="/register">
                                <HeaderButton heading = 'Register' />
                            </Link>
                        </>
                        )}

                </HeaderNavBar>
        </HeaderContainer>
    );
}

export default Header;