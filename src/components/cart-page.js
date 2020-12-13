import React, { useEffect, useState } from 'react';
import {
    CartPageContainer, EquipContainer, CountButton,
    DeleteButton, NavButtonsContainer, NavButton, EmptyStyle
} from '../styles/cart-page-styles';
import { Link } from "react-router-dom";
import { Image } from '../components/utils';
import { useDispatch } from 'react-redux';
import { remove, increment, decrement } from '../store/actions.js';
import { useSelector } from 'react-redux';

export default function CartPage() {

    const dispatch = useDispatch();
    const equip = useSelector(state => state);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setTotalPrice(equip.reduce((counter, item) =>
            (counter + item.price * item.counter), 0))
    }, [equip])

    if (!equip.length) { return <EmptyStyle>Cart is Currently Empty!</EmptyStyle> }
    return (
        <CartPageContainer>
            <h1>Shopping Cart</h1>
            {equip.map(equip =>
                <EquipContainer key={equip.id}>
                    <Link style={{ display: 'flex', textDecoration: 'none', color: 'black', 'align-items': 'center'  }} to={"/equip/" + equip.id}>
                        <Image img={equip.img} height='160px' width='160px' />
                        <h1>{equip.header}</h1>
                    </Link>
                    <CountButton onClick={() => (dispatch(increment(equip)))}>+</CountButton>
                    <h2>{equip.counter}</h2>
                    <CountButton onClick={() => (dispatch(decrement(equip)))}>-</CountButton>
                    <DeleteButton onClick={() => (dispatch(remove(equip)))}>Delete</DeleteButton>
                    <h2>{equip.price * equip.counter}$</h2>
                </EquipContainer>
            )}
            <h1>Total: {totalPrice}$</h1>
            <NavButtonsContainer>
                <Link to='/catalog'>
                    <NavButton>Back</NavButton>
                </Link>
                <NavButton >Continue</NavButton>
            </NavButtonsContainer>
        </CartPageContainer>
    );
}