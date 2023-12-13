import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import productSlice from './product.slice';
import cartSlice from './cart.slice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
};

const rootReducer = (state, action) => {
    if (action.type === HYDRATE) {
        return {
            ...state,
            ...action.payload,
        };
    }
    return rootReducerWithoutHydrate(state, action);
};

const rootReducerWithoutHydrate = combineReducers({
    productList: productSlice,
    cart: cartSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = ({ isServer }) => {
    if (isServer) {
        return configureStore({
            reducer: persistedReducer,
            middleware: [...getDefaultMiddleware()],
        });
    } else {
        const store = configureStore({
            reducer: persistedReducer,
            middleware: [...getDefaultMiddleware()],
        });
        store.__persistor = persistStore(store);
        return store;
    }
};

export const wrapper = createWrapper(makeStore);
