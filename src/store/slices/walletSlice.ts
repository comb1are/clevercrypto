import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface WalletState {
    selectedWalletId: number | null;
}

const initialState: WalletState = {
    selectedWalletId: localStorage.getItem('selectedWalletId')
        ? Number(localStorage.getItem('selectedWalletId'))
        : null,
};

const walletSlice = createSlice({
    name: 'walletState',
    initialState,
    reducers: {
        setSelectedWallet: (state, action: PayloadAction<number>) => {
            state.selectedWalletId = action.payload;
            localStorage.setItem('selectedWalletId', action.payload.toString());
        },
        clearSelectedWallet: (state) => {
            state.selectedWalletId = null;
            localStorage.removeItem('selectedWalletId');
        },
    },
    // Жесткая привязка: если кто-то диспатчит 'auth/logout', мы убиваем и кошелек
    extraReducers: (builder) => {
        builder.addCase('auth/logout', (state) => {
            state.selectedWalletId = null;
            localStorage.removeItem('selectedWalletId');
        });
    }
});

export const { setSelectedWallet, clearSelectedWallet } = walletSlice.actions;
export default walletSlice.reducer;