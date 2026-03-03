import { baseApi } from './baseApi';
import type { WalletResponseDTO } from '../dto/wallet.dto';
import type { Wallet } from '../models/wallet.model';
import { mapWalletFromDTO } from '../mappers/wallet.mapper';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

interface TransferRequestDTO {
    amount: number;
    address: string;
    coin: string;
    comment?: string;
}

const walletApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getWalletIds: builder.query<number[], void>({
            query: () => '/wallet/get',
            transformResponse: (response: any) => {
                // Если прислали тупо массив [1, 2]
                if (Array.isArray(response)) return response;
                // Если прислали { data: [1, 2] }
                if (response && Array.isArray(response.data)) return response.data;
                // ЕСЛИ ПРИСЛАЛИ { status: "success", wallets: [2] } <--- ТВОЙ КЕЙС
                if (response && Array.isArray(response.wallets)) return response.wallets;

                return [];
            },
            providesTags: ['Wallet'],
        }),

        createWallet: builder.mutation<{ success: boolean; data?: any }, { words: string }>({
            query: (body) => ({
                url: '/wallet/create',
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
                    return parsed;
                } catch (e: any) {
                    // Try to guess if it's an HTML error
                    if (typeof response === 'string' && response.includes('<html')) {
                        throw { message: 'Ошибка сервера: неверный формат ответа (502)' };
                    }
                    if (e.status === 'error') throw e;
                    return { success: true };
                }
            },
            invalidatesTags: ['Wallet'],
        }),

        getWalletById: builder.query<Wallet, number>({
            query: (id) => `/wallet/get/${id}`,
            transformResponse: (response: WalletResponseDTO, _meta, id) =>
                mapWalletFromDTO(id, response),
            providesTags: (_result, _error, id) => [{ type: 'Wallet', id }],
        }),

        createTransfer: builder.mutation<{ success: boolean }, TransferRequestDTO>({
            queryFn: async (body) => {
                await delay(1000);
                console.log('[STATIC TRANSFER]', body);
                return { data: { success: true } };
            },
            invalidatesTags: ['Wallet'],
        }),
    }),
});

export const {
    useGetWalletIdsQuery,
    useGetWalletByIdQuery,
    useCreateTransferMutation,
    useCreateWalletMutation,
} = walletApi;
export { walletApi };
