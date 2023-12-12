import { items } from '@common/mocks/items';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: items,
    category: 'all'
}

export const productSlice = createSlice({
    name: 'productList',
    initialState,
    reducers: {
        updateProductList: (state, action) => ({
            ...state,
            products: action?.payload,
        }),
        updateCategory: (state, action) => ({
            ...state,
            category: action?.payload,
        }),
        resetProductList: () => {
            return initialState
        },
    },
    extraReducers: () => { },
});

export const { updateProductList, resetProductList, updateCategory } = productSlice.actions;

export default productSlice.reducer;


