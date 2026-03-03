


export interface CoinDataDTO {
    address: string;
    balance: number;
}


export interface WalletResponseDTO {
    data: Record<string, CoinDataDTO>;
}


export type WalletIdsDTO = number[];
