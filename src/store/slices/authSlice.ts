import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const TOKEN_KEY = '@app_auth_token';
const USER_ID_KEY = '@app_auth_user_id';

interface AuthState {
    token: string | null;
    isAuthenticated: boolean;
    userId: number | null;
}

const storedToken = localStorage.getItem(TOKEN_KEY);
const storedUserId = localStorage.getItem(USER_ID_KEY);

const initialState: AuthState = {
    token: storedToken,
    isAuthenticated: !!storedToken,
    userId: storedUserId ? Number(storedUserId) : null,
};

interface SetCredentialsPayload {
    token: string;
    userId?: number;
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials(state, action: PayloadAction<SetCredentialsPayload>) {
            const { token, userId } = action.payload;
            state.token = token;
            state.isAuthenticated = true;
            localStorage.setItem(TOKEN_KEY, token);
            if (userId !== undefined) {
                state.userId = userId;
                localStorage.setItem(USER_ID_KEY, String(userId));
            }
        },
        logout(state) {
            state.token = null;
            state.userId = null;
            state.isAuthenticated = false;
            localStorage.removeItem(TOKEN_KEY);
            localStorage.removeItem(USER_ID_KEY);
        },
    },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
