import {ProductsContainer, LatestProducts, ProductContainer, ProductInfo} from '../styles/products-list-styles'
import { Image } from '../components/utils'
import HeroSection from '../components/hero-section'
import { useEffect, useState } from 'react'

export default function HomePage(props) { 
    const [border, setBorder] = useState(8);
    const [equip, setItems] = useState(props.itemsList.slice(0, border));

    return (
        <>
        <HeroSection />
        <ProductsContainer>
            <LatestProducts>{props.header}</LatestProducts>

            {equip.map((equip, index) =>
                    <ProductContainer key={`Item${index}`} href={"/equip/" + equip.id}>
                        <Image img={equip.img} width='200px' height='250px' />
                        <ProductInfo>  
                            <h1>{equip.header}</h1>
                            <h2>Price: {equip.price}$</h2>
                            <div> {equip.condition} {equip.text }</div>
                        </ProductInfo>
                    </ProductContainer>
                )}
        </ProductsContainer>
        </>
    );

}
