import type { WalletResponseDTO } from '../dto/wallet.dto';
import type { Wallet, CoinBalance } from '../models/wallet.model';

/**
 * Paranoid mapper: DTO → Frontend Model.
 * Разворачивает Record<string, CoinDataDTO> в массив CoinBalance[].
 * Пропускает записи с невалидными ключами или данными.
 */
export function mapWalletFromDTO(id: number, dto: WalletResponseDTO): Wallet {
    const rawData = dto?.data ?? {};
    const coins: CoinBalance[] = [];

    for (const [symbol, coinData] of Object.entries(rawData)) {
        if (!symbol || typeof coinData !== 'object' || coinData === null) {
            continue;
        }
        coins.push({
            symbol: String(symbol),
            address: String(coinData?.address ?? ''),
            balance: Number(coinData?.balance) || 0,
        });
    }

    return {
        id: Number(id) || 0,
        coins,
    };
}
