import {ProductsContainer, LatestProducts, ProductContainer, ProductInfo} from '../styles/products-list-styles'
import { Image } from '../components/utils'

const { useState } = require("react");

function ProductsList(props) {

    const [equip, setEquip] = useState([
        {
            header: 'Used *Other Brand 15 WAY OUUL STAND BAG Golf / Stand Bags',
            price: 123,
            text: 'Used | Durham, NC',
            img: 'https://playitagainsports.imgix.net/images/11614-S000126443-1?auto=compress,format&amp;fit=clip&amp;w=350'
        },
        {
            header: 'Used *Other Brand 15 WAY OUUL STAND BAG Golf / Stand Bags',
            price: 123,
            text: 'Used | Durham, NC',
            img: 'https://playitagainsports.imgix.net/images/11614-S000126443-1?auto=compress,format&amp;fit=clip&amp;w=350'
        },
        {
            header: 'Used *Other Brand 15 WAY OUUL STAND BAG Golf / Stand Bags',
            price: 123,
            text: 'Used | Durham, NC',
            img: 'https://playitagainsports.imgix.net/images/11614-S000126443-1?auto=compress,format&amp;fit=clip&amp;w=350'
        },
        {
            header: 'Used *Other Brand 15 WAY OUUL STAND BAG Golf / Stand Bags',
            price: 123,
            text: 'Used | Durham, NC',
            img: 'https://playitagainsports.imgix.net/images/11614-S000126443-1?auto=compress,format&amp;fit=clip&amp;w=350'
        }
    ])

    return(
        <ProductsContainer>
            <LatestProducts>LATEST PRODUCTS</LatestProducts>

            {equip.map((equip, index) =>
                    <ProductContainer key={`Item${index}`}>
                        <Image img={equip.img} width='200px' height='250px' />
                        <ProductInfo>  
                            <h1>{equip.header}</h1>
                            <h2>Price: {equip.price}$</h2>
                            <div>{equip.text }</div>
                        </ProductInfo>  
                    </ProductContainer>
                )}
        </ProductsContainer>

    );
}

export default ProductsList;