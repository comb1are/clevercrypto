import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { RootState } from '../index';
import { setTokens, logout } from '../slices/authSlice';
import { Mutex } from '../lib/mutex';



const mutex = new Mutex();

const rawBaseQuery = fetchBaseQuery({
    baseUrl: '/',
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token;
        if (token) {
            headers.set('Authorization', `Token ${token}`);
        }
        return headers;
    },
});

export const baseQueryWithReauth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    
    await mutex.waitForUnlock();

    let result = await rawBaseQuery(args, api, extraOptions);

    
    if (result.error?.status !== 401) {
        return result;
    }

    
    
    const tokenBeforeAcquire = (api.getState() as RootState).auth.token;

    await mutex.acquire();

    try {
        const currentToken = (api.getState() as RootState).auth.token;

        
        if (currentToken && currentToken !== tokenBeforeAcquire) {
            
            result = await rawBaseQuery(args, api, extraOptions);
            return result;
        }

        
        const refreshToken = (api.getState() as RootState).auth.refreshToken;

        if (!refreshToken) {
            api.dispatch(logout());
            return result;
        }

        
        const refreshResult = await rawBaseQuery(
            {
                url: '/user/token/refresh',
                method: 'POST',
                body: { refresh_token: refreshToken },
            },
            api,
            extraOptions,
        );

        if (refreshResult.data) {
            const data = refreshResult.data as { token: string; refresh_token: string };
            api.dispatch(setTokens({
                token: data.token,
                refreshToken: data.refresh_token,
            }));
            
            result = await rawBaseQuery(args, api, extraOptions);
        } else {
            api.dispatch(logout());
        }
    } finally {
        
        mutex.release();
    }

    return result;
};
