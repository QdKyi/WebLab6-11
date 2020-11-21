import {HeroContainer, HeroHeader, HeroInfo, HeroText, HeroButtonText, HeroButton} from '../styles/hero-section-styles'

function HeroSection() {
    return(
        <HeroContainer>
            <HeroInfo>
                <HeroHeader>Very important text!</HeroHeader>
                <HeroButtonText>
                    <HeroButton>Buy Gear</HeroButton>
                    <HeroText>Online & In Store</HeroText>
                </HeroButtonText>       
            </HeroInfo>
        </HeroContainer>

    );
}

export default HeroSection;