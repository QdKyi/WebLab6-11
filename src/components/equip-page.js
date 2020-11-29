import { Image } from '../components/utils'
import {UpperContainer, EquipInfo, BottomContainer, ButtonsContainer, Button, PriceContainer
} from '../styles/equip-page-styles'
import { Link, useParams } from "react-router-dom";

export default function EquipPage(props) {

    const { id } = useParams();
    const item = props.itemsList.find(item => (item.id === parseInt(id)));

    return (
        <>
            <UpperContainer>
                <Image img={item.img} height='400px' width='360px' />
                <EquipInfo>
                    <h1>{item.header}</h1>
                    <PriceContainer>
                    <div>{item.text}</div>
                    <div>${item.price}</div>
                    </PriceContainer>
                </EquipInfo>
            </UpperContainer>
            <BottomContainer>
                
                <ButtonsContainer>
                    <Link to="/catalog">
                        <Button>Go Back</Button>
                    </Link>
                    <Button>Add to Cart</Button>
                </ButtonsContainer>
            </BottomContainer>
        </>
    );
} 