import {ProductsContainer, LatestProducts, ProductContainer, ProductInfo, ViewMore} from '../styles/products-list-styles'
import { Image, Spinner } from '../components/utils'
import FilterTile from '../components/filter-tile'
import { useEffect, useState } from 'react'
import { getFilteredTools } from '../connection.js'
import { Link } from "react-router-dom";

export default function CatalogPage(props) { 
    const [border, setBorder] = useState(8);
    const [equip, setEquip] = useState(null);
    const [EquipToShow, setEquipToShow] = useState(null);
    const [typeFilter, setTypeFilter] = useState('None');
    const [conditionFilter, setManufacturerFilter] = useState('None');
    const [searchText, setSearchText] = useState('')

    function showMore() {
        setBorder(border + 4);
        window.scrollTo({ top: 0 })
    }

    useEffect(() => {
        (async function () {
            setEquip(await getFilteredTools(typeFilter, conditionFilter));
        })()
    }, [typeFilter, conditionFilter]);

    useEffect(() => {
        if (!equip) { return }  
        const pattern = new RegExp(searchText, 'i');
        let filteredItems = equip;
        if (searchText !== '') {
            filteredItems = equip.filter(item => (pattern.test(item.header) ||
                pattern.test(item.description) || pattern.test(item.price)));
        }
        setEquipToShow(filteredItems.slice(0, border));
    }, [border, searchText, equip]);

    return (
        <>
        <FilterTile type={[typeFilter, setTypeFilter]}
                    condition={[conditionFilter, setManufacturerFilter]}
                    search={[searchText, setSearchText]} />
        
        {!EquipToShow ? <Spinner/> : <ProductsContainer>
            <LatestProducts>{props.header}</LatestProducts>

            {EquipToShow.map((equip, index) =>
                <Link to={"/equip/" + equip.id}>
                    <ProductContainer>
                        <Image img={equip.img} width='200px' height='250px' />
                        <ProductInfo>  
                            <h1>{equip.header}</h1>
                            <h2>Price: {equip.price}$</h2>
                            <div>{equip.condition} {equip.text}</div>
                        </ProductInfo>
                    </ProductContainer>
                </Link>
                )}
        </ProductsContainer>}
        <ViewMore onClick={showMore}>View More</ViewMore>
        </>
    );

}
