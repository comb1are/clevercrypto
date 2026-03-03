

export interface CoinBalance {
    symbol: string;
    name: string;
    address: string;
    balance: number;
}

export interface Wallet {
    id: number;
    coins: CoinBalance[];
}
