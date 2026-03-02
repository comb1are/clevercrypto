import { baseApi } from './baseApi';
import type { WalletResponseDTO } from '../dto/wallet.dto';
import type { Wallet } from '../models/wallet.model';
import { mapWalletFromDTO } from '../mappers/wallet.mapper';

// Simulated delay helper
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Hardcoded fake DTOs for development
const FAKE_WALLET_IDS: number[] = [1, 2, 3];

const FAKE_WALLET_RESPONSE: WalletResponseDTO = {
    data: {
        BTC: { address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', balance: 1.4919 },
        ETH: { address: '0x742d35Cc6634C0532925a3b844Bc9e7595f2bD0e', balance: 14.5 },
        USDT: { address: '0x742d35Cc6634C0532925a3b844Bc9e7595f2bD0e', balance: 1050.0 },
        SOL: { address: '7EcDhSYGxXyscszYEp35KHN8vvw3svAuLKTzX7oj5Vht', balance: 45.2 },
        TRX: { address: 'TJCnKsPa7y5okkXvQAidZBzqx3QyQ6sxMW', balance: 5000.0 },
        BNB: { address: '0x742d35Cc6634C0532925a3b844Bc9e7595f2bD0e', balance: 2.5 },
        MATIC: { address: '0x742d35Cc6634C0532925a3b844Bc9e7595f2bD0e', balance: 800.0 },
        AVAX: { address: '0x742d35Cc6634C0532925a3b844Bc9e7595f2bD0e', balance: 12.3 },
    },
};

const walletApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // TODO: Real endpoint — GET /wallet/get
        getWalletIds: builder.query<number[], void>({
            queryFn: async () => {
                await delay(1000);
                return { data: FAKE_WALLET_IDS };
            },
            providesTags: ['Wallet'],
        }),

        // TODO: Real endpoint — GET /wallet/get/{id}
        getWalletById: builder.query<Wallet, number>({
            queryFn: async (id) => {
                await delay(1000);
                return { data: mapWalletFromDTO(id, FAKE_WALLET_RESPONSE) };
            },
            providesTags: (_result, _error, id) => [{ type: 'Wallet', id }],
        }),
    }),
});

export const { useGetWalletIdsQuery, useGetWalletByIdQuery } = walletApi;
export { walletApi };
