import type { WalletResponseDTO } from '../dto/wallet.dto';
import type { Wallet, CoinBalance } from '../models/wallet.model';


const COIN_NAMES: Record<string, string> = {
    BTC: 'Bitcoin',
    ETH: 'Ethereum',
    USDT: 'USDT',
    SOL: 'Solana',
    TRX: 'Tron',
    TON: 'TON',
    BNB: 'BNB',
    MATIC: 'Polygon',
    AVAX: 'Avalanche',
    LTC: 'Litecoin',
};


export function mapWalletFromDTO(id: number, dto: WalletResponseDTO): Wallet {
    const rawData = dto?.data ?? {};
    const coins: CoinBalance[] = [];

    for (const [symbol, coinData] of Object.entries(rawData)) {
        if (!symbol || typeof coinData !== 'object' || coinData === null) {
            continue;
        }
        coins.push({
            symbol: String(symbol),
            name: COIN_NAMES[symbol] ?? String(symbol),
            address: String(coinData?.address ?? ''),
            balance: Number(coinData?.balance) || 0,
        });
    }

    return {
        id: Number(id) || 0,
        coins,
    };
}
