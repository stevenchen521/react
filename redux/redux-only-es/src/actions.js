// import { createSlice } from '@reduxjs/toolkit';

import pkg from '@reduxjs/toolkit';
const { createSlice } = pkg;


const counterSlice = createSlice({
    name: 'counter',
    initialState: { count: 0 },
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        increment_by_amt: (state, action) =>{
            state.count += action.payload
        },
        decrement_by_amt: (state, action) =>{
            state.count -= action.payload
        }
    },
});

export default counterSlice;
export const { increment, decrement, decrement_by_amt, increment_by_amt } = counterSlice.actions;
