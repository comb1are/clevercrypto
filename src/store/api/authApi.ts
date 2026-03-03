import { baseApi } from './baseApi';
import { setCredentials } from '../slices/authSlice';


interface LoginRequestDTO {
    email: string;
    password: string;
}

interface RegisterRequestDTO {
    email: string;
    password: string;
}

interface AuthResponseDTO {
    token: string;
    refresh_token: string;
    user_id: number;
}


const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        
        login: builder.mutation<AuthResponseDTO, LoginRequestDTO>({
            queryFn: async (credentials, { dispatch }) => {
                await delay(1000);
                console.log('[FAKE AUTH] Login attempt:', credentials.email);

                
                const fakeResponse: AuthResponseDTO = {
                    token: 'af123a45be67e89a6b0860000d6d5a3f',
                    refresh_token: 'rf_9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d',
                    user_id: 1,
                };

                
                dispatch(setCredentials({
                    token: fakeResponse.token,
                    refreshToken: fakeResponse.refresh_token,
                    userId: fakeResponse.user_id,
                }));

                return { data: fakeResponse };
            },
        }),

        
        register: builder.mutation<AuthResponseDTO, RegisterRequestDTO>({
            queryFn: async (credentials, { dispatch }) => {
                await delay(1000);
                console.log('[FAKE AUTH] Register attempt:', credentials.email);

                
                const fakeResponse: AuthResponseDTO = {
                    token: 'bf456b78cd90f12b3c1970001e7e6b4a',
                    refresh_token: 'rf_1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e',
                    user_id: 2,
                };

                dispatch(setCredentials({
                    token: fakeResponse.token,
                    refreshToken: fakeResponse.refresh_token,
                    userId: fakeResponse.user_id,
                }));

                return { data: fakeResponse };
            },
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
export { authApi };
