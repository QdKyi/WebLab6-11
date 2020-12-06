import {ProductsContainer, LatestProducts, ProductContainer, ProductInfo} from '../styles/products-list-styles'
import { Image, Spinner } from '../components/utils'
import HeroSection from '../components/hero-section'
import { useState, useEffect } from 'react'
import { getTools } from '../connection.js'

export default function HomePage(props) { 
    const [border, setBorder] = useState(8);
    const [equip, setEquip] = useState(null);
    const [equipList, setEquipList] = useState(null);

    useEffect(() => {
        (async function () {
            setEquip(await getTools());
        })()
    }, []);

    useEffect(() => {
        if (!equip) { return }
        setEquipList(equip.slice(0, border));
    }, [equip, border]);

    return (
    <>
    <HeroSection/>
    {!equipList ? <Spinner/> : <ProductsContainer>
        <LatestProducts>{props.header}</LatestProducts>
        {equipList.map((equip, index) =>
                <ProductContainer key={`Item${index}`} href={"/equip/" + equip.id}>
                    <Image img={equip.img} width='200px' height='250px' />
                    <ProductInfo>  
                        <h1>{equip.header}</h1>
                        <h2>Price: {equip.price}$</h2>
                        <div> {equip.condition} {equip.text }</div>
                    </ProductInfo>
                </ProductContainer>
            )}
    </ProductsContainer>}
    </>
    )
}
