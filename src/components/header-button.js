import { HeaderButtonStyled} from '../styles/header-styles.js'

function HeaderButton(props) {
    return (
        <HeaderButtonStyled href = {props.link}>
            {props.heading}
        </HeaderButtonStyled>
    );
}

export default HeaderButton;