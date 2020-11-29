import {ProductsContainer, LatestProducts, ProductContainer, ProductInfo, ViewMore} from '../styles/products-list-styles'
import { Image } from '../components/utils'
import FilterTile from '../components/filter-tile'
import { useEffect, useState } from 'react'

export default function CatalogPage(props) { 
    const [border, setBorder] = useState(8);
    const [equip, setItems] = useState(props.itemsList.slice(0, border));
    const [typeFilter, setTypeFilter] = useState('None');
    const [conditionFilter, setManufacturerFilter] = useState('None');
    const [searchText, setSearchText] = useState('')

    function showMore() {
        setBorder(border + 4);
    }

    useEffect(() => {
        const pattern = new RegExp(searchText, 'i');

        let filteredItems = props.itemsList.filter(item => (searchText === '' ||
            pattern.test(item.header) || pattern.test(item.text) ||
            pattern.test(item.price)));

        filteredItems = filteredItems.filter(item => (item.type === typeFilter ||
            typeFilter === 'None'));

        setItems(filteredItems.filter(item => (item.condition === conditionFilter ||
            conditionFilter === 'None')).slice(0, border));
    }, [border, typeFilter, conditionFilter, searchText, props.itemsList]);

    return (
        <>
        <FilterTile type={[typeFilter, setTypeFilter]}
                    condition={[conditionFilter, setManufacturerFilter]}
                    search={[searchText, setSearchText]} />
        <ProductsContainer>
            <LatestProducts>{props.header}</LatestProducts>

            {equip.map((equip, index) =>
                    <ProductContainer key={`Item${index}`} href={"/equip/" + equip.id}>
                        <Image img={equip.img} width='200px' height='250px' />
                        <ProductInfo>  
                            <h1>{equip.header}</h1>
                            <h2>Price: {equip.price}$</h2>
                            <div>{equip.text }</div>
                        </ProductInfo>
                    </ProductContainer>
                )}
        </ProductsContainer>
        <ViewMore onClick={showMore}>View More</ViewMore>
        </>
    );

}
