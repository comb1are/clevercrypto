/**
 * DTO: Точное зеркало JSON-ответа бэкенда.
 * НЕ использовать в UI-компонентах напрямую!
 */

/** Данные по одной монете внутри кошелька */
export interface CoinDataDTO {
    address: string;
    balance: number;
}

/** GET /wallet/get/{id} */
export interface WalletResponseDTO {
    data: Record<string, CoinDataDTO>;
}

/** GET /wallet/get — массив ID */
export type WalletIdsDTO = number[];
