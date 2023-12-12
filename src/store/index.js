import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import productSlice from './product.slice';
import cartSlice from './cart.slice';

export const makeStore = ({ ...props }) =>
    configureStore({
        reducer: {
            productList: productSlice,
            cart: cartSlice,
        },
        devTools: true,
        ...props,
    });

export const wrapper = createWrapper(makeStore);
