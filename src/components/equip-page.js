import { Image, Spinner } from '../components/utils'
import {UpperContainer, EquipInfo, BottomContainer, ButtonsContainer, Button, PriceContainer
} from '../styles/equip-page-styles'
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import { getToolById } from '../connection.js'
import { useDispatch } from 'react-redux';
import { add } from '../store/actions.js'


export default function EquipPage() {

    const { id } = useParams();
    const [equip, setEquip] = useState(null);
    
    const dispatch = useDispatch();

    useEffect(() => {
        (async function () {
            setEquip(await getToolById(id));
        })()
    });
    

    if (!equip) { return <Spinner /> }
    return (
        <>
            <UpperContainer>
                <Image img={equip.img} height='400px' width='360px' />
                <EquipInfo>
                    <h1>{equip.header}</h1>
                    <PriceContainer>
                    <div>{equip.condition}{equip.text}</div>
                    <div>${equip.price}</div>
                    </PriceContainer>
                </EquipInfo>
            </UpperContainer>
            <BottomContainer>
                
                <ButtonsContainer>
                    <Link to="/catalog">
                        <Button>Go Back</Button>
                    </Link>
                    <Button onClick={() => dispatch(add(equip))}>Add to Cart</Button>
                </ButtonsContainer>
            </BottomContainer>
        </>
    );
} 