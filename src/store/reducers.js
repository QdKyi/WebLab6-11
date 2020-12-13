import { createReducer } from '@reduxjs/toolkit'
import { add, remove, increment, decrement } from '../store/actions.js';

const equipReducer = createReducer([], (builder) => {
    builder
    .addCase(add, (state, action) => {
        let index = state.findIndex(equip => equip.id === action.payload.id);
        if (index !== -1) {
            return [...state];
        } else {
            return [...state, { ...action.payload, counter: 1 }];
        }
      })
    builder
    .addCase(remove, (state, action) => {
        let index = state.findIndex(equip => equip.id === action.payload.id);
        state.splice(index, 1);
      })
    builder
    .addCase(increment, (state, action) => {
        let index = state.findIndex(equip => equip.id === action.payload.id);
        state[index].counter += 1;
      })
    builder
    .addCase(decrement, (state, action) => {
        let index = state.findIndex(equip => equip.id === action.payload.id);
        if (state[index].counter > 1) {
            state[index].counter -= 1;
        }
      })
})

export default equipReducer;