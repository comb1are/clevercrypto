import { configureStore } from '@reduxjs/toolkit';
import type { Middleware } from '@reduxjs/toolkit';
import { baseApi } from './api/baseApi';
import authReducer from './slices/authSlice';
import walletReducer from './slices/walletSlice';

const logoutMiddleware: Middleware = (storeApi) => (next) => (action) => {
    const result = next(action);
    if ((action as { type: string }).type === 'auth/logout') {
        storeApi.dispatch(baseApi.util.resetApiState());
    }
    return result;
};

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        auth: authReducer,
        walletState: walletReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware, logoutMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
