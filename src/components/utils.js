import logo from '../assets/pias__logo.svg'
import facebook from '../assets/facebook_icon.svg'
import twitter from '../assets/twitter.svg'
import linkedIn from '../assets/linkedin.svg'
import google from '../assets/google_icon.svg'
import {FooterMedia} from '../styles/footer-styles.js'

const icons = [{ name: 'facebook', src: facebook, link: '#' }, { name: 'twitter', src: twitter, link: '#' }, { name: 'google', src: google, link: '#' },
{ name: 'linkedIn', src: linkedIn, link: '#' }]

export function Logo(props) {
    return (
        <a href = ''>
            <img src={logo} alt="HeaderLogo" height={props.height} width={props.width} />
        </a>
    );
}

export function Links() {
    return (
        <FooterMedia>
            {icons.map(icon =>
                <a key={icon.name} href={icon.link}>
                    <img src={icon.src} alt={icon.name} height='30px' width='30px' />
                </a>
            )}
        </FooterMedia>
    );
}

export function Image(props) {
    return (
        <img src={props.img} alt="image" height={props.height} width={props.width} />
    );
}

