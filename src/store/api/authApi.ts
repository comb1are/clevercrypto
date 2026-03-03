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

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<{ token: string }, LoginRequestDTO>({
            query: (body) => ({
                url: '/user/token/create',
                method: 'POST',
                body,
                responseHandler: 'text',
            }),
            transformResponse: (response: string) => {
                try {
                    const parsed = JSON.parse(response);
                    if (parsed.status === 'error') {
                        throw parsed;
                    }
                    return { token: parsed.token || response };
                } catch (e: any) {
                    if (e.status === 'error') throw e;
                    return { token: response };
                }
            },
            async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    if (data?.token && typeof data.token === 'string' && !data.token.includes('{"')) {
                        dispatch(setCredentials({ token: data.token }));
                    }
                } catch (e) {
                    console.error('Login error:', e);
                }
            },
        }),

        register: builder.mutation<{ token: string }, RegisterRequestDTO>({
            query: (body) => ({
                url: '/user/create',
                method: 'POST',
                body,
                responseHandler: 'text',
            }),
            transformResponse: (response: string) => {
                try {
                    const parsed = JSON.parse(response);
                    if (parsed.status === 'error') {
                        throw parsed;
                    }
                    return { token: parsed.token || response };
                } catch (e: any) {
                    if (e.status === 'error') throw e;
                    return { token: response };
                }
            },
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                    const loginResult = await dispatch(
                        authApi.endpoints.login.initiate({
                            email: arg.email,
                            password: arg.password,
                        }),
                    ).unwrap();
                    if (loginResult?.token && typeof loginResult.token === 'string' && !loginResult.token.includes('{"')) {
                        dispatch(setCredentials({ token: loginResult.token }));
                    }
                } catch (e) {
                    console.error('Register auto-login error:', e);
                }
            },
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
export { authApi };
