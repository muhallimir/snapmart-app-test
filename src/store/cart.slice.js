import { createSlice } from '@reduxjs/toolkit';

const initialState = []

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        updateCart: (state, action) => {
            const item = {
                ...action.payload,
                quantity: 1,
            };
            state.push(item);
        },
        incrementCartItem: (state, action) => {
            const itemId = action.payload;
            const existingItem = state.find(item => item.id === itemId);
            if (existingItem) {
                existingItem.quantity += 1;
            }
        },
        decrementCartItem: (state, action) => {
            const itemId = action.payload;
            const existingItemIndex = state.findIndex((item) => item.id === itemId);
            if (existingItemIndex !== -1) {
                const existingItem = state[existingItemIndex];
                if (existingItem.quantity === 1) {
                    state.splice(existingItemIndex, 1);
                } else {
                    existingItem.quantity -= 1;
                }
            }
        },
        clearCart: () => {
            return initialState;
        },
    },
    extraReducers: () => { },
});

export const { updateCart, clearCart, incrementCartItem, decrementCartItem } = cartSlice.actions;

export default cartSlice.reducer;


