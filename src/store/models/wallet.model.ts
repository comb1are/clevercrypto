/**
 * Frontend Model: чистый тип для UI-компонентов.
 * Record<string, CoinDataDTO> развёрнут в массив CoinBalance[].
 */

export interface CoinBalance {
    symbol: string;
    address: string;
    balance: number;
}

export interface Wallet {
    id: number;
    coins: CoinBalance[];
}
