import { HeaderButtonStyled} from '../styles/header-styles.js'

function HeaderButton(props) {
    return (
        <HeaderButtonStyled >
            {props.heading}
        </HeaderButtonStyled>
    );
}

export default HeaderButton;