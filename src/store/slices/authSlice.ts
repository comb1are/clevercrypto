import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const TOKEN_KEY = '@app_auth_token';
const REFRESH_TOKEN_KEY = '@app_auth_refresh_token';
const USER_ID_KEY = '@app_auth_user_id';

interface AuthState {
    token: string | null;
    refreshToken: string | null;
    isAuthenticated: boolean;
    userId: number | null;
}


const storedToken = localStorage.getItem(TOKEN_KEY);
const storedRefreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
const storedUserId = localStorage.getItem(USER_ID_KEY);

const initialState: AuthState = {
    token: storedToken,
    refreshToken: storedRefreshToken,
    isAuthenticated: !!storedToken,
    userId: storedUserId ? Number(storedUserId) : null,
};

interface SetCredentialsPayload {
    token: string;
    refreshToken: string;
    userId: number;
}

interface SetTokensPayload {
    token: string;
    refreshToken: string;
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials(state, action: PayloadAction<SetCredentialsPayload>) {
            const { token, refreshToken, userId } = action.payload;
            state.token = token;
            state.refreshToken = refreshToken;
            state.userId = userId;
            state.isAuthenticated = true;
            localStorage.setItem(TOKEN_KEY, token);
            localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
            localStorage.setItem(USER_ID_KEY, String(userId));
        },
        
        setTokens(state, action: PayloadAction<SetTokensPayload>) {
            const { token, refreshToken } = action.payload;
            state.token = token;
            state.refreshToken = refreshToken;
            localStorage.setItem(TOKEN_KEY, token);
            localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
        },
        logout(state) {
            state.token = null;
            state.refreshToken = null;
            state.userId = null;
            state.isAuthenticated = false;
            localStorage.removeItem(TOKEN_KEY);
            localStorage.removeItem(REFRESH_TOKEN_KEY);
            localStorage.removeItem(USER_ID_KEY);
        },
    },
});

export const { setCredentials, setTokens, logout } = authSlice.actions;
export default authSlice.reducer;
