import successImage from '../assets/check.svg';
import { Image } from '../components/utils';
import { SuccessContainer } from '../styles/success-page-styles.js'
import { Link } from 'react-router-dom';

function SuccessPage() {
    return (
        <SuccessContainer>
            <Image img={successImage} height='220px' width='220px' />
            <h1>Success!</h1>
            <div>Your order was sent to processing!</div>
            <Link to='/catalog'>
                <button>Catalog</button>
            </Link>
        </SuccessContainer>
    );
}

export default SuccessPage; 